"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Heart, Clock } from "lucide-react"
import Image from "next/image"
import { getAllPersonalProjects, paginateItems } from "@/lib/projects"
import { Pagination } from "@/components/pagination"

const ITEMS_PER_PAGE = 6

export default function PersonalPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const allProjects = getAllPersonalProjects()

  // Paginate projects
  const { items: paginatedProjects, totalPages } = paginateItems(allProjects, currentPage, ITEMS_PER_PAGE)

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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Personal Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Side projects and experiments exploring new technologies, solving personal challenges, and pushing the
            boundaries of what's possible with modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {paginatedProjects.map(({ slug, project }) => (
            <Card key={slug} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.images?.[0]?.src || "/placeholder.svg?height=300&width=500&text=Project"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  <div className="flex items-center gap-1 text-amber-600 ml-auto">
                    <Heart className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">Personal</span>
                  </div>
                </div>

                <CardTitle className="text-xl mb-3 group-hover:text-amber-600 transition-colors">
                  <Link href={`/personal/${slug}`}>{project.title}</Link>
                </CardTitle>

                <CardDescription className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>

                {/* Quick Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <span>•</span>
                  <span>{project.status}</span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button asChild className="flex-1 bg-amber-600 hover:bg-amber-700">
                    <Link href={`/personal/${slug}`}>View Details</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} className="mb-16" />

        {/* CTA Section */}
        <div className="text-center bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Have an Interesting Project Idea?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I love collaborating on innovative projects and exploring new technologies. Let's discuss how we can build
            something amazing together.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="mailto:reyes1212@gmail.com">Let's Collaborate</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/work">View Professional Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
