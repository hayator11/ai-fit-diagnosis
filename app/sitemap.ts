import type { MetadataRoute } from "next";
import { blogArticles } from "@/lib/content/blog";
import { aiTools, sampleUseCases, sampleUpdates } from "@/lib/data/constants";
import { SITE_URL } from "@/lib/project";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/diagnosis",
    "/review",
    "/tools",
    "/use-cases",
    "/updates",
    "/roadmap",
    "/blog"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...aiTools.map((tool) => ({
      url: `${SITE_URL}/tools/${tool.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    ...sampleUseCases.map((item) => ({
      url: `${SITE_URL}/use-cases/${item.id ?? item.slug}`,
      lastModified: item.created_at ? new Date(item.created_at) : now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    ...sampleUpdates.map((item) => ({
      url: `${SITE_URL}/updates/${item.id}`,
      lastModified: item.published_at ? new Date(item.published_at) : now,
      changeFrequency: "monthly" as const,
      priority: 0.5
    })),
    ...blogArticles.map((article) => ({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  ];
}
