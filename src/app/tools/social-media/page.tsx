import { ToolsLayout } from "@/components/tools-layout"

const tools = [
  {
    name: 'Facebook',
    description: '全球最大社交平台，精准广告投放和社群运营',
    url: 'https://business.facebook.com',
    icon: '👥',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'Instagram',
    description: '图片社交平台，适合产品展示和品牌营销',
    url: 'https://business.instagram.com',
    icon: '📸',
    bgColor: 'bg-pink-50 dark:bg-pink-950'
  },
  {
    name: 'LinkedIn',
    description: '商务社交平台，B2B营销和客户开发必备',
    url: 'https://www.linkedin.com',
    icon: '💼',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    name: 'Twitter',
    description: '全球资讯平台，品牌推广和客户沟通',
    url: 'https://business.twitter.com',
    icon: '🐦',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950'
  },
  {
    name: 'YouTube',
    description: '视频平台，产品展示和品牌内容营销',
    url: 'https://www.youtube.com',
    icon: '🎥',
    bgColor: 'bg-red-50 dark:bg-red-950'
  },
  {
    name: 'Pinterest',
    description: '图片分享平台，适合产品灵感和设计推广',
    url: 'https://business.pinterest.com',
    icon: '📌',
    bgColor: 'bg-rose-50 dark:bg-rose-950'
  },
  {
    name: 'TikTok',
    description: '短视频平台，年轻用户群体和潮流营销',
    url: 'https://www.tiktok.com/business',
    icon: '🎵',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    name: 'WhatsApp Business',
    description: '全球即时通讯工具，客户沟通和服务',
    url: 'https://business.whatsapp.com',
    icon: '💬',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    name: 'Telegram',
    description: '加密通讯工具，建立私密社群和客户服务',
    url: 'https://telegram.org',
    icon: '✈️',
    bgColor: 'bg-sky-50 dark:bg-sky-950'
  },
  {
    name: 'Buffer',
    description: '社媒管理工具，统一管理多平台内容发布',
    url: 'https://buffer.com',
    icon: '🔄',
    bgColor: 'bg-teal-50 dark:bg-teal-950'
  },
  {
    name: 'Hootsuite',
    description: '社媒营销平台，内容规划和数据分析',
    url: 'https://hootsuite.com',
    icon: '📊',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950'
  },
  {
    name: 'Canva Social',
    description: '社媒设计工具，制作专业的社媒图片和视频',
    url: 'https://www.canva.com/social-media',
    icon: '🎨',
    bgColor: 'bg-violet-50 dark:bg-violet-950'
  }
]

export default function SocialMediaTools() {
  return (
    <ToolsLayout
      title="跨境社媒营销"
      description="全球主流社交媒体平台和运营工具，助力品牌出海"
      icon="📱"
      tools={tools}
    />
  )
} 