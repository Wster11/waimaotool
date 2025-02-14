import { Tool } from "./tools";

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "外贸工具箱",
    description: "专业的外贸工具导航平台",
    url: "https://your-domain.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://your-domain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    sameAs: [
      "https://twitter.com/your-account",
      "https://www.linkedin.com/company/your-company"
    ]
  }
}

export function getToolSchema(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: tool.url
  }
} 