import Link from "next/link"
import { Metadata } from 'next'
import { jsonLdScriptProps } from 'react-schemaorg'

export const metadata: Metadata = {
  title: "外贸工具箱 - 提升外贸工作效率的必备工具集",
  description: "专业的外贸工具导航平台，精选60+款高效工具，让您的外贸工作更轻松。",
}

export default function Home() {
  return (
    <>
      <script {...jsonLdScriptProps({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "外贸工具箱",
        description: "专业的外贸工具导航平台",
        url: "https://yourdomain.com"
      })} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl">
            <span className="text-4xl">🚀</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            让全球贸易，触手可及
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            精选60+款高效工具，助您轻松开展外贸业务
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/tools/copywriting"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              开始使用
            </Link>
            <Link 
              href="#features"
              className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:opacity-90 transition-opacity"
            >
              了解更多
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
              <span className="text-2xl text-white">⚡</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">高效便捷</h2>
            <p className="text-gray-600 dark:text-gray-400">
              一站式工具集成，快速切换，提升工作效率
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">专业可靠</h2>
            <p className="text-gray-600 dark:text-gray-400">
              精选优质工具，确保专业性和可靠性
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
              <span className="text-2xl text-white">🌐</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">全球视野</h2>
            <p className="text-gray-600 dark:text-gray-400">
              覆盖全球市场，助力拓展国际业务
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

