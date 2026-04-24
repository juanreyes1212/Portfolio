import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/portfolio/PageLayout";
import PageHeader from "@/components/portfolio/PageHeader";
import SEO from "@/components/SEO";
import { workProjects } from "@/data/portfolioData";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Work = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageLayout>
      <SEO
        title="Professional Work"
        description="Enterprise-scale projects from PetSmart, Hownd, and other companies showcasing frontend architecture and development excellence."
        canonical="/work"
      />
      <main id="main-content" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <PageHeader
            backTo="/"
            backLabel="Back to Home"
            title="Professional"
            titleHighlight="Work"
            description="Enterprise-scale projects from PetSmart, Hownd, and other companies showcasing frontend architecture and development excellence."
          />

          {/* Projects Grid */}
          <div className="space-y-12">
            {workProjects.map((project, index) => (
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
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:block hidden" aria-hidden="true" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:hidden" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">
                        {project.company}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      <Link
                        to={`/work/${project.slug}`}
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm before:absolute before:inset-0 before:content-['']"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-muted-foreground mb-2">
                      {project.role} • {project.duration}
                    </p>

                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-primary">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground">
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <span className="inline-flex items-center text-primary font-medium">
                      View Case Study
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                    </span>
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

export default Work;
