import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout";
import { getToolsByCategory } from "@/lib/tools";

export default function CRMTools() {
  const tools = getToolsByCategory("crm");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="客户管理工具"
        description="专业的外贸客户管理工具，提高成单率"
        icon="👥"
        tools={tools}
      />
    </Suspense>
  );
}
