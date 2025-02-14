import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout"
import { getToolsByCategory } from "@/lib/tools"

const tools = getToolsByCategory('business-tools')

export default function BusinessTools() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="外贸商务工具"
        description="提升外贸业务效率的必备工具集"
        icon="📊"
        tools={tools}
      />
    </Suspense>
  )
} 