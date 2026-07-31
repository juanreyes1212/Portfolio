import { motion } from "framer-motion";
import { ArrowUpRight, Mail, ExternalLink, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const CTASection = () => {
  const prefersReducedMotion = useReducedMotion();
  const fadeProps = (delay = 0) =>
    prefersReducedMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
          viewport: { once: true },
        };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div {...fadeProps()} className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Build
            <br />
            <span className="text-gradient">Something Amazing?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, challenging projects,
            and innovative frontend solutions. Let's connect and explore how we can work together.
          </p>

          <motion.div
            {...fadeProps(0.2)}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="mailto:reyes1212@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download="Juan_Reyes_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            {...fadeProps(0.4)}
            className="pt-8 border-t border-border/50 mt-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm">Mesa, AZ</span>
              </div>
              <span className="hidden sm:block text-border" aria-hidden="true">|</span>
              <a
                href="mailto:reyes1212@gmail.com"
                className="text-sm hover:text-primary transition-colors flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4 text-primary" aria-hidden="true" />
                reyes1212@gmail.com
              </a>
              <span className="hidden sm:block text-border" aria-hidden="true">|</span>
              <a href="tel:+14804352155" className="text-sm hover:text-primary transition-colors">
                (480) 435-2155
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
