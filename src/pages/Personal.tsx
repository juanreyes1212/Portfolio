import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/portfolio/PageLayout";
import PageHeader from "@/components/portfolio/PageHeader";
import SEO from "@/components/SEO";
import { personalProjects } from "@/data/portfolioData";
import { getStatusColor } from "@/lib/colors";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Personal = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageLayout>
      <SEO
        title="Personal Projects"
        description="Side projects demonstrating technical exploration, problem-solving, and passion for building useful tools."
        canonical="/personal"
      />
      <main id="main-content" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <PageHeader
            backTo="/"
            backLabel="Back to Home"
            title="Personal"
            titleHighlight="Projects"
            description="Side projects demonstrating technical exploration, problem-solving, and passion for building useful tools."
          />

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                {...(prefersReducedMotion
                  ? { initial: false }
                  : {
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: index * 0.1 },
                    })}
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

                  {/* Status Badge */}
                  <Badge
                    variant="outline"
                    className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    <Link
                      to={`/personal/${project.slug}`}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm before:absolute before:inset-0 before:content-['']"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="list-disc pl-5 space-y-1 marker:text-primary">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-xs text-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="inline-flex items-center text-primary font-medium text-sm">
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                    </span>
                    {project.link && (
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        Live
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Personal;
