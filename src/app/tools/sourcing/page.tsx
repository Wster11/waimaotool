import { ToolsLayout } from "@/components/tools-layout"

const tools = [
  {
    name: '阿里巴巴国际站',
    description: '全球领先的B2B平台，百万供应商资源',
    url: 'https://www.alibaba.com',
    icon: '🌐',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  },
  {
    name: '1688',
    description: '国内大型采购批发平台，直连工厂货源',
    url: 'https://www.1688.com',
    icon: '🏭',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'Made-in-China',
    description: '专业外贸B2B平台，优质中国制造商',
    url: 'https://www.made-in-china.com',
    icon: '🇨🇳',
    bgColor: 'bg-red-50 dark:bg-red-950'
  },
  {
    name: 'GlobalSources',
    description: '环球资源网，专业验证供应商平台',
    url: 'https://www.globalsources.com',
    icon: '🌍',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    name: 'DHgate',
    description: '敦煌网，小额批发和采购平台',
    url: 'https://www.dhgate.com',
    icon: '🛒',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    name: 'HKTDC',
    description: '香港贸发局，连接香港及大中华供应商',
    url: 'https://sourcing.hktdc.com',
    icon: '🔍',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950'
  },
  {
    name: 'TradeWheel',
    description: '全球B2B交易平台，多国供应商资源',
    url: 'https://www.tradewheel.com',
    icon: '🔄',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950'
  },
  {
    name: 'YiWuGo',
    description: '义乌小商品市场在线平台，小额批发',
    url: 'https://www.yiwugo.com',
    icon: '🏪',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  },
  {
    name: 'ChemNet',
    description: '全球化工网，专业化工原料采购平台',
    url: 'https://www.chemnet.com',
    icon: '⚗️',
    bgColor: 'bg-teal-50 dark:bg-teal-950'
  },
  {
    name: 'GongChang',
    description: '工场网，工业品采购和制造商对接平台',
    url: 'https://www.gongchang.com',
    icon: '⚙️',
    bgColor: 'bg-rose-50 dark:bg-rose-950'
  }
]

export default function SourcingTools() {
  return (
    <ToolsLayout
      title="货源雷达"
      description="精选全球采购平台，助你寻找优质供应商"
      icon="🎯"
      tools={tools}
    />
  )
} 