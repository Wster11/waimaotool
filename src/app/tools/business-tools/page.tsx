import { ToolsLayout } from "@/components/tools-layout"

const tools = [
  {
    name: 'PandaDoc',
    description: '专业的电子合同签署平台，支持多语言模板',
    url: 'https://www.pandadoc.com',
    icon: '📄',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    name: 'DocuSign',
    description: '全球电子签名解决方案，安全合规',
    url: 'https://www.docusign.com',
    icon: '✍️',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'QuoteWerks',
    description: '专业报价单生成工具，支持自动计算',
    url: 'https://www.quotewerks.com',
    icon: '💰',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    name: 'Wise Business',
    description: '跨境支付和汇率转换，费率低廉',
    url: 'https://wise.com/business',
    icon: '💱',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950'
  },
  {
    name: 'Invoice Generator',
    description: '专业发票生成工具，支持多币种',
    url: 'https://invoice-generator.com',
    icon: '📋',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  }
]

export default function BusinessTools() {
  return (
    <ToolsLayout
      title="外贸商务工具"
      description="提升外贸业务效率的必备工具集"
      icon="📊"
      tools={tools}
    />
  )
} 