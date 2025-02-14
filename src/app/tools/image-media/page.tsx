import { ToolsLayout } from "@/components/tools-layout"
import { getToolsByCategory } from "@/lib/tools"


export default function ImageMediaTools() {
  const tools = getToolsByCategory('image-media')
  
  return (
    <ToolsLayout
      title="图片与媒体工具"
      description="产品图片处理和视频编辑工具"
      icon="🖼️"
      tools={tools}
    />
  )
} 