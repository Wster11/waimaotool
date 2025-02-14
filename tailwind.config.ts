import type { Config } from "tailwindcss";

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
