import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "外贸工具箱 | 一站式外贸工作效率工具集合",
  description: "专为外贸人打造的在线工具箱，包含60+款精选工具，涵盖市场调研、翻译助手、邮件营销、跨境电商等全方位外贸工具，助力提升外贸工作效率。",
  keywords: [
    "外贸工具",
    "外贸工具箱",
    "外贸软件",
    "外贸必备工具",
    "外贸营销工具",
    "外贸翻译工具",
    "跨境电商工具",
    "外贸邮件工具",
    "外贸效率工具",
    "外贸必备软件"
  ],
  authors: [{ name: "外贸工具箱" }],
  creator: "外贸工具箱",
  publisher: "外贸工具箱",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yourdomain.com",
    title: "外贸工具箱 | 一站式外贸工作效率工具集合",
    description: "专为外贸人打造的在线工具箱，包含60+款精选工具，涵盖市场调研、翻译助手、邮件营销、跨境电商等全方位外贸工具。",
    siteName: "外贸工具箱",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    baidu: 'your-baidu-verification-code'
  },
  alternates: {
    canonical: 'https://yourdomain.com'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar categories={categories} />
              <main className="flex-1 overflow-auto">
                <div className="container mx-auto p-6">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

const categories = [
  {
    id: 'image-media',
    name: '图片与媒体',
    description: '产品图片处理、视频编辑等',
    href: '/tools/image-media',
    icon: '🖼️'
  },
  {
    id: 'translation',
    name: '翻译助手',
    description: '多语言翻译、文案优化',
    href: '/tools/translation',
    icon: '🌐'
  },
  {
    id: 'copywriting',
    name: '外贸文案',
    description: '产品描述、营销文案',
    href: '/tools/copywriting',
    icon: '✍️'
  },
  {
    id: 'market-research',
    name: '市场调研',
    description: '海外市场分析、竞品调研',
    href: '/tools/market-research',
    icon: '🔍'
  },
  {
    id: 'contact-email',
    name: '邮件营销',
    description: '邮件模板、群发管理',
    href: '/tools/contact-email',
    icon: '📧'
  },
  {
    id: 'ecommerce',
    name: '跨境电商',
    description: '店铺运营、支付工具',
    href: '/tools/ecommerce',
    icon: '🛍️'
  },
  {
    id: 'social-media',
    name: '跨境社媒',
    description: '社媒营销、内容运营',
    href: '/tools/social-media',
    icon: '📱'
  },
  {
    id: 'business-tools',
    name: '商务工具',
    description: '报价单、合同模板',
    href: '/tools/business-tools',
    icon: '📊'
  },
  {
    id: 'crm',
    name: '客户管理',
    description: '客户跟进、订单管理',
    href: '/tools/crm',
    icon: '👥'
  },
  {
    id: 'learning',
    name: '外贸学习',
    description: '技能提升、行业资讯',
    href: '/tools/learning',
    icon: '📚'
  },
  {
    id: 'sourcing',
    name: '货源雷达',
    description: '全球采购、供应商寻源',
    href: '/tools/sourcing',
    icon: '🎯'
  }
];
