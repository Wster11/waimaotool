import { ToolsLayout } from "@/components/tools-layout"

const tools = [
  {
    name: 'HubSpot CRM',
    description: '免费的客户管理系统，适合外贸团队使用',
    url: 'https://www.hubspot.com/products/crm',
    icon: '👥',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  },
  {
    name: 'Zoho CRM',
    description: '性价比高的CRM系统，支持多语言',
    url: 'https://www.zoho.com/crm',
    icon: '📊',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'Pipedrive',
    description: '直观的销售管理工具，适合跟进外贸订单',
    url: 'https://www.pipedrive.com',
    icon: '📈',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    name: 'Salesforce',
    description: '企业级CRM解决方案，功能强大',
    url: 'https://www.salesforce.com',
    icon: '💼',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    name: 'Freshsales',
    description: '现代化的CRM工具，内置AI功能',
    url: 'https://www.freshworks.com/freshsales-crm',
    icon: '🎯',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  }
]

export default function CRMTools() {
  return (
    <ToolsLayout
      title="客户管理工具"
      description="专业的外贸客户管理工具，提高成单率"
      icon="👥"
      tools={tools}
    />
  )
} 