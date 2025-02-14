import { ToolsLayout } from "@/components/tools-layout"

const tools = [
  {
    name: 'Shopify',
    description: '快速搭建独立站，支持多语言和跨境支付',
    url: 'https://www.shopify.com',
    icon: '🛍️',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    name: 'PayPal',
    description: '全球跨境支付解决方案，保护交易安全',
    url: 'https://www.paypal.com',
    icon: '💳',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'Stripe',
    description: '支持多币种的跨境支付平台，费率优惠',
    url: 'https://stripe.com',
    icon: '💰',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    name: 'Oberlo',
    description: 'Shopify选品工具，一键导入产品到商店',
    url: 'https://www.oberlo.com',
    icon: '🔍',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    name: 'Shippo',
    description: '跨境物流管理平台，比价和追踪订单',
    url: 'https://goshippo.com',
    icon: '📦',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  },
  {
    name: 'Klaviyo',
    description: '电商邮件营销平台，提高客户留存率',
    url: 'https://www.klaviyo.com',
    icon: '📮',
    bgColor: 'bg-rose-50 dark:bg-rose-950'
  },
  {
    name: 'Semrush',
    description: '跨境电商SEO和竞争对手分析工具',
    url: 'https://www.semrush.com',
    icon: '📊',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950'
  },
  {
    name: 'Helium 10',
    description: '亚马逊运营工具，选品和关键词优化',
    url: 'https://www.helium10.com',
    icon: '🎯',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950'
  },
  {
    name: 'Jungle Scout',
    description: '亚马逊市场研究和产品分析工具',
    url: 'https://www.junglescout.com',
    icon: '🔎',
    bgColor: 'bg-amber-50 dark:bg-amber-950'
  },
  {
    name: 'Sellics',
    description: '亚马逊广告和绩效管理平台',
    url: 'https://sellics.com',
    icon: '📈',
    bgColor: 'bg-lime-50 dark:bg-lime-950'
  },
  {
    name: 'Easyship',
    description: '全球物流解决方案，支持多渠道发货',
    url: 'https://www.easyship.com',
    icon: '✈️',
    bgColor: 'bg-teal-50 dark:bg-teal-950'
  },
  {
    name: 'Loox',
    description: '电商产品评论管理工具，提升转化率',
    url: 'https://loox.app',
    icon: '⭐',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  },
]

export default function EcommerceTools() {
  return (
    <ToolsLayout
      title="跨境电商工具"
      description="一站式跨境电商解决方案，助力外贸业务增长"
      icon="🛍️"
      tools={tools}
    />
  )
} 