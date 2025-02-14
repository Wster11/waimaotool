import { ToolsLayout } from "@/components/tools-layout";
import { getToolsByCategory } from "@/lib/tools";
import { Suspense } from "react";

export default function SourcingTools() {
  const tools = getToolsByCategory("sourcing");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="货源雷达"
        description="精选全球采购平台，助你寻找优质供应商"
        icon="🎯"
        tools={tools}
      />
    </Suspense>
  );
}
