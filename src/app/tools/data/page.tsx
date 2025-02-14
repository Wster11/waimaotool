import { ToolsLayout } from "@/components/tools-layout"

const tools = [
  {
    name: 'Google Analytics',
    description: '分析独立站流量和用户行为数据',
    url: 'https://analytics.google.com',
    icon: '📊',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'Similar Web',
    description: '分析竞争对手网站流量和关键词数据',
    url: 'https://www.similarweb.com',
    icon: '📈',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  },
  {
    name: 'Ahrefs',
    description: '外贸SEO工具，优化网站排名',
    url: 'https://ahrefs.com',
    icon: '🔍',
    bgColor: 'bg-green-50 dark:bg-green-950'
  }
]

export default function DataTools() {
  return (
    <ToolsLayout
      title="外贸数据分析"
      description="专业的外贸数据分析工具，助你做出明智决策"
      icon="📊"
      tools={tools}
    />
  )
} 