export interface RecentTool {
  toolId: string
  lastUsed: Date
  useCount: number
}

export interface FavoriteTool {
  toolId: string
  addedAt: Date
}

export interface ToolStats {
  totalUseTime: number
  useCount: number
  lastUsed: Date
  categories: {
    [category: string]: number
  }
}

export interface UserLayout {
  sections: {
    id: string
    type: 'recent' | 'favorites' | 'recommended' | 'category'
    visible: boolean
    order: number
  }[]
} 