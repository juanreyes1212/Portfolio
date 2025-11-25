"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import { getAllBlogPosts, paginateItems } from "@/lib/projects"
import { SearchFilters } from "@/components/search-filters"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Pagination } from "@/components/pagination"

const ITEMS_PER_PAGE = 6

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const allBlogPosts = getAllBlogPosts()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get unique categories and tags from blog posts
  const { categories, availableTags } = useMemo(() => {
    const cats = new Set(allBlogPosts.map(({ post }) => post.category))
    const tags = new Set(allBlogPosts.flatMap(({ post }) => post.tags))
    return {
      categories: ["all", ...Array.from(cats)],
      availableTags: Array.from(tags),
    }
  }, [allBlogPosts])

  // Filter posts based on search, category, and tags
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter(({ post }) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag))

      return matchesSearch && matchesCategory && matchesTags
    })
  }, [allBlogPosts, searchQuery, selectedCategory, selectedTags])

  // Paginate filtered results
  const { items: paginatedPosts, totalPages } = paginateItems(filteredPosts, currentPage, ITEMS_PER_PAGE)

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory, selectedTags])

  const featuredPost = filteredPosts.find(({ post }) => post.featured)
  const regularPosts = paginatedPosts.filter(({ post }) => !post.featured || currentPage > 1)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "learnings":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "thoughts":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Blog & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sharing knowledge about frontend development, enterprise architecture, technical leadership, and lessons
            learned from building scalable web applications.
          </p>

          {/* Search and Filters */}
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={categories}
            selectedTags={selectedTags}
            onTagsChange={setSelectedTags}
            availableTags={availableTags}
            placeholder="Search blog posts..."
          />

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mt-4">
            {filteredPosts.length === allBlogPosts.length
              ? `Showing all ${filteredPosts.length} posts`
              : `Found ${filteredPosts.length} of ${allBlogPosts.length} posts`}
          </p>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">No posts found</h2>
            <p className="text-muted-foreground mb-4">Try adjusting your search terms or clearing the filters.</p>
          </div>
        )}

        {/* Featured Post (only on first page) */}
        {featuredPost && currentPage === 1 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-amber-600 text-white">Featured</Badge>
              <span className="text-sm text-muted-foreground">Latest Post</span>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.post.image || "/placeholder.svg"}
                    alt={featuredPost.post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className={getCategoryColor(featuredPost.post.category)}>{featuredPost.post.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.post.readTime}
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-2xl mb-4 hover:text-amber-600 transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.post.title}</Link>
                  </CardTitle>

                  <CardDescription className="text-muted-foreground mb-6 text-base leading-relaxed">
                    {featuredPost.post.excerpt}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.post.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                    {featuredPost.post.tags.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{featuredPost.post.tags.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <Button asChild className="bg-amber-600 hover:bg-amber-700">
                    <Link href={`/blog/${featuredPost.slug}`}>Read Full Post</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {regularPosts.map(({ slug, post }, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>

                    <CardTitle className="text-lg mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${slug}`}>{post.title}</Link>
                    </CardTitle>

                    <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                      <div className="flex gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href={`/blog/${slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              className="mb-16"
            />
          </>
        )}

        {/* Newsletter Signup */}
        <NewsletterSignup className="mt-16" />
      </div>
    </div>
  )
}
