"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen, Heart } from "lucide-react"
import Image from "next/image"
import { getBlogPost, getAllBlogPosts } from "@/lib/projects"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = getBlogPost(slug)
  const allPosts = getAllBlogPosts()

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter(({ slug: postSlug, post: p }) => postSlug !== slug && p.category === post.category)
    .slice(0, 3)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "learnings":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "woodworking":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
      case "video games":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "thoughts":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="mb-12">
          {/* Featured Image */}
          {post.image && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>
          )}

          {/* Article Meta */}
          <div className="flex items-center gap-4 mb-6">
            <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
            {post.featured && <Badge className="bg-amber-600 text-white">Featured</Badge>}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{post.title}</h1>

          {/* Article Excerpt */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{post.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* Share Button */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  })
                } else {
                  navigator.clipboard.writeText(window.location.href)
                  // You could add a toast notification here
                }
              }}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <span className="text-sm text-muted-foreground">Share this article with others</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* This would typically be rendered from MDX or markdown */}
            <div className="space-y-6 text-foreground leading-relaxed">
              {/* Sample content - in a real app, this would come from MDX/markdown */}
              {post.slug === "building-accessible-react-components-from-scratch" && (
                <>
                  <p>
                    Web accessibility is not just a nice-to-have feature—it's a fundamental requirement for creating
                    inclusive digital experiences. When we build React components, we have the opportunity to bake
                    accessibility into the foundation of our applications from the ground up.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                    Understanding the Accessibility Landscape
                  </h2>

                  <p>
                    Before diving into code, it's crucial to understand that accessibility affects everyone. Whether
                    someone is using a screen reader, navigating with only a keyboard, or dealing with temporary
                    impairments like a broken mouse, our components should work seamlessly for all users.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The WCAG Guidelines</h3>

                  <p>
                    The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for accessibility.
                    The four main principles are:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Perceivable:</strong> Information must be presentable in ways users can perceive
                    </li>
                    <li>
                      <strong>Operable:</strong> Interface components must be operable by all users
                    </li>
                    <li>
                      <strong>Understandable:</strong> Information and UI operation must be understandable
                    </li>
                    <li>
                      <strong>Robust:</strong> Content must be robust enough for various assistive technologies
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Building Accessible React Components</h2>

                  <p>
                    Let's walk through creating a truly accessible button component that demonstrates key accessibility
                    principles:
                  </p>

                  <div className="bg-muted p-4 rounded-lg my-6">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`interface AccessibleButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  ariaLabel?: string
  variant?: 'primary' | 'secondary'
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  onClick,
  disabled = false,
  ariaLabel,
  variant = 'primary'
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={\`btn btn-\${variant} \${disabled ? 'btn-disabled' : ''}\`}
      type="button"
    >
      {children}
    </button>
  )
}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Key Accessibility Features</h3>

                  <p>This button component includes several important accessibility features:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Proper semantic HTML with the <code>button</code> element
                    </li>
                    <li>
                      Support for <code>aria-label</code> for additional context
                    </li>
                    <li>Disabled state handling that works with assistive technologies</li>
                    <li>Keyboard navigation support (built into button elements)</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Testing Your Components</h2>

                  <p>
                    Building accessible components is only half the battle—testing them is equally important. Here are
                    some essential testing strategies:
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automated Testing</h3>

                  <p>Use tools like axe-core to catch common accessibility issues:</p>

                  <div className="bg-muted p-4 rounded-lg my-6">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('Button component should be accessible', async () => {
  const { container } = render(
    <AccessibleButton onClick={() => {}}>
      Click me
    </AccessibleButton>
  )
  
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})`}</code>
                    </pre>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Manual Testing</h3>

                  <p>Don't forget about manual testing:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Navigate using only the keyboard (Tab, Enter, Space, Arrow keys)</li>
                    <li>Test with screen readers like NVDA, JAWS, or VoiceOver</li>
                    <li>Check color contrast ratios</li>
                    <li>Verify focus indicators are visible and clear</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>

                  <p>
                    Building accessible React components requires intentional design and development practices. By
                    understanding accessibility principles, implementing proper ARIA attributes, and thoroughly testing
                    our components, we can create inclusive experiences that work for everyone.
                  </p>

                  <p>
                    Remember, accessibility is not a one-time checkbox—it's an ongoing commitment to inclusive design
                    that benefits all users, not just those with disabilities.
                  </p>
                </>
              )}

              {/* Default content for other posts */}
              {post.slug !== "building-accessible-react-components-from-scratch" && (
                <>
                  <p>{post.content}</p>
                  <p>
                    This is where the full blog post content would be rendered. In a real application, this would
                    typically be loaded from a markdown file or CMS and rendered using a markdown processor like MDX or
                    react-markdown.
                  </p>
                  <p>
                    The content would include rich formatting, code blocks, images, and other media to create an
                    engaging reading experience.
                  </p>
                </>
              )}
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=80&width=80&text=Juan"
                alt="Juan Reyes"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Juan Reyes</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Frontend Developer passionate about creating accessible, performant web experiences. When not coding,
                  you'll find me in the workshop crafting furniture, practinging my photography, or exploring video games. I believe in sharing
                  knowledge and building inclusive digital experiences for everyone.
                </p>
                <div className="flex gap-2 mt-3">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/work">View Work</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/personal">Personal Projects</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(({ slug, post: relatedPost }) => (
                <Card key={slug} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="relative h-32 mb-3 rounded overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <Badge className={getCategoryColor(relatedPost.category)} variant="secondary">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground mt-2 mb-1 line-clamp-2 group-hover:text-amber-600 transition-colors">
                      <Link href={`/blog/${slug}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {relatedPost.readTime}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/blog">
              <BookOpen className="mr-2 h-4 w-4" />
              All Posts
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              More {post.category} posts
            </Link>
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Separator className="my-12" />
        <NewsletterSignup
          title="Enjoyed this post?"
          description="Subscribe to get notified when I publish new articles about development, woodworking, and gaming."
        />
      </div>
    </div>
  )
}
