import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout"
import { getToolsByCategory } from "@/lib/tools"
import { Metadata } from 'next'

export default function CopywritingTools() {
  const tools = getToolsByCategory('copywriting')
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="外贸文案工具"
        description="AI驱动的文案创作工具，提升产品描述质量"
        icon="✍️"
        tools={tools}
      />
    </Suspense>
  )
}

export const metadata: Metadata = {
  title: '外贸文案工具 - AI驱动的文案创作与优化工具集',
  description: '精选10+款外贸文案工具，包括ChatGPT、Copy.ai等AI写作助手，帮助您快速生成高质量的外贸产品描述和营销文案。',
  keywords: ['外贸文案', 'AI写作', '产品描述', '营销文案', '文案优化'],
  openGraph: {
    title: '外贸文案工具 - AI驱动的文案创作与优化工具集',
    description: '精选10+款外贸文案工具，包括ChatGPT、Copy.ai等AI写作助手。',
  }
} 