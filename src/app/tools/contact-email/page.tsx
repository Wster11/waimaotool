import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout"
import { getToolsByCategory } from "@/lib/tools"

export default function ContactEmailTools() {
  const tools = getToolsByCategory('contact-email')
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="外贸邮件营销"
        description="专业的外贸邮件营销工具，提高邮件回复率"
        icon="📧"
        tools={tools}
      />
    </Suspense>
  )
} 