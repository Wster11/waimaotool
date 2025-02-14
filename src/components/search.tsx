'use client'

import { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { searchTools, Tool } from '@/lib/tools'

export function SearchTools() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()
  const resultsRef = useRef<HTMLDivElement>(null)
  const selectedRef = useRef<HTMLButtonElement>(null)

  const searchResults = query ? searchTools(query) : []

  // 处理全局快捷键
  useEffect(() => {
    const handleGlobalKeydown = (e: KeyboardEvent) => {
      // Command/Ctrl + K 打开搜索框
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      
      // Command/Ctrl + / 显示快捷键帮助
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault()
        // TODO: 显示快捷键帮助对话框
      }
    }

    window.addEventListener('keydown', handleGlobalKeydown)
    return () => window.removeEventListener('keydown', handleGlobalKeydown)
  }, [])

  // 处理滚动跟随
  useEffect(() => {
    if (selectedRef.current && resultsRef.current) {
      const container = resultsRef.current
      const selected = selectedRef.current

      const containerHeight = container.clientHeight
      const itemTop = selected.offsetTop
      const itemHeight = selected.clientHeight
      const scrollTop = container.scrollTop

      // 如果选中项在可视区域外，则滚动到合适位置
      if (itemTop < scrollTop) {
        // 向上滚动
        container.scrollTop = itemTop
      } else if (itemTop + itemHeight > scrollTop + containerHeight) {
        // 向下滚动
        container.scrollTop = itemTop + itemHeight - containerHeight
      }
    }
  }, [selectedIndex])

  // 处理搜索框键盘事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : prev
        )
        break
        
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : prev)
        break
        
      case 'Enter':
        e.preventDefault()
        if (searchResults[selectedIndex]) {
          handleToolSelect(searchResults[selectedIndex])
        }
        break
        
      case 'Escape':
        e.preventDefault()
        setIsOpen(false)
        break
        
      case 'Tab':
        e.preventDefault()
        setSelectedIndex(prev => 
          e.shiftKey
            ? prev > 0 ? prev - 1 : searchResults.length - 1
            : prev < searchResults.length - 1 ? prev + 1 : 0
        )
        break
    }
  }

  const handleToolSelect = (tool: Tool) => {
    setIsOpen(false)
    setQuery('')
    // 添加 highlight 参数到 URL
    router.push(`${tool.href}?highlight=${tool.id}`)
  }

  // 点击外部关闭搜索
  const handleClickOutside = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <input
          type="text"
          placeholder="搜索工具... (⌘K)"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
            setSelectedIndex(0)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        />
      </div>

      {isOpen && query && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg z-50">
            <div className="p-2">
              {searchResults.length > 0 ? (
                <div 
                  ref={resultsRef}
                  className="space-y-1 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800 scrollbar-track-transparent"
                >
                  {searchResults.map((tool, index) => (
                    <button
                      key={tool.id}
                      ref={index === selectedIndex ? selectedRef : null}
                      className={`w-full flex items-center gap-3 p-2 rounded-md transition-colors text-left
                        ${index === selectedIndex 
                          ? 'bg-blue-50 dark:bg-blue-900/30' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      onClick={() => handleToolSelect(tool)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <div className={`w-8 h-8 rounded-lg ${tool.bgColor} flex items-center justify-center shrink-0`}>
                        <span className="text-lg">{tool.icon}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium truncate">{tool.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          {tool.description}
                        </div>
                      </div>
                      <span className="text-xs text-gray-400 shrink-0">
                        {tool.category}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                  未找到相关工具
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
} 