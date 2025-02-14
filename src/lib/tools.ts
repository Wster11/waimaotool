export interface Tool {
  id: string      // 添加唯一标识
  name: string
  description: string
  url: string     // 外部链接
  href: string    // 内部路由
  icon: string
  category: string
  bgColor: string
}

// 按分类组织所有工具
export const allTools: Tool[] = [
  // 文案工具
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'AI写作助手，快速生成外贸产品描述和营销文案',
    url: 'https://chat.openai.com',
    href: '/tools/copywriting',
    icon: '🤖',
    category: 'copywriting',
    bgColor: 'bg-teal-50 dark:bg-teal-950'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: '免费AI助手，支持中英文写作和翻译优化',
    url: 'https://chat.deepseek.com',
    href: '/tools/copywriting',
    icon: '🧠',
    category: 'copywriting',
    bgColor: 'bg-violet-50 dark:bg-violet-950'
  },
  {
    id: 'copyai',
    name: 'Copy.ai',
    description: 'AI驱动的营销文案生成工具',
    url: 'https://www.copy.ai',
    href: '/tools/copywriting',
    icon: '✍️',
    category: 'copywriting',
    bgColor: 'bg-pink-50 dark:bg-pink-950'
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: '专业的AI写作和内容创作平台',
    url: 'https://www.jasper.ai',
    href: '/tools/copywriting',
    icon: '📝',
    category: 'copywriting',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  },
  {
    id: 'hemingway',
    name: 'Hemingway Editor',
    description: '英文写作优化工具，提高文案可读性',
    url: 'https://hemingwayapp.com',
    href: '/tools/copywriting',
    icon: '📖',
    category: 'copywriting',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    description: 'AI写作助手，提供多种表达建议',
    url: 'https://www.wordtune.com',
    href: '/tools/copywriting',
    icon: '✨',
    category: 'copywriting',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: '英文改写和润色工具，优化表达',
    url: 'https://quillbot.com',
    href: '/tools/copywriting',
    icon: '🪄',
    category: 'copywriting',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    id: 'headline-analyzer',
    name: 'CoSchedule',
    description: '标题分析工具，优化产品标题吸引力',
    url: 'https://coschedule.com/headline-analyzer',
    href: '/tools/copywriting',
    icon: '🎯',
    category: 'copywriting',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'AI营销文案生成器，专注电商场景',
    url: 'https://writesonic.com',
    href: '/tools/copywriting',
    icon: '💫',
    category: 'copywriting',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: '多语言AI写作工具，支持40+种写作场景',
    url: 'https://rytr.me',
    href: '/tools/copywriting',
    icon: '🎨',
    category: 'copywriting',
    bgColor: 'bg-red-50 dark:bg-red-950'
  },
  // 图片工具
  {
    id: 'tinypng',
    name: 'TinyPNG',
    description: '智能压缩PNG和JPEG图片，优化网站加载速度',
    url: 'https://tinypng.com',
    href: '/tools/image-media',
    icon: '🗜️',
    category: 'image-media',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  },
  {
    id: 'canva',
    name: 'Canva',
    description: '在线图片编辑和优化工具',
    url: 'https://www.canva.com',
    href: '/tools/image-media',
    icon: '🖼️',
    category: 'image-media',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    id: 'remove-bg',
    name: 'Remove.bg',
    description: '智能图片背景消除工具',
    url: 'https://www.remove.bg',
    href: '/tools/image-media',
    icon: '✂️',
    category: 'image-media',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    id: 'photopea',
    name: 'Photopea',
    description: '免费在线图片编辑器，类似Photoshop',
    url: 'https://www.photopea.com',
    href: '/tools/image-media',
    icon: '🎨',
    category: 'image-media',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    id: 'clipchamp',
    name: 'Clipchamp',
    description: '在线视频编辑工具，制作产品展示视频',
    url: 'https://clipchamp.com',
    href: '/tools/image-media',
    icon: '🎬',
    category: 'image-media',
    bgColor: 'bg-red-50 dark:bg-red-950'
  },
  {
    id: 'pixlr',
    name: 'Pixlr',
    description: '专业的在线图片编辑器，支持图层和滤镜',
    url: 'https://pixlr.com',
    href: '/tools/image-media',
    icon: '✨',
    category: 'image-media',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    id: 'fotor',
    name: 'Fotor',
    description: '在线图片编辑和设计工具，支持批量处理',
    url: 'https://www.fotor.com',
    href: '/tools/image-media',
    icon: '🎭',
    category: 'image-media',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  },
  {
    id: 'picresize',
    name: 'PicResize',
    description: '在线图片裁剪和调整尺寸工具',
    url: 'https://picresize.com',
    href: '/tools/image-media',
    icon: '📏',
    category: 'image-media',
    bgColor: 'bg-teal-50 dark:bg-teal-950'
  },
  {
    id: 'kapwing',
    name: 'Kapwing',
    description: '在线视频编辑器，支持字幕和特效',
    url: 'https://www.kapwing.com',
    href: '/tools/image-media',
    icon: '🎥',
    category: 'image-media',
    bgColor: 'bg-pink-50 dark:bg-pink-950'
  },
  {
    id: 'squoosh',
    name: 'Squoosh',
    description: 'Google开发的图片压缩工具，支持多种格式',
    url: 'https://squoosh.app',
    href: '/tools/image-media',
    icon: '🔄',
    category: 'image-media',
    bgColor: 'bg-violet-50 dark:bg-violet-950'
  },
  {
    id: 'watermark',
    name: 'Watermark.ws',
    description: '专业的在线水印工具，支持批量处理和自定义模板',
    url: 'https://watermark.ws',
    href: '/tools/image-media',
    icon: '💧',
    category: 'image-media',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    id: 'visualwatermark',
    name: 'Visual Watermark',
    description: '智能水印添加工具，支持批量处理和防删除水印',
    url: 'https://www.visualwatermark.com',
    href: '/tools/image-media',
    icon: '🎨',
    category: 'image-media',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    id: 'mass-watermark',
    name: 'Mass Watermark',
    description: '批量水印工具，支持图片和视频，提供多种水印效果',
    url: 'https://mass-watermark.com',
    href: '/tools/image-media',
    icon: '📸',
    category: 'image-media',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    id: 'iwater',
    name: 'iWatermark',
    description: '跨平台水印工具，支持多种水印类型和批量处理',
    url: 'https://pludisoft.com/iwatermark',
    href: '/tools/image-media',
    icon: '💦',
    category: 'image-media',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950'
  },
  {
    id: 'watermarkly',
    name: 'Watermarkly',
    description: '简单易用的在线水印工具，支持拖拽和实时预览',
    url: 'https://watermarkly.com',
    href: '/tools/image-media',
    icon: '🖼️',
    category: 'image-media',
    bgColor: 'bg-teal-50 dark:bg-teal-950'
  },
  // 翻译工具
  {
    id: 'immersive-translate',
    name: '沉浸式翻译',
    description: '双语对照网页翻译工具，支持40多种语言',
    url: 'https://immersivetranslate.com',
    href: '/tools/translation',
    icon: '🔤',
    category: 'translation',
    bgColor: 'bg-violet-50 dark:bg-violet-950'
  },
  {
    id: 'deepl',
    name: 'DeepL',
    description: '专业的多语言翻译工具',
    url: 'https://www.deepl.com',
    href: '/tools/translation',
    icon: '🌐',
    category: 'translation',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    id: 'google-translate',
    name: 'Google翻译',
    description: '支持多语言在线翻译',
    url: 'https://translate.google.com',
    href: '/tools/translation',
    icon: '🔄',
    category: 'translation',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: '英语写作语法检查工具',
    url: 'https://www.grammarly.com',
    href: '/tools/translation',
    icon: '✔️',
    category: 'translation',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950'
  },
  {
    id: 'linguee',
    name: 'Linguee',
    description: '提供双语对照例句的翻译工具',
    url: 'https://www.linguee.com',
    href: '/tools/translation',
    icon: '📚',
    category: 'translation',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  },
  {
    id: 'reverso',
    name: 'Reverso',
    description: '上下文翻译工具，提供地道表达',
    url: 'https://context.reverso.net',
    href: '/tools/translation',
    icon: '🔄',
    category: 'translation',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  },
  {
    id: 'wordfast',
    name: 'Wordfast',
    description: '专业翻译记忆工具，提高翻译效率',
    url: 'https://www.wordfast.com',
    href: '/tools/translation',
    icon: '⚡',
    category: 'translation',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    id: 'languagetool',
    name: 'LanguageTool',
    description: '多语言语法检查和纠错工具',
    url: 'https://languagetool.org',
    href: '/tools/translation',
    icon: '✍️',
    category: 'translation',
    bgColor: 'bg-pink-50 dark:bg-pink-950'
  },
  {
    id: 'matecat',
    name: 'MateCat',
    description: '开源的在线CAT翻译工具',
    url: 'https://www.matecat.com',
    href: '/tools/translation',
    icon: '🐱',
    category: 'translation',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    id: 'youdao-biz',
    name: '有道商务翻译',
    description: '针对商务场景优化的翻译工具',
    url: 'https://fanyi.youdao.com/business',
    href: '/tools/translation',
    icon: '💼',
    category: 'translation',
    bgColor: 'bg-red-50 dark:bg-red-950'
  },
  // 市场调研
  {
    id: 'similarweb',
    name: 'SimilarWeb',
    description: '海外市场数据分析工具',
    url: 'https://www.similarweb.com',
    href: '/tools/market-research',
    icon: '📊',
    category: 'market-research',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    id: 'google-trends',
    name: 'Google Trends',
    description: '全球搜索趋势分析',
    url: 'https://trends.google.com',
    href: '/tools/market-research',
    icon: '📈',
    category: 'market-research',
    bgColor: 'bg-red-50 dark:bg-red-950'
  },
  {
    id: 'jungle-scout',
    name: 'Jungle Scout',
    description: '亚马逊市场研究和产品发现工具',
    url: 'https://www.junglescout.com',
    href: '/tools/market-research',
    icon: '🌴',
    category: 'market-research',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    id: 'helium10',
    name: 'Helium 10',
    description: '亚马逊卖家综合分析工具',
    url: 'https://www.helium10.com',
    href: '/tools/market-research',
    icon: '🎈',
    category: 'market-research',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    id: 'semrush',
    name: 'SEMrush',
    description: '全球市场营销数据分析平台',
    url: 'https://www.semrush.com',
    href: '/tools/market-research',
    icon: '🔍',
    category: 'market-research',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  },
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    description: 'SEO和竞争对手分析工具',
    url: 'https://ahrefs.com',
    href: '/tools/market-research',
    icon: '🎯',
    category: 'market-research',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    id: 'trade-map',
    name: 'Trade Map',
    description: '国际贸易数据分析，掌握进出口趋势',
    url: 'https://www.trademap.org',
    href: '/tools/market-research',
    icon: '🌐',
    category: 'market-research',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950'
  },
  {
    id: 'statista',
    name: 'Statista',
    description: '全球市场数据和行业报告平台',
    url: 'https://www.statista.com',
    href: '/tools/market-research',
    icon: '📑',
    category: 'market-research',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950'
  },
  {
    id: 'terapeak',
    name: 'Terapeak',
    description: 'eBay市场数据分析工具',
    url: 'https://www.terapeak.com',
    href: '/tools/market-research',
    icon: '📊',
    category: 'market-research',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  },
  {
    id: 'commerce-inspector',
    name: 'Commerce Inspector',
    description: '跨境电商竞品分析工具',
    url: 'https://www.commerceinspector.com',
    href: '/tools/market-research',
    icon: '🔎',
    category: 'market-research',
    bgColor: 'bg-pink-50 dark:bg-pink-950'
  }
]

// 优化搜索功能
export function searchTools(query: string): Tool[] {
  if (!query) return []
  
  const lowercaseQuery = query.toLowerCase()
  return allTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.category.toLowerCase().includes(lowercaseQuery)
  ).sort((a, b) => {
    // 名称匹配的优先级最高
    const aNameMatch = a.name.toLowerCase().includes(lowercaseQuery)
    const bNameMatch = b.name.toLowerCase().includes(lowercaseQuery)
    if (aNameMatch && !bNameMatch) return -1
    if (!aNameMatch && bNameMatch) return 1
    return 0
  })
}

// 按分类获取工具
export function getToolsByCategory(category: string): Tool[] {
  return allTools.filter(tool => tool.category === category)
} 