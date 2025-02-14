import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout";
import { getToolsByCategory } from "@/lib/tools";

export default function DataTools() {
  const tools = getToolsByCategory("data");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="外贸数据分析"
        description="专业的外贸数据分析工具，助你做出明智决策"
        icon="📊"
        tools={tools}
      />
    </Suspense>
  );
}
