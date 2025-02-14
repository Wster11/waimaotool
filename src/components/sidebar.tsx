'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  description: string
  href: string
  icon: string
}

interface SidebarProps {
  categories: Category[]
}

export function Sidebar({ categories }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const pathname = usePathname()

  return (
    <aside 
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } bg-gray-50/50 dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 hidden md:flex flex-col backdrop-blur-xl transition-all duration-300`}
    >
      <div className="flex flex-col h-full relative">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 p-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
          aria-label={isCollapsed ? "展开侧边栏" : "折叠侧边栏"}
        >
          <svg
            className={`w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
              isCollapsed ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className={`p-6 ${isCollapsed ? 'px-4' : ''} flex-shrink-0`}>
          <h2 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${
            isCollapsed ? 'hidden' : ''
          }`}>
            工具分类
          </h2>
          <p className={`text-sm text-gray-500 dark:text-gray-400 mt-1 ${
            isCollapsed ? 'hidden' : ''
          }`}>
            选择您需要使用的工具类别
          </p>
        </div>

        <nav className={`flex-1 overflow-y-auto ${isCollapsed ? 'px-2' : 'px-3'}`}>
          <div className="space-y-1 min-h-min pb-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors group relative",
                  pathname === category.href ? 
                    "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : 
                    "text-gray-600 dark:text-gray-400",
                  isCollapsed ? 'justify-center' : ''
                )}
                title={isCollapsed ? category.name : undefined}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700 transition-colors shrink-0">
                  <span className="text-lg">{category.icon}</span>
                </div>
                {!isCollapsed && (
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium truncate">
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {category.description}
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </nav>

        <div className={`p-6 border-t border-gray-200 dark:border-gray-800 flex-shrink-0 ${
          isCollapsed ? 'hidden' : ''
        }`}>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            外贸工具箱 © 2024
          </p>
        </div>
      </div>
    </aside>
  )
} 