'use client'

import { Tool } from '@/lib/tools'
import { RecentTool, FavoriteTool, ToolStats } from '@/types'
import { Card } from './ui/card'
import Link from 'next/link'

interface SectionProps {
  tools: Tool[]
}

export function RecentToolsSection({ tools }: SectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">最近使用</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  )
}

export function FavoriteToolsSection({ tools }: SectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">我的收藏</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  )
}

export function RecommendedToolsSection({ tools }: SectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">推荐工具</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  )
}

export function CategorySection({ category }: { category: string }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{category}</h2>
      {/* 实现分类展示 */}
    </section>
  )
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link 
      href={tool.url} 
      target="_blank"
      className="block group"
    >
      <Card className="p-4 h-full hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-lg ${tool.bgColor} flex items-center justify-center`}>
            <span className="text-xl">{tool.icon}</span>
          </div>
          <h3 className="font-medium group-hover:text-blue-500 transition-colors">
            {tool.name}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {tool.description}
        </p>
      </Card>
    </Link>
  )
}

export function UsageStats({ stats }: { stats: ToolStats }) {
  return (
    <section className="mt-12 p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
      <h2 className="text-xl font-semibold mb-4">使用统计</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <div className="text-2xl font-bold text-blue-500">
            {stats.useCount}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            工具使用次数
          </div>
        </div>
        {/* 添加更多统计数据 */}
      </div>
    </section>
  )
} 