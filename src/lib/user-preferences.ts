import { RecentTool, FavoriteTool, ToolStats, UserLayout } from '@/types'
import { allTools } from './tools'

// 获取最近使用的工具
export function getRecentTools(): RecentTool[] {
  if (typeof window === 'undefined') return []
  
  const recentTools = JSON.parse(localStorage.getItem('recentTools') || '[]')
  return recentTools.sort((a: RecentTool, b: RecentTool) => 
    new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime()
  ).slice(0, 8) // 只返回最近8个
}

// 记录工具使用
export function trackToolUsage(toolId: string) {
  if (typeof window === 'undefined') return
  
  const recentTools: RecentTool[] = JSON.parse(localStorage.getItem('recentTools') || '[]')
  const now = new Date()
  
  const existingTool = recentTools.find(tool => tool.toolId === toolId)
  if (existingTool) {
    existingTool.lastUsed = now
    existingTool.useCount++
  } else {
    recentTools.push({
      toolId,
      lastUsed: now,
      useCount: 1
    })
  }
  
  localStorage.setItem('recentTools', JSON.stringify(recentTools))
}

// 获取收藏的工具
export function getFavoriteTools(): FavoriteTool[] {
  if (typeof window === 'undefined') return []
  
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

// 切换收藏状态
export function toggleFavorite(toolId: string) {
  if (typeof window === 'undefined') return
  
  const favorites: FavoriteTool[] = JSON.parse(localStorage.getItem('favorites') || '[]')
  const index = favorites.findIndex(f => f.toolId === toolId)
  
  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push({
      toolId,
      addedAt: new Date()
    })
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

// 获取推荐工具
export function getRecommendedTools() {
  const recentTools = getRecentTools()
  const favorites = new Set(getFavoriteTools().map(f => f.toolId))
  
  // 基于最近使用的工具类别推荐相似工具
  const recentCategories = new Set(
    recentTools
      .map(rt => allTools.find(t => t.id === rt.toolId)?.category)
      .filter(Boolean)
  )
  
  return allTools.filter(tool => {
    const isRelatedCategory = recentCategories.has(tool.category)
    const isNew = !favorites.has(tool.id) && 
      !recentTools.some(rt => rt.toolId === tool.id)
    
    return isRelatedCategory && isNew
  }).slice(0, 4) // 只返回4个推荐
}

// 获取用户布局设置
export function getUserLayout(): UserLayout {
  if (typeof window === 'undefined') {
    return getDefaultLayout()
  }
  
  return JSON.parse(
    localStorage.getItem('userLayout') || 
    JSON.stringify(getDefaultLayout())
  )
}

// 默认布局
function getDefaultLayout(): UserLayout {
  return {
    sections: [
      { id: 'recent', type: 'recent', visible: true, order: 1 },
      { id: 'favorites', type: 'favorites', visible: true, order: 2 },
      { id: 'recommended', type: 'recommended', visible: true, order: 3 }
    ]
  }
}

// 更新布局设置
export function updateLayout(newLayout: UserLayout) {
  if (typeof window === 'undefined') return
  localStorage.setItem('userLayout', JSON.stringify(newLayout))
}

// 获取工具使用统计
export function getToolStats(): ToolStats {
  if (typeof window === 'undefined') return {
    totalUseTime: 0,
    useCount: 0,
    lastUsed: new Date(),
    categories: {}
  }
  
  return JSON.parse(localStorage.getItem('toolStats') || '{}')
} 