import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Palette, Zap, Users, Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import { getAllWorkProjects, getAllPersonalProjects, getAllBlogPosts } from "@/lib/projects"

export default function HomePage() {
  const workProjects = getAllWorkProjects().slice(0, 3)
  const personalProjects = getAllPersonalProjects().slice(0, 3)
  const blogPosts = getAllBlogPosts().slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  Senior Frontend Developer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Hi, I'm <span className="text-amber-600 dark:text-amber-500">Juan Reyes</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A results-oriented software development professional with over 7 years of experience leading the
                  design, development, and strategy for high-impact web applications. Expert in React, Vue.js, and
                  enterprise-scale frontend architecture.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/work">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/resume">View Resume</Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">7+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">1.2M+</div>
                  <div className="text-sm text-muted-foreground">Monthly Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">40%</div>
                  <div className="text-sm text-muted-foreground">Dev Time Reduced</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Juan+Reyes"
                  alt="Juan Reyes - Senior Frontend Developer"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl transform rotate-6 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Competencies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise in modern frontend technologies and enterprise-scale application development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Code className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Frontend & Design Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  React.js, Vue.js, Next.js, TypeScript, Design Systems, Storybook
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Palette className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-lg">UI/UX & Content Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Accessibility (WCAG 2.1), User-Centered Design, A/B Testing, Contentful, SEO
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Analytics & Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Optimizely, Google Analytics, Amplitude, Cypress, Jest, Performance Optimization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Leadership & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Agile/Scrum, Project Leadership, Mentorship, CI/CD, Docker
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 md:px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
              <p className="text-xl text-muted-foreground">
                Recent projects showcasing enterprise-scale frontend development
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/work">
                View All Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {workProjects.map(({ slug, project }) => (
              <Card key={slug} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.images?.[0]?.src || "/placeholder.svg?height=200&width=400&text=Project"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                      {project.company}
                    </Badge>
                    {project.featured && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="mb-2 group-hover:text-amber-600 transition-colors">
                    <Link href={`/work/${slug}`}>{project.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/work/${slug}`}>View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Personal Projects</h2>
              <p className="text-xl text-muted-foreground">
                Side projects exploring new technologies and solving personal challenges
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/personal">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {personalProjects.map(({ slug, project }) => (
              <Card key={slug} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.images?.[0]?.src || "/placeholder.svg?height=200&width=400&text=Project"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      className={`${
                        project.status === "Live"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : project.status === "In Development"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="mb-2 group-hover:text-amber-600 transition-colors">
                    <Link href={`/personal/${slug}`}>{project.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/personal/${slug}`}>View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4 md:px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
              <p className="text-xl text-muted-foreground">
                Thoughts on frontend development, technical leadership, and industry trends
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map(({ slug, post }) => (
              <Card key={slug} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=200&width=400&text=Blog+Post"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      className={`${
                        post.category === "learnings"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      }`}
                    >
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{post.readTime}</span>
                    <div className="flex gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={`/blog/${slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, challenging projects, and innovative frontend
                solutions. Let's connect and explore how we can work together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="mailto:reyes1212@gmail.com">
                  Get In Touch
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resume">Download Resume</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Mesa, AZ</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <Link href="mailto:reyes1212@gmail.com" className="hover:text-amber-600 transition-colors">
                    reyes1212@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>(480) 435-2155</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
