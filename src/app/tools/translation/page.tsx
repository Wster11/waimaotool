import { ToolsLayout } from "@/components/tools-layout"
import { getToolsByCategory } from "@/lib/tools"

const tools = [
  {
    name: '沉浸式翻译',
    description: '网页双语对照翻译，外贸必备的浏览器插件',
    url: 'https://immersivetranslate.com/',
    icon: '🔤',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950'
  },
  {
    name: 'DeepL',
    description: '外贸专业翻译工具，支持产品描述和邮件翻译',
    url: 'https://www.deepl.com/translator',
    icon: '🌍',
    bgColor: 'bg-blue-50 dark:bg-blue-950'
  },
  {
    name: 'Google 翻译',
    description: '支持100多种语言，适合快速翻译和语言检查',
    url: 'https://translate.google.com',
    icon: '🔄',
    bgColor: 'bg-green-50 dark:bg-green-950'
  },
  {
    name: '有道商务翻译',
    description: '针对商务场景优化的翻译工具，提供专业术语支持',
    url: 'https://fanyi.youdao.com/business',
    icon: '📚',
    bgColor: 'bg-red-50 dark:bg-red-950'
  },
  {
    name: 'Grammarly',
    description: '英文写作助手，提高邮件和文案的专业度',
    url: 'https://www.grammarly.com',
    icon: '✍️',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950'
  },
  {
    name: 'Linguee',
    description: '提供真实语境的双语对照例句，学习地道表达',
    url: 'https://www.linguee.com',
    icon: '📖',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950'
  },
  {
    name: 'Wordtune',
    description: 'AI写作助手，优化英文表达，提供多种改写建议',
    url: 'https://www.wordtune.com',
    icon: '🤖',
    bgColor: 'bg-purple-50 dark:bg-purple-950'
  },
  {
    name: 'Reverso Context',
    description: '上下文翻译工具，提供多语言翻译和例句',
    url: 'https://context.reverso.net',
    icon: '🔍',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950'
  },
  {
    name: 'Language Tool',
    description: '多语言语法检查工具，支持20多种语言',
    url: 'https://languagetool.org',
    icon: '📝',
    bgColor: 'bg-orange-50 dark:bg-orange-950'
  }
]

export default function TranslationTools() {
  const tools = getToolsByCategory('translation')
  
  return (
    <ToolsLayout
      title="翻译工具"
      description="多语言翻译和文案优化工具"
      icon="🌐"
      tools={tools}
    />
  )
} 