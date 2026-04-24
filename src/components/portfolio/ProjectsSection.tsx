import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { workProjects, personalProjects } from "@/data/portfolioData";
import { getStatusColor } from "@/lib/colors";
import FadeInOnScroll from "./FadeInOnScroll";
import SectionHeading from "./SectionHeading";

const ProjectsSection = () => {
  const featuredWork = workProjects.slice(0, 3);
  const featuredPersonal = personalProjects.slice(0, 2);

  return (
    <section id="work" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Work Projects */}
        <FadeInOnScroll className="flex items-end justify-between mb-12" y={20} duration={0.6}>
          <SectionHeading
            title="Featured"
            highlight="Work"
            description="Enterprise-scale projects showcasing frontend architecture and development excellence"
          />
          <Button variant="ghost" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground" asChild>
            <Link to="/work">
              View All Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {featuredWork.map((project, index) => (
            <FadeInOnScroll
              key={project.slug}
              as="article"
              delay={index * 0.1}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 relative"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" aria-hidden="true" />

                {/* Persistent corner arrow (visible on touch too) */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-background/70 backdrop-blur flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">
                    {project.company}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  <Link to={`/work/${project.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm before:absolute before:inset-0 before:content-['']">
                    <span className="sr-only">View </span>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Personal Projects */}
        <FadeInOnScroll className="flex items-end justify-between mb-12" y={20} duration={0.6}>
          <SectionHeading
            title="Personal"
            highlight="Projects"
            highlightStyle="serif-muted"
            size="md"
            description="Side projects exploring new technologies and solving personal challenges"
          />
          <Button variant="ghost" className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground" asChild>
            <Link to="/personal">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredPersonal.map((project, index) => (
            <FadeInOnScroll
              key={project.slug}
              as="article"
              delay={index * 0.1}
              className="group glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 relative"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge
                  variant="outline"
                  className={getStatusColor(project.status)}
                >
                  {project.status}
                </Badge>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                <Link
                  to={`/personal/${project.slug}`}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm before:absolute before:inset-0 before:content-['']"
                >
                  {project.title}
                </Link>
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
