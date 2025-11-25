import type { MetadataRoute } from "next"
import { workProjects, personalProjects, blogPosts } from "@/lib/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jdrey.dev"

  // Static pages with their priorities and update frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/personal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Dynamic work project pages
  const workProjectPages: MetadataRoute.Sitemap = Object.entries(workProjects).map(([slug, project]) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(project.lastModified),
    changeFrequency: "monthly" as const,
    priority: project.priority,
    // Include project images in sitemap for better SEO
    images:
      project.images?.map((image) => ({
        url: `${baseUrl}${image.src}`,
        title: image.alt,
        caption: image.caption,
      })) || [],
  }))

  // Dynamic personal project pages
  const personalProjectPages: MetadataRoute.Sitemap = Object.entries(personalProjects).map(([slug, project]) => ({
    url: `${baseUrl}/personal/${slug}`,
    lastModified: new Date(project.lastModified),
    changeFrequency: "monthly" as const,
    priority: project.priority,
    images:
      project.images?.map((image) => ({
        url: `${baseUrl}${image.src}`,
        title: image.alt,
        caption: image.caption,
      })) || [],
  }))

  // Dynamic blog post pages - properly implemented
  const blogPostPages: MetadataRoute.Sitemap = Object.entries(blogPosts).map(([slug, post]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "yearly" as const,
    priority: post.featured ? 0.8 : post.priority,
    // Include featured image for blog posts
    images: post.image
      ? [
          {
            url: `${baseUrl}${post.image}`,
            title: post.title,
            caption: post.excerpt,
          },
        ]
      : [],
  }))

  // Blog category pages
  const blogCategories = [...new Set(Object.values(blogPosts).map((post) => post.category))]
  const blogCategoryPages: MetadataRoute.Sitemap = blogCategories.map((category) => ({
    url: `${baseUrl}/blog?category=${encodeURIComponent(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  // Blog tag pages (for popular tags)
  const allTags = Object.values(blogPosts).flatMap((post) => post.tags)
  const tagCounts = allTags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Only include tags that appear in 2+ posts
  const popularTags = Object.entries(tagCounts)
    .filter(([, count]) => count >= 2)
    .map(([tag]) => tag)

  const blogTagPages: MetadataRoute.Sitemap = popularTags.map((tag) => ({
    url: `${baseUrl}/blog?tag=${encodeURIComponent(tag)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  // Combine all pages and sort by priority (highest first)
  const allPages = [
    ...staticPages,
    ...workProjectPages,
    ...personalProjectPages,
    ...blogPostPages,
    ...blogCategoryPages,
    ...blogTagPages,
  ].sort((a, b) => (b.priority || 0) - (a.priority || 0))

  return allPages
}
