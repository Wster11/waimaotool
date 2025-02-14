import { ToolsLayout } from "@/components/tools-layout"
import { getToolsByCategory } from "@/lib/tools"

const tools = [
  {
    name: 'ChatGPT',
    description: 'AI写作助手，快速生成外贸产品描述和营销文案',
    url: 'https://chat.openai.com',
    icon: '🤖',
    bgColor: 'bg-teal-50 dark:bg-teal-950'
  },
  {
    name: 'DeepSeek',
    description: '免费AI助手，支持中英文写作和翻译优化',
    url: 'https://chat.deepseek.com',
    icon: '🧠',
    bgColor: 'bg-violet-50 dark:bg-violet-950'
  },
  {
    name: 'Copy.ai',
    description: '专业营销文案生成工具，多语言支持',
    url: 'https://www.copy.ai',
    icon: '✍️',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'Jasper',
    description: 'AI内容创作平台，生成引人入胜的产品文案',
    url: 'https://www.jasper.ai',
    icon: '📝',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  },
  {
    name: 'Hemingway Editor',
    description: '英文写作优化工具，提高文案可读性',
    url: 'https://hemingwayapp.com',
    icon: '📖',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  },
  {
    name: 'CoSchedule Analyzer',
    description: '标题分析工具，优化产品标题吸引力',
    url: 'https://coschedule.com/headline-analyzer',
    icon: '🎯',
    bgColor: 'bg-pink-50 dark:bg-pink-950'
  }
]

export default function CopywritingTools() {
  const tools = getToolsByCategory('copywriting')
  
  return (
    <ToolsLayout
      title="外贸文案工具"
      description="AI驱动的文案创作工具，提升产品描述质量"
      icon="✍️"
      tools={tools}
    />
  )
} 