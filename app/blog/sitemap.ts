import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/projects"

// Dedicated blog sitemap for better organization
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jdrey.dev"

  // Blog index page
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  // Individual blog posts
  const blogPostPages: MetadataRoute.Sitemap = Object.entries(blogPosts).map(([slug, post]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "yearly" as const,
    priority: post.featured ? 0.8 : 0.6,
    images: post.image
      ? [
          {
            url: post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`,
            title: post.title,
            caption: post.excerpt,
          },
        ]
      : [],
  }))

  // Blog categories
  const categories = [...new Set(Object.values(blogPosts).map((post) => post.category))]
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/blog?category=${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  // Popular tags (tags that appear in 2+ posts)
  const allTags = Object.values(blogPosts).flatMap((post) => post.tags)
  const tagCounts = allTags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const popularTags = Object.entries(tagCounts)
    .filter(([, count]) => count >= 2)
    .map(([tag]) => tag)

  const tagPages: MetadataRoute.Sitemap = popularTags.map((tag) => ({
    url: `${baseUrl}/blog?tag=${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...blogIndex, ...blogPostPages, ...categoryPages, ...tagPages].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0),
  )
}
