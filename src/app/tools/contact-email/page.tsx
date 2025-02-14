import { ToolsLayout } from "@/components/tools-layout"

const tools = [
  {
    name: 'Mailchimp',
    description: '外贸邮件营销平台，支持邮件自动化和数据分析',
    url: 'https://mailchimp.com',
    icon: '📧',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  },
  {
    name: 'Hunter.io',
    description: '快速查找目标客户的企业邮箱地址',
    url: 'https://hunter.io',
    icon: '🎯',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    name: 'Streak CRM',
    description: 'Gmail插件，跟踪邮件打开率和客户管理',
    url: 'https://www.streak.com',
    icon: '📈',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    name: 'Snov.io',
    description: '邮箱验证和邮件群发工具，提高邮件送达率',
    url: 'https://snov.io',
    icon: '✉️',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'Boomerang',
    description: '邮件定时发送和追踪，自动跟进重要客户',
    url: 'https://www.boomeranggmail.com',
    icon: '🔄',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    name: 'Reply.io',
    description: '外贸邮件营销自动化平台，支持多渠道跟进',
    url: 'https://reply.io',
    icon: '💬',
    bgColor: 'bg-rose-50 dark:bg-rose-950'
  },
  {
    name: 'Lemlist',
    description: '个性化冷邮件营销工具，提高邮件回复率',
    url: 'https://lemlist.com',
    icon: '🎯',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950'
  },
  {
    name: 'Unlayer',
    description: '专业的外贸邮件模板编辑器，快速制作精美邮件',
    url: 'https://unlayer.com',
    icon: '✨',
    bgColor: 'bg-amber-50 dark:bg-amber-950'
  }
]

export default function ContactEmailTools() {
  return (
    <ToolsLayout
      title="外贸邮件营销"
      description="专业的外贸邮件营销工具，提高邮件回复率"
      icon="📧"
      tools={tools}
    />
  )
} 