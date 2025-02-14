"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  bgColor: string;
}

interface ToolsLayoutProps {
  title: string;
  description: string;
  icon: string;
  tools: Tool[];
}

export function ToolsLayout({
  title,
  description,
  icon,
  tools
}: ToolsLayoutProps) {
  const searchParams = useSearchParams();
  const highlightId = searchParams.get("highlight");
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    if (highlightId) {
      const element = document.getElementById(highlightId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        setShowHighlight(true);

        // 1秒后移除高亮效果
        const timer = setTimeout(() => {
          setShowHighlight(false);
        }, 1000);

        return () => clearTimeout(timer);
      }
    }
  }, [highlightId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <header className="mb-12">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur"></div>
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 shadow-lg">
                <span className="text-3xl">{icon}</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl text-center">
              {description}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              initial={false}
              animate={tool.id === highlightId ? { scale: 1 } : { scale: 1 }}
              className="relative"
            >
              <AnimatePresence>
                {showHighlight && tool.id === highlightId && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute -inset-[2px] rounded-xl bg-blue-500/10 dark:bg-blue-400/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <Link
                id={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full relative"
              >
                <Card
                  className={`
                overflow-hidden group hover:shadow-md transition-all duration-300 
                border-0 ring-1 
                ${
                  tool.id === highlightId && showHighlight
                    ? "ring-blue-500 dark:ring-blue-400 shadow-lg"
                    : "ring-gray-200 dark:ring-gray-800 hover:ring-blue-500/20 dark:hover:ring-blue-500/20"
                }
                h-full flex flex-col
              `}
                >
                  <div
                    className={`
                  aspect-[3/2] ${tool.bgColor} 
                  flex items-center justify-center relative shrink-0
                  transition-colors duration-300
                  ${
                    tool.id === highlightId && showHighlight
                      ? "brightness-105"
                      : ""
                  }
                `}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/5 dark:from-white/10 dark:to-black/10" />
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-500 relative">
                      {tool.icon}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-base font-semibold truncate">
                        {tool.name}
                      </h2>
                      <span className="text-gray-400 group-hover:text-blue-500 transition-colors shrink-0 ml-2">
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 flex-1">
                      {tool.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
