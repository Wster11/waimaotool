import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout";
import { getToolsByCategory } from "@/lib/tools";

export default function LearningTools() {
  const tools = getToolsByCategory("learning");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="外贸学习资源"
        description="精选外贸学习平台，助你持续进步"
        icon="📚"
        tools={tools}
      />
    </Suspense>
  );
}
