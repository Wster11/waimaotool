import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout";
import { getToolsByCategory } from "@/lib/tools";

export default function EcommerceTools() {
  const tools = getToolsByCategory("ecommerce");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="跨境电商工具"
        description="一站式跨境电商解决方案，助力外贸业务增长"
        icon="🛍️"
        tools={tools}
      />
    </Suspense>
  );
}
