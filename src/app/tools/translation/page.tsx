import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout";
import { getToolsByCategory } from "@/lib/tools";
export default function TranslationTools() {
  const tools = getToolsByCategory("translation");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="翻译工具"
        description="多语言翻译和文案优化工具"
        icon="🌐"
        tools={tools}
      />
    </Suspense>
  );
}
