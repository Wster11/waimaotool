import type { Config } from "tailwindcss";

// 按分类组织所有工具
export const allTools: Tool[] = [
  // 文案工具
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "AI写作助手，快速生成外贸产品描述和营销文案",
    url: "https://chat.openai.com",
    href: "/tools/copywriting",
    icon: "🤖",
    category: "copywriting",
    bgColor: "bg-teal-50 dark:bg-teal-950"
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "免费AI助手，支持中英文写作和翻译优化",
    url: "https://chat.deepseek.com",
    href: "/tools/copywriting",
    icon: "🧠",
    category: "copywriting",
    bgColor: "bg-violet-50 dark:bg-violet-950"
  },
  {
    id: "copyai",
    name: "Copy.ai",
    description: "AI驱动的营销文案生成工具",
    url: "https://www.copy.ai",
    href: "/tools/copywriting",
    icon: "✍️",
    category: "copywriting",
    bgColor: "bg-pink-50 dark:bg-pink-950"
  },
  {
    id: "jasper",
    name: "Jasper",
    description: "专业的AI写作和内容创作平台",
    url: "https://www.jasper.ai",
    href: "/tools/copywriting",
    icon: "📝",
    category: "copywriting",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  },
  {
    id: "hemingway",
    name: "Hemingway Editor",
    description: "英文写作优化工具，提高文案可读性",
    url: "https://hemingwayapp.com",
    href: "/tools/copywriting",
    icon: "📖",
    category: "copywriting",
    bgColor: "bg-yellow-50 dark:bg-yellow-950"
  },
  {
    id: "wordtune",
    name: "Wordtune",
    description: "AI写作助手，提供多种表达建议",
    url: "https://www.wordtune.com",
    href: "/tools/copywriting",
    icon: "✨",
    category: "copywriting",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "quillbot",
    name: "QuillBot",
    description: "英文改写和润色工具，优化表达",
    url: "https://quillbot.com",
    href: "/tools/copywriting",
    icon: "🪄",
    category: "copywriting",
    bgColor: "bg-indigo-50 dark:bg-indigo-950"
  },
  {
    id: "headline-analyzer",
    name: "CoSchedule",
    description: "标题分析工具，优化产品标题吸引力",
    url: "https://coschedule.com/headline-analyzer",
    href: "/tools/copywriting",
    icon: "🎯",
    category: "copywriting",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    id: "writesonic",
    name: "Writesonic",
    description: "AI营销文案生成器，专注电商场景",
    url: "https://writesonic.com",
    href: "/tools/copywriting",
    icon: "💫",
    category: "copywriting",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    id: "rytr",
    name: "Rytr",
    description: "多语言AI写作工具，支持40+种写作场景",
    url: "https://rytr.me",
    href: "/tools/copywriting",
    icon: "🎨",
    category: "copywriting",
    bgColor: "bg-red-50 dark:bg-red-950"
  },
  // 图片工具
  {
    id: "tinypng",
    name: "TinyPNG",
    description: "智能压缩PNG和JPEG图片，优化网站加载速度",
    url: "https://tinypng.com",
    href: "/tools/image-media",
    icon: "🗜️",
    category: "image-media",
    bgColor: "bg-yellow-50 dark:bg-yellow-950"
  },
  {
    id: "canva",
    name: "Canva",
    description: "在线图片编辑和优化工具",
    url: "https://www.canva.com",
    href: "/tools/image-media",
    icon: "🖼️",
    category: "image-media",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "remove-bg",
    name: "Remove.bg",
    description: "智能图片背景消除工具",
    url: "https://www.remove.bg",
    href: "/tools/image-media",
    icon: "✂️",
    category: "image-media",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    id: "photopea",
    name: "Photopea",
    description: "免费在线图片编辑器，类似Photoshop",
    url: "https://www.photopea.com",
    href: "/tools/image-media",
    icon: "🎨",
    category: "image-media",
    bgColor: "bg-indigo-50 dark:bg-indigo-950"
  },
  {
    id: "clipchamp",
    name: "Clipchamp",
    description: "在线视频编辑工具，制作产品展示视频",
    url: "https://clipchamp.com",
    href: "/tools/image-media",
    icon: "🎬",
    category: "image-media",
    bgColor: "bg-red-50 dark:bg-red-950"
  },
  {
    id: "pixlr",
    name: "Pixlr",
    description: "专业的在线图片编辑器，支持图层和滤镜",
    url: "https://pixlr.com",
    href: "/tools/image-media",
    icon: "✨",
    category: "image-media",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    id: "fotor",
    name: "Fotor",
    description: "在线图片编辑和设计工具，支持批量处理",
    url: "https://www.fotor.com",
    href: "/tools/image-media",
    icon: "🎭",
    category: "image-media",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  },
  {
    id: "picresize",
    name: "PicResize",
    description: "在线图片裁剪和调整尺寸工具",
    url: "https://picresize.com",
    href: "/tools/image-media",
    icon: "📏",
    category: "image-media",
    bgColor: "bg-teal-50 dark:bg-teal-950"
  },
  {
    id: "kapwing",
    name: "Kapwing",
    description: "在线视频编辑器，支持字幕和特效",
    url: "https://www.kapwing.com",
    href: "/tools/image-media",
    icon: "🎥",
    category: "image-media",
    bgColor: "bg-pink-50 dark:bg-pink-950"
  },
  {
    id: "squoosh",
    name: "Squoosh",
    description: "Google开发的图片压缩工具，支持多种格式",
    url: "https://squoosh.app",
    href: "/tools/image-media",
    icon: "🔄",
    category: "image-media",
    bgColor: "bg-violet-50 dark:bg-violet-950"
  },
  {
    id: "watermark",
    name: "Watermark.ws",
    description: "专业的在线水印工具，支持批量处理和自定义模板",
    url: "https://watermark.ws",
    href: "/tools/image-media",
    icon: "💧",
    category: "image-media",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "visualwatermark",
    name: "Visual Watermark",
    description: "智能水印添加工具，支持批量处理和防删除水印",
    url: "https://www.visualwatermark.com",
    href: "/tools/image-media",
    icon: "🎨",
    category: "image-media",
    bgColor: "bg-indigo-50 dark:bg-indigo-950"
  },
  {
    id: "mass-watermark",
    name: "Mass Watermark",
    description: "批量水印工具，支持图片和视频，提供多种水印效果",
    url: "https://mass-watermark.com",
    href: "/tools/image-media",
    icon: "📸",
    category: "image-media",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    id: "iwater",
    name: "iWatermark",
    description: "跨平台水印工具，支持多种水印类型和批量处理",
    url: "https://pludisoft.com/iwatermark",
    href: "/tools/image-media",
    icon: "💦",
    category: "image-media",
    bgColor: "bg-cyan-50 dark:bg-cyan-950"
  },
  {
    id: "watermarkly",
    name: "Watermarkly",
    description: "简单易用的在线水印工具，支持拖拽和实时预览",
    url: "https://watermarkly.com",
    href: "/tools/image-media",
    icon: "🖼️",
    category: "image-media",
    bgColor: "bg-teal-50 dark:bg-teal-950"
  },
  // 翻译工具
  {
    id: "immersive-translate",
    name: "沉浸式翻译",
    description: "双语对照网页翻译工具，支持40多种语言",
    url: "https://immersivetranslate.com",
    href: "/tools/translation",
    icon: "🔤",
    category: "translation",
    bgColor: "bg-violet-50 dark:bg-violet-950"
  },
  {
    id: "deepl",
    name: "DeepL",
    description: "专业的多语言翻译工具",
    url: "https://www.deepl.com",
    href: "/tools/translation",
    icon: "🌐",
    category: "translation",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    id: "google-translate",
    name: "Google翻译",
    description: "支持多语言在线翻译",
    url: "https://translate.google.com",
    href: "/tools/translation",
    icon: "🔄",
    category: "translation",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "英语写作语法检查工具",
    url: "https://www.grammarly.com",
    href: "/tools/translation",
    icon: "✔️",
    category: "translation",
    bgColor: "bg-emerald-50 dark:bg-emerald-950"
  },
  {
    id: "linguee",
    name: "Linguee",
    description: "提供双语对照例句的翻译工具",
    url: "https://www.linguee.com",
    href: "/tools/translation",
    icon: "📚",
    category: "translation",
    bgColor: "bg-yellow-50 dark:bg-yellow-950"
  },
  {
    id: "reverso",
    name: "Reverso",
    description: "上下文翻译工具，提供地道表达",
    url: "https://context.reverso.net",
    href: "/tools/translation",
    icon: "🔄",
    category: "translation",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  },
  {
    id: "wordfast",
    name: "Wordfast",
    description: "专业翻译记忆工具，提高翻译效率",
    url: "https://www.wordfast.com",
    href: "/tools/translation",
    icon: "⚡",
    category: "translation",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    id: "languagetool",
    name: "LanguageTool",
    description: "多语言语法检查和纠错工具",
    url: "https://languagetool.org",
    href: "/tools/translation",
    icon: "✍️",
    category: "translation",
    bgColor: "bg-pink-50 dark:bg-pink-950"
  },
  {
    id: "matecat",
    name: "MateCat",
    description: "开源的在线CAT翻译工具",
    url: "https://www.matecat.com",
    href: "/tools/translation",
    icon: "🐱",
    category: "translation",
    bgColor: "bg-indigo-50 dark:bg-indigo-950"
  },
  {
    id: "youdao-biz",
    name: "有道商务翻译",
    description: "针对商务场景优化的翻译工具",
    url: "https://fanyi.youdao.com/business",
    href: "/tools/translation",
    icon: "💼",
    category: "translation",
    bgColor: "bg-red-50 dark:bg-red-950"
  },
  // 市场调研
  {
    id: "similarweb",
    name: "SimilarWeb",
    description: "海外市场数据分析工具",
    url: "https://www.similarweb.com",
    href: "/tools/market-research",
    icon: "📊",
    category: "market-research",
    bgColor: "bg-purple-50 dark:bg-purple-950"
  },
  {
    id: "google-trends",
    name: "Google Trends",
    description: "全球搜索趋势分析",
    url: "https://trends.google.com",
    href: "/tools/market-research",
    icon: "📈",
    category: "market-research",
    bgColor: "bg-red-50 dark:bg-red-950"
  },
  {
    id: "jungle-scout",
    name: "Jungle Scout",
    description: "亚马逊市场研究和产品发现工具",
    url: "https://www.junglescout.com",
    href: "/tools/market-research",
    icon: "🌴",
    category: "market-research",
    bgColor: "bg-green-50 dark:bg-green-950"
  },
  {
    id: "helium10",
    name: "Helium 10",
    description: "亚马逊卖家综合分析工具",
    url: "https://www.helium10.com",
    href: "/tools/market-research",
    icon: "🎈",
    category: "market-research",
    bgColor: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "semrush",
    name: "SEMrush",
    description: "全球市场营销数据分析平台",
    url: "https://www.semrush.com",
    href: "/tools/market-research",
    icon: "🔍",
    category: "market-research",
    bgColor: "bg-orange-50 dark:bg-orange-950"
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    description: "SEO和竞争对手分析工具",
    url: "https://ahrefs.com",
    href: "/tools/market-research",
    icon: "🎯",
    category: "market-research",
    bgColor: "bg-indigo-50 dark:bg-indigo-950"
  },
  {
    id: "trade-map",
    name: "Trade Map",
    description: "国际贸易数据分析，掌握进出口趋势",
    url: "https://www.trademap.org",
    href: "/tools/market-research",
    icon: "🌐",
    category: "market-research",
    bgColor: "bg-cyan-50 dark:bg-cyan-950"
  },
  {
    id: "statista",
    name: "Statista",
    description: "全球市场数据和行业报告平台",
    url: "https://www.statista.com",
    href: "/tools/market-research",
    icon: "📑",
    category: "market-research",
    bgColor: "bg-emerald-50 dark:bg-emerald-950"
  },
  {
    id: "terapeak",
    name: "Terapeak",
    description: "eBay市场数据分析工具",
    url: "https://www.terapeak.com",
    href: "/tools/market-research",
    icon: "📊",
    category: "market-research",
    bgColor: "bg-yellow-50 dark:bg-yellow-950"
  },
  {
    id: "commerce-inspector",
    name: "Commerce Inspector",
    description: "跨境电商竞品分析工具",
    url: "https://www.commerceinspector.com",
    href: "/tools/market-research",
    icon: "🔎",
    category: "market-research",
    bgColor: "bg-pink-50 dark:bg-pink-950"
  },
  // 商务工具
  {
    name: "PandaDoc",
    description: "专业的电子合同签署平台，支持多语言模板",
    url: "https://www.pandadoc.com",
    icon: "📄",
    bgColor: "bg-green-50 dark:bg-green-950",
    id: "PandaDoc",
    href: "/tools/business-tools",
    category: "business-tools"
  },
  {
    name: "DocuSign",
    description: "全球电子签名解决方案，安全合规",
    url: "https://www.docusign.com",
    icon: "✍️",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    id: "DocuSign",
    href: "/tools/business-tools",
    category: "business-tools"
  },
  {
    name: "QuoteWerks",
    description: "专业报价单生成工具，支持自动计算",
    url: "https://www.quotewerks.com",
    icon: "💰",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    id: "QuoteWerks",
    href: "/tools/business-tools",
    category: "business-tools"
  },
  {
    name: "Wise Business",
    description: "跨境支付和汇率转换，费率低廉",
    url: "https://wise.com/business",
    icon: "💱",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
    id: "Wise Business",
    href: "/tools/business-tools",
    category: "business-tools"
  },
  {
    name: "Invoice Generator",
    description: "专业发票生成工具，支持多币种",
    url: "https://invoice-generator.com",
    icon: "📋",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
    id: "Invoice Generator",
    href: "/tools/business-tools",
    category: "business-tools"
  },
  {
    name: "Mailchimp",
    description: "外贸邮件营销平台，支持邮件自动化和数据分析",
    url: "https://mailchimp.com",
    icon: "📧",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
    id: "Mailchimp",
    href: "/tools/contact-email",
    category: "contact-email"
  },
  {
    name: "Hunter.io",
    description: "快速查找目标客户的企业邮箱地址",
    url: "https://hunter.io",
    icon: "🎯",
    bgColor: "bg-indigo-50 dark:bg-indigo-950",
    id: "Hunter.io",
    href: "/tools/contact-email",
    category: "contact-email"
  },
  {
    name: "Streak CRM",
    description: "Gmail插件，跟踪邮件打开率和客户管理",
    url: "https://www.streak.com",
    icon: "📈",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    id: "Streak CRM",
    href: "/tools/contact-email",
    category: "contact-email"
  },
  {
    name: "Snov.io",
    description: "邮箱验证和邮件群发工具，提高邮件送达率",
    url: "https://snov.io",
    icon: "✉️",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    id: "Snov.io",
    href: "/tools/contact-email",
    category: "contact-email"
  },
  {
    name: "Boomerang",
    description: "邮件定时发送和追踪，自动跟进重要客户",
    url: "https://www.boomeranggmail.com",
    icon: "🔄",
    bgColor: "bg-green-50 dark:bg-green-950",
    id: "Boomerang",
    href: "/tools/contact-email",
    category: "contact-email"
  },
  {
    name: "Reply.io",
    description: "外贸邮件营销自动化平台，支持多渠道跟进",
    url: "https://reply.io",
    icon: "💬",
    bgColor: "bg-rose-50 dark:bg-rose-950",
    id: "Reply.io",
    href: "/tools/contact-email",
    category: "contact-email"
  },
  {
    name: "Lemlist",
    description: "个性化冷邮件营销工具，提高邮件回复率",
    url: "https://lemlist.com",
    icon: "🎯",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
    id: "Lemlist",
    href: "/tools/contact-email",
    category: "contact-email"
  },
  {
    name: "Unlayer",
    description: "专业的外贸邮件模板编辑器，快速制作精美邮件",
    url: "https://unlayer.com",
    icon: "✨",
    bgColor: "bg-amber-50 dark:bg-amber-950",
    id: "Unlayer",
    href: "/tools/contact-email",
    category: "contact-email"
  },
  {
    name: "HubSpot CRM",
    description: "免费的客户管理系统，适合外贸团队使用",
    url: "https://www.hubspot.com/products/crm",
    icon: "👥",
    bgColor: "bg-orange-50 dark:bg-orange-950",
    id: "HubSpot CRM",
    href: "/tools/crm",
    category: "crm"
  },
  {
    name: "Zoho CRM",
    description: "性价比高的CRM系统，支持多语言",
    url: "https://www.zoho.com/crm",
    icon: "📊",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    id: "Zoho CRM",
    href: "/tools/crm",
    category: "crm"
  },
  {
    name: "Pipedrive",
    description: "直观的销售管理工具，适合跟进外贸订单",
    url: "https://www.pipedrive.com",
    icon: "📈",
    bgColor: "bg-green-50 dark:bg-green-950",
    id: "Pipedrive",
    href: "/tools/crm",
    category: "crm"
  },
  {
    name: "Salesforce",
    description: "企业级CRM解决方案，功能强大",
    url: "https://www.salesforce.com",
    icon: "💼",
    bgColor: "bg-indigo-50 dark:bg-indigo-950",
    id: "Salesforce",
    href: "/tools/crm",
    category: "crm"
  },
  {
    name: "Freshsales",
    description: "现代化的CRM工具，内置AI功能",
    url: "https://www.freshworks.com/freshsales-crm",
    icon: "🎯",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    id: "Freshsales",
    href: "/tools/crm",
    category: "crm"
  },
  {
    name: "Google Analytics",
    description: "分析独立站流量和用户行为数据",
    url: "https://analytics.google.com",
    icon: "📊",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    id: "Google Analytics",
    href: "/tools/data",
    category: "data"
  },
  {
    name: "Similar Web",
    description: "分析竞争对手网站流量和关键词数据",
    url: "https://www.similarweb.com",
    icon: "📈",
    bgColor: "bg-orange-50 dark:bg-orange-950",
    id: "Similar Web",
    href: "/tools/data",
    category: "data"
  },
  {
    name: "Ahrefs",
    description: "外贸SEO工具，优化网站排名",
    url: "https://ahrefs.com",
    icon: "🔍",
    bgColor: "bg-green-50 dark:bg-green-950",
    id: "Ahrefs",
    href: "/tools/data",
    category: "data"
  },
  {
    name: "Shopify",
    description: "快速搭建独立站，支持多语言和跨境支付",
    url: "https://www.shopify.com",
    icon: "🛍️",
    bgColor: "bg-green-50 dark:bg-green-950",
    id: "Shopify",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "PayPal",
    description: "全球跨境支付解决方案，保护交易安全",
    url: "https://www.paypal.com",
    icon: "💳",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    id: "PayPal",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Stripe",
    description: "支持多币种的跨境支付平台，费率优惠",
    url: "https://stripe.com",
    icon: "💰",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    id: "Stripe",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Oberlo",
    description: "Shopify选品工具，一键导入产品到商店",
    url: "https://www.oberlo.com",
    icon: "🔍",
    bgColor: "bg-indigo-50 dark:bg-indigo-950",
    id: "Oberlo",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Shippo",
    description: "跨境物流管理平台，比价和追踪订单",
    url: "https://goshippo.com",
    icon: "📦",
    bgColor: "bg-orange-50 dark:bg-orange-950",
    id: "Shippo",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Klaviyo",
    description: "电商邮件营销平台，提高客户留存率",
    url: "https://www.klaviyo.com",
    icon: "📮",
    bgColor: "bg-rose-50 dark:bg-rose-950",
    id: "Klaviyo",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Semrush",
    description: "跨境电商SEO和竞争对手分析工具",
    url: "https://www.semrush.com",
    icon: "📊",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
    id: "Semrush",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Helium 10",
    description: "亚马逊运营工具，选品和关键词优化",
    url: "https://www.helium10.com",
    icon: "🎯",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
    id: "Helium 10",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Jungle Scout",
    description: "亚马逊市场研究和产品分析工具",
    url: "https://www.junglescout.com",
    icon: "🔎",
    bgColor: "bg-amber-50 dark:bg-amber-950",
    id: "Jungle Scout",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Sellics",
    description: "亚马逊广告和绩效管理平台",
    url: "https://sellics.com",
    icon: "📈",
    bgColor: "bg-lime-50 dark:bg-lime-950",
    id: "Sellics",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Easyship",
    description: "全球物流解决方案，支持多渠道发货",
    url: "https://www.easyship.com",
    icon: "✈️",
    bgColor: "bg-teal-50 dark:bg-teal-950",
    id: "Easyship",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Loox",
    description: "电商产品评论管理工具，提升转化率",
    url: "https://loox.app",
    icon: "⭐",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
    id: "Loox",
    href: "/tools/ecommerce",
    category: "ecommerce"
  },
  {
    name: "Coursera",
    description: "国际贸易和商务课程，提升专业技能",
    url: "https://www.coursera.org/business",
    icon: "🎓",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    id: "Coursera",
    href: "/tools/learning",
    category: "learning"
  },
  {
    name: "Udemy Business",
    description: "外贸技能在线课程，实用性强",
    url: "https://www.udemy.com/business",
    icon: "📚",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    id: "Udemy Business",
    href: "/tools/learning",
    category: "learning"
  },
  {
    name: "LinkedIn Learning",
    description: "商务技能学习平台，名师授课",
    url: "https://www.linkedin.com/learning",
    icon: "💡",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
    id: "LinkedIn Learning",
    href: "/tools/learning",
    category: "learning"
  },
  {
    name: "Canton Fair",
    description: "广交会官网，获取展会信息",
    url: "https://www.cantonfair.org.cn",
    icon: "🏢",
    bgColor: "bg-red-50 dark:bg-red-950",
    id: "Canton Fair",
    href: "/tools/learning",
    category: "learning"
  },
  {
    name: "Global Sources",
    description: "环球资源展会信息和行业资讯",
    url: "https://www.globalsources.com",
    icon: "🌐",
    bgColor: "bg-green-50 dark:bg-green-950",
    id: "Global Sources",
    href: "/tools/learning",
    category: "learning"
  },
  {
    name: "Facebook",
    description: "全球最大社交平台，精准广告投放和社群运营",
    url: "https://business.facebook.com",
    icon: "👥",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    id: "Facebook",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "Instagram",
    description: "图片社交平台，适合产品展示和品牌营销",
    url: "https://business.instagram.com",
    icon: "📸",
    bgColor: "bg-pink-50 dark:bg-pink-950",
    id: "Instagram",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "LinkedIn",
    description: "商务社交平台，B2B营销和客户开发必备",
    url: "https://www.linkedin.com",
    icon: "💼",
    bgColor: "bg-indigo-50 dark:bg-indigo-950",
    id: "LinkedIn",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "Twitter",
    description: "全球资讯平台，品牌推广和客户沟通",
    url: "https://business.twitter.com",
    icon: "🐦",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
    id: "Twitter",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "YouTube",
    description: "视频平台，产品展示和品牌内容营销",
    url: "https://www.youtube.com",
    icon: "🎥",
    bgColor: "bg-red-50 dark:bg-red-950",
    id: "YouTube",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "Pinterest",
    description: "图片分享平台，适合产品灵感和设计推广",
    url: "https://business.pinterest.com",
    icon: "📌",
    bgColor: "bg-rose-50 dark:bg-rose-950",
    id: "Pinterest",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "TikTok",
    description: "短视频平台，年轻用户群体和潮流营销",
    url: "https://www.tiktok.com/business",
    icon: "🎵",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    id: "TikTok",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "WhatsApp Business",
    description: "全球即时通讯工具，客户沟通和服务",
    url: "https://business.whatsapp.com",
    icon: "💬",
    bgColor: "bg-green-50 dark:bg-green-950",
    id: "WhatsApp Business",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "Telegram",
    description: "加密通讯工具，建立私密社群和客户服务",
    url: "https://telegram.org",
    icon: "✈️",
    bgColor: "bg-sky-50 dark:bg-sky-950",
    id: "Telegram",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "Buffer",
    description: "社媒管理工具，统一管理多平台内容发布",
    url: "https://buffer.com",
    icon: "🔄",
    bgColor: "bg-teal-50 dark:bg-teal-950",
    id: "Buffer",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "Hootsuite",
    description: "社媒营销平台，内容规划和数据分析",
    url: "https://hootsuite.com",
    icon: "📊",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
    id: "Hootsuite",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "Canva Social",
    description: "社媒设计工具，制作专业的社媒图片和视频",
    url: "https://www.canva.com/social-media",
    icon: "🎨",
    bgColor: "bg-violet-50 dark:bg-violet-950",
    id: "Canva Social",
    href: "/tools/social-media",
    category: "social-media"
  },
  {
    name: "阿里巴巴国际站",
    description: "全球领先的B2B平台，百万供应商资源",
    url: "https://www.alibaba.com",
    icon: "🌐",
    bgColor: "bg-orange-50 dark:bg-orange-950",
    id: "阿里巴巴国际站",
    href: "/tools/sourcing",
    category: "sourcing"
  },
  {
    name: "1688",
    description: "国内大型采购批发平台，直连工厂货源",
    url: "https://www.1688.com",
    icon: "🏭",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    id: "1688",
    href: "/tools/sourcing",
    category: "sourcing"
  },
  {
    name: "Made-in-China",
    description: "专业外贸B2B平台，优质中国制造商",
    url: "https://www.made-in-china.com",
    icon: "🇨🇳",
    bgColor: "bg-red-50 dark:bg-red-950",
    id: "Made-in-China",
    href: "/tools/sourcing",
    category: "sourcing"
  },
  {
    name: "GlobalSources",
    description: "环球资源网，专业验证供应商平台",
    url: "https://www.globalsources.com",
    icon: "🌍",
    bgColor: "bg-indigo-50 dark:bg-indigo-950",
    id: "GlobalSources",
    href: "/tools/sourcing",
    category: "sourcing"
  },
  {
    name: "DHgate",
    description: "敦煌网，小额批发和采购平台",
    url: "https://www.dhgate.com",
    icon: "🛒",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    id: "DHgate",
    href: "/tools/sourcing",
    category: "sourcing"
  },
  {
    name: "HKTDC",
    description: "香港贸发局，连接香港及大中华供应商",
    url: "https://sourcing.hktdc.com",
    icon: "🔍",
    bgColor: "bg-emerald-50 dark:bg-emerald-950",
    id: "HKTDC",
    href: "/tools/sourcing",
    category: "sourcing"
  },
  {
    name: "TradeWheel",
    description: "全球B2B交易平台，多国供应商资源",
    url: "https://www.tradewheel.com",
    icon: "🔄",
    bgColor: "bg-cyan-50 dark:bg-cyan-950",
    id: "TradeWheel",
    href: "/tools/sourcing",
    category: "sourcing"
  },
  {
    name: "YiWuGo",
    description: "义乌小商品市场在线平台，小额批发",
    url: "https://www.yiwugo.com",
    icon: "🏪",
    bgColor: "bg-yellow-50 dark:bg-yellow-950",
    id: "YiWuGo",
    href: "/tools/sourcing",
    category: "sourcing"
  },
  {
    name: "ChemNet",
    description: "全球化工网，专业化工原料采购平台",
    url: "https://www.chemnet.com",
    icon: "⚗️",
    bgColor: "bg-teal-50 dark:bg-teal-950",
    id: "ChemNet",
    href: "/tools/sourcing",
    category: "sourcing"
  },
  {
    name: "GongChang",
    description: "工场网，工业品采购和制造商对接平台",
    url: "https://www.gongchang.com",
    icon: "⚙️",
    bgColor: "bg-rose-50 dark:bg-rose-950",
    id: "GongChang",
    href: "/tools/sourcing",
    category: "sourcing"
  }
];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [],
  safelist: [
    "bg-teal-50",
    "bg-teal-950",
    "bg-violet-50",
    "bg-violet-950",
    "bg-pink-50",
    "bg-pink-950",
    "bg-orange-50",
    "bg-orange-950",
    "bg-red-50",
    "bg-red-950",
    "bg-green-50",
    "bg-green-950",
    "bg-blue-50",
    "bg-blue-950",
    "bg-indigo-50",
    "bg-indigo-950",
    "bg-purple-50",
    "bg-purple-950",
    "bg-yellow-50",
    "bg-yellow-950",
    "bg-rose-50",
    "bg-rose-950",
    "bg-emerald-50",
    "bg-emerald-950",
    "bg-cyan-50",
    "bg-cyan-950",
    "bg-sky-50"
  ]
};
export default config;
