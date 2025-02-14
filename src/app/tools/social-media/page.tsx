import { Suspense } from "react";
import { ToolsLayout } from "@/components/tools-layout";
import { getToolsByCategory } from "@/lib/tools";

export default function SocialMediaTools() {
  const tools = getToolsByCategory("social-media")
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToolsLayout
        title="跨境社媒营销"
        description="全球主流社交媒体平台和运营工具，助力品牌出海"
        icon="📱"
        tools={tools}
      />
    </Suspense>
  );
} 