import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout";
import { getToolsByCategory } from "@/lib/tools";

export default function MarketResearchTools() {
  const tools = getToolsByCategory("market-research");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="市场调研工具"
        description="海外市场分析和竞品调研工具"
        icon="🔍"
        tools={tools}
      />
    </Suspense>
  );
}
