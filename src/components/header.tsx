'use client'

import { ThemeSwitch } from "./theme-switch"
import { SearchTools } from "./search"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="flex h-14 items-center px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 font-semibold"
          >
            <span className="text-xl">🛠️</span>
            <span>外贸工具箱</span>
          </Link>
          <div className="hidden md:flex items-center gap-2 pl-4 border-l border-gray-200 dark:border-gray-800">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Make Global Trade Accessible
            </span>
          </div>
        </div>
        
        <div className="flex-1 px-4 md:px-8">
          <SearchTools />
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
} 