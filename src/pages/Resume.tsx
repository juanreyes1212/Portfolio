import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/portfolio/PageLayout";
import BackLink from "@/components/portfolio/BackLink";
import SEO from "@/components/SEO";
import { resumeData } from "@/data/portfolioData";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const Resume = () => {
  const prefersReducedMotion = useReducedMotion();
  const fade = (delay = 0, y = 30) =>
    prefersReducedMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay },
        };

  const telHref = `tel:+1${resumeData.phone.replace(/\D/g, "")}`;

  return (
    <PageLayout>
      <SEO
        title="Resume"
        description="Resume of Juan Reyes — Senior Frontend Developer with 7+ years of experience in React, Vue.js, TypeScript, and design systems."
        canonical="/resume"
      />
      <main id="main-content" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div {...fade(0, 20)} className="mb-12">
            <BackLink to="/" label="Back to Home" />

            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">
                    <span className="text-gradient">{resumeData.name}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-4">{resumeData.title}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                      {resumeData.location}
                    </div>
                    <a href={`mailto:${resumeData.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                      {resumeData.email}
                    </a>
                    <a href={telHref} className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                      {resumeData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild>
                    <a href="/resume.pdf" download="Juan_Reyes_Resume.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed border-t border-border/50 pt-8">
                {resumeData.summary}
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.section {...fade(0.1)} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Experience
            </h2>

            <div className="space-y-6">
              {resumeData.experience.map((job) => (
                <div key={`${job.company}-${job.role}`} className="glass rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <p>{job.duration}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>

                  <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="text-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section {...fade(0.2)} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Skills
            </h2>

            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section {...fade(0.3)} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              Education
            </h2>

            <div className="glass rounded-2xl p-6 md:p-8">
              {resumeData.education.map((edu) => (
                <div key={edu.school} className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <p className="text-primary font-medium">{edu.year}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Social Links */}
          <motion.div {...fade(0.4)} className="flex justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/juanreyes1212" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/juanreyes" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Resume;
