import { motion } from "framer-motion";
import { Calendar, Building2, Briefcase } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/portfolio/PageLayout";
import BackLink from "@/components/portfolio/BackLink";
import SEO from "@/components/SEO";
import { workProjects } from "@/data/portfolioData";

const WorkProject = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = workProjects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const relatedProjects = workProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <PageLayout>
      <SEO
        title={`${project.title} — ${project.company}`}
        description={project.description}
        canonical={`/work/${project.slug}`}
        ogImage={project.image}
      />
      <main id="main-content" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <BackLink to="/work" label="Back to Work" />
          </motion.div>

          {/* Project Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                <span>{project.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span>{project.duration}</span>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>

          {/* Project Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8 mb-12"
          >
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-medium mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-foreground/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">My Role</h2>
              <p className="text-foreground/90 leading-relaxed">
                As <strong>{project.role}</strong> at {project.company}, I led the frontend development efforts 
                and collaborated closely with cross-functional teams to deliver high-quality solutions. 
                My responsibilities included architecting scalable component systems, implementing performance 
                optimizations, and mentoring team members on best practices.
              </p>
            </div>
          </motion.div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">More Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    to={`/work/${relatedProject.slug}`}
                    className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5 mb-3">
                        {relatedProject.company}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
    </PageLayout>
  );
};

export default WorkProject;
