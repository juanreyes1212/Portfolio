import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"
import { getWorkProject } from "@/lib/projects"
import type { Metadata } from "next"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getWorkProject(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - ${project.company}`,
    description: project.description,
    openGraph: {
      title: `${project.title} - ${project.company}`,
      description: project.description,
      images: project.images?.[0]?.src ? [project.images[0].src] : [],
    },
  }
}

export default function WorkProjectPage({ params }: PageProps) {
  const { slug } = params
  const project = getWorkProject(slug)

  if (!project) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: "Juan Reyes",
    },
    dateCreated: project.lastModified,
    keywords: project.tech.join(", "),
    url: project.liveUrl,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/work">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Work
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                {project.company}
              </Badge>
              <span className="text-sm text-muted-foreground">{project.duration}</span>
              {project.featured && (
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                >
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

            {/* Quick Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="font-semibold text-foreground">Role</p>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="font-semibold text-foreground">Duration</p>
                  <p className="text-sm text-muted-foreground">{project.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="font-semibold text-foreground">Team Size</p>
                  <p className="text-sm text-muted-foreground">{project.team}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.liveUrl && project.liveUrl !== "#" && (
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </Link>
                </Button>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <Button asChild variant="outline">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h2>
              <ImageGallery images={project.images} />
            </div>
          )}

          {/* Project Details */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-amber-600" />
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-amber-600" />
                    The Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Results & Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Responsibilities */}
              <Card>
                <CardHeader>
                  <CardTitle>My Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <Card>
                <CardHeader>
                  <CardTitle>Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Project
                      </Link>
                    </Button>
                  ) : (
                    <p className="text-sm text-muted-foreground">Live project not publicly available</p>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  ) : (
                    <p className="text-sm text-muted-foreground">Source code is proprietary</p>
                  )}
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card>
                <CardHeader>
                  <CardTitle>About {project.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {project.company === "PetSmart" &&
                      "Leading pet specialty retailer providing products, services and solutions for pets and pet parents."}
                    {project.company === "Hownd" &&
                      "Innovative pet technology company focused on connecting pet owners with local businesses and services."}
                    {project.company === "Prism Studios / Clairvoyant LLC" &&
                      "Digital agency specializing in enterprise web applications and data visualization solutions."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-16">
            <Separator className="mb-8" />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">More Projects</h2>
              <div className="flex gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/work">View All Work</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/personal">Personal Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
