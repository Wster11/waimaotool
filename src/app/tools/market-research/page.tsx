import { ToolsLayout } from "@/components/tools-layout"
import { getToolsByCategory } from "@/lib/tools"

const tools = [
  {
    name: 'Google Trends',
    description: '分析全球市场搜索趋势，发现产品机会',
    url: 'https://trends.google.com',
    icon: '📈',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'SimilarWeb',
    description: '竞品网站分析，了解流量来源和用户行为',
    url: 'https://www.similarweb.com',
    icon: '🔍',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    name: 'Statista',
    description: '全球市场数据和行业报告，支持决策制定',
    url: 'https://www.statista.com',
    icon: '📊',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    name: 'Trade Map',
    description: '国际贸易数据分析，掌握进出口趋势',
    url: 'https://www.trademap.org',
    icon: '🌐',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    name: 'Alibaba Insights',
    description: '阿里巴巴平台数据，了解采购商需求',
    url: 'https://www.alibabagroup.com/en/ir/research',
    icon: '📱',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  }
]

export default function MarketResearchTools() {
  const tools = getToolsByCategory('market-research')
  
  return (
    <ToolsLayout
      title="市场调研工具"
      description="海外市场分析和竞品调研工具"
      icon="🔍"
      tools={tools}
    />
  )
} 