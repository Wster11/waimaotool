import { ToolsLayout } from "@/components/tools-layout"

const tools = [
  {
    name: 'Coursera',
    description: '国际贸易和商务课程，提升专业技能',
    url: 'https://www.coursera.org/business',
    icon: '🎓',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'Udemy Business',
    description: '外贸技能在线课程，实用性强',
    url: 'https://www.udemy.com/business',
    icon: '📚',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    name: 'LinkedIn Learning',
    description: '商务技能学习平台，名师授课',
    url: 'https://www.linkedin.com/learning',
    icon: '💡',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950'
  },
  {
    name: 'Canton Fair',
    description: '广交会官网，获取展会信息',
    url: 'https://www.cantonfair.org.cn',
    icon: '🏢',
    bgColor: 'bg-red-50 dark:bg-red-950'
  },
  {
    name: 'Global Sources',
    description: '环球资源展会信息和行业资讯',
    url: 'https://www.globalsources.com',
    icon: '🌐',
    bgColor: 'bg-green-50 dark:bg-green-950'
  }
]

export default function LearningTools() {
  return (
    <ToolsLayout
      title="外贸学习资源"
      description="精选外贸学习平台，助你持续进步"
      icon="📚"
      tools={tools}
    />
  )
} 