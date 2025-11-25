"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, RefreshCw, FileText, Globe, Tag, Folder } from "lucide-react"
import { getAllBlogPosts, getAllWorkProjects, getAllPersonalProjects } from "@/lib/projects"

interface SitemapEntry {
  url: string
  lastModified: string
  changeFrequency: string
  priority: number
  type: "static" | "work" | "personal" | "blog" | "category" | "tag"
  hasImages?: boolean
}

export function SitemapInfo() {
  const [sitemapData, setSitemapData] = useState<SitemapEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const fetchSitemapData = async () => {
    setLoading(true)
    try {
      const baseUrl = "https://jdrey.dev"
      const mockData: SitemapEntry[] = []

      // Static pages
      const staticPages = [
        { path: "", priority: 1.0, frequency: "weekly" },
        { path: "/work", priority: 0.9, frequency: "monthly" },
        { path: "/personal", priority: 0.8, frequency: "monthly" },
        { path: "/blog", priority: 0.8, frequency: "weekly" },
        { path: "/resume", priority: 0.7, frequency: "monthly" },
      ]

      staticPages.forEach((page) => {
        mockData.push({
          url: `${baseUrl}${page.path}`,
          lastModified: new Date().toISOString(),
          changeFrequency: page.frequency,
          priority: page.priority,
          type: "static",
        })
      })

      // Work projects
      const workProjects = getAllWorkProjects()
      workProjects.forEach(({ slug, project }) => {
        mockData.push({
          url: `${baseUrl}/work/${slug}`,
          lastModified: project.lastModified,
          changeFrequency: "monthly",
          priority: project.priority,
          type: "work",
          hasImages: project.images && project.images.length > 0,
        })
      })

      // Personal projects
      const personalProjects = getAllPersonalProjects()
      personalProjects.forEach(({ slug, project }) => {
        mockData.push({
          url: `${baseUrl}/personal/${slug}`,
          lastModified: project.lastModified,
          changeFrequency: "monthly",
          priority: project.priority,
          type: "personal",
          hasImages: project.images && project.images.length > 0,
        })
      })

      // Blog posts
      const blogPosts = getAllBlogPosts()
      blogPosts.forEach(({ slug, post }) => {
        mockData.push({
          url: `${baseUrl}/blog/${slug}`,
          lastModified: post.lastModified,
          changeFrequency: "yearly",
          priority: post.featured ? 0.8 : post.priority,
          type: "blog",
          hasImages: !!post.image,
        })
      })

      // Blog categories
      const categories = [...new Set(blogPosts.map(({ post }) => post.category))]
      categories.forEach((category) => {
        mockData.push({
          url: `${baseUrl}/blog?category=${encodeURIComponent(category)}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "weekly",
          priority: 0.6,
          type: "category",
        })
      })

      // Popular tags
      const allTags = blogPosts.flatMap(({ post }) => post.tags)
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

      popularTags.forEach((tag) => {
        mockData.push({
          url: `${baseUrl}/blog?tag=${encodeURIComponent(tag)}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "monthly",
          priority: 0.5,
          type: "tag",
        })
      })

      setSitemapData(mockData.sort((a, b) => b.priority - a.priority))
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Failed to fetch sitemap data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSitemapData()
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case "static":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "work":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
      case "personal":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "blog":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "category":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      case "tag":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "static":
        return <Globe className="h-4 w-4" />
      case "work":
      case "personal":
        return <FileText className="h-4 w-4" />
      case "blog":
        return <FileText className="h-4 w-4" />
      case "category":
        return <Folder className="h-4 w-4" />
      case "tag":
        return <Tag className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const stats = {
    total: sitemapData.length,
    static: sitemapData.filter((item) => item.type === "static").length,
    work: sitemapData.filter((item) => item.type === "work").length,
    personal: sitemapData.filter((item) => item.type === "personal").length,
    blog: sitemapData.filter((item) => item.type === "blog").length,
    category: sitemapData.filter((item) => item.type === "category").length,
    tag: sitemapData.filter((item) => item.type === "tag").length,
    withImages: sitemapData.filter((item) => item.hasImages).length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">XML Sitemap Overview</h2>
          <p className="text-muted-foreground">Last updated: {lastUpdated.toLocaleString()}</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={fetchSitemapData} disabled={loading} variant="outline" size="sm">
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700">
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View XML
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href="/blog/sitemap.xml" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Blog Sitemap
            </a>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{stats.total}</div>
            <div className="text-sm text-muted-foreground">Total URLs</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.static}</div>
            <div className="text-sm text-muted-foreground">Static</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-amber-600">{stats.work}</div>
            <div className="text-sm text-muted-foreground">Work</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{stats.personal}</div>
            <div className="text-sm text-muted-foreground">Personal</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{stats.blog}</div>
            <div className="text-sm text-muted-foreground">Blog Posts</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.category}</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-pink-600">{stats.tag}</div>
            <div className="text-sm text-muted-foreground">Tags</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600">{stats.withImages}</div>
            <div className="text-sm text-muted-foreground">With Images</div>
          </CardContent>
        </Card>
      </div>

      {/* SEO Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>SEO Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">High Priority Pages (0.8+)</span>
              <Badge variant="secondary">{sitemapData.filter((item) => item.priority >= 0.8).length}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Pages with Images</span>
              <Badge variant="secondary">{stats.withImages}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Recently Updated (30 days)</span>
              <Badge variant="secondary">
                {
                  sitemapData.filter((item) => {
                    const thirtyDaysAgo = new Date()
                    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
                    return new Date(item.lastModified) > thirtyDaysAgo
                  }).length
                }
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Weekly Update Frequency</span>
              <Badge variant="secondary">
                {sitemapData.filter((item) => item.changeFrequency === "weekly").length}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              {Object.entries(stats)
                .filter(([key]) => !["total", "withImages"].includes(key))
                .map(([type, count]) => (
                  <div key={type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(type)}
                      <span className="text-sm capitalize">{type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getTypeColor(type)} variant="secondary">
                        {count}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{((count / stats.total) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sitemap Entries */}
      <Card>
        <CardHeader>
          <CardTitle>All Sitemap URLs</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground">Loading sitemap data...</p>
            </div>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {sitemapData.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={getTypeColor(entry.type)} variant="secondary">
                        <div className="flex items-center gap-1">
                          {getTypeIcon(entry.type)}
                          {entry.type}
                        </div>
                      </Badge>
                      {entry.hasImages && (
                        <Badge variant="outline" className="text-xs">
                          📷 Images
                        </Badge>
                      )}
                      <span className="text-sm font-medium text-foreground truncate">
                        {entry.url.replace("https://jdrey.dev", "")}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Priority: {entry.priority}</span>
                      <span>Frequency: {entry.changeFrequency}</span>
                      <span>Modified: {new Date(entry.lastModified).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <a href={entry.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
