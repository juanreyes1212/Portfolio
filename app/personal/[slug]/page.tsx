import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, Heart, Lightbulb, Target } from "lucide-react"
import { ImageGallery } from "@/components/image-gallery"
import { getPersonalProject } from "@/lib/projects"

export default function PersonalProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const project = getPersonalProject(slug)

  if (!project) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "In Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Open Source":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Complete":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/personal">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Personal Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
            <span className="text-sm text-muted-foreground">{project.duration}</span>
            <div className="flex items-center gap-1 text-amber-600">
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">Personal Project</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Project Screenshots</h2>
            <ImageGallery images={project.images} />
          </div>
        )}

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Motivation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-amber-600" />
                  Why I Built This
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.motivation}</p>
              </CardContent>
            </Card>

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
                  My Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Lessons Learned */}
            <Card>
              <CardHeader>
                <CardTitle>What I Learned</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span className="text-muted-foreground">{lesson}</span>
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
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project Status */}
            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.status === "In Development" &&
                    "This project is actively being developed. New features are added regularly."}
                  {project.status === "Live" &&
                    "This project is complete and deployed. Occasional updates and maintenance."}
                  {project.status === "Open Source" &&
                    "This project is open source and welcomes contributions from the community."}
                  {project.status === "Complete" &&
                    "This project has reached its intended scope and is considered complete."}
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
                <Link href="/personal">All Personal Projects</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/work">Professional Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
