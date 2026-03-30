import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Allow AI search bots (appear in ChatGPT/Perplexity results)
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        // Block AI training scrapers
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
    ],
    sitemap: "https://macslap.app/sitemap.xml",
  };
}
