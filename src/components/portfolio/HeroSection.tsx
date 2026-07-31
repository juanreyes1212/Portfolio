import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const enter = (delay = 0, y = 30) =>
    prefersReducedMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  // Looping float animations are gated entirely behind reduced motion
  const floatAnim = (range: [number, number], duration: number) =>
    prefersReducedMotion
      ? {}
      : {
          animate: { y: [range[0], range[1], range[0]] },
          transition: { duration, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <motion.div {...enter(0, 20)}>
              <Badge
                variant="outline"
                className="border-primary/50 text-primary bg-primary/5 px-4 py-1.5 text-sm font-medium"
              >
                Senior Frontend Developer
              </Badge>
            </motion.div>

            <motion.h1
              {...enter(0.1)}
              className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              Hi, I'm{" "}
              <span className="text-gradient glow-text">Juan</span>
              <br />
              <span className="font-serif italic text-foreground/90">Reyes</span>
            </motion.h1>

            <motion.p
              {...enter(0.2)}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              A results-oriented software professional with over{" "}
              <span className="text-foreground font-medium">7 years</span> of experience
              leading the design and development of high-impact web applications.
            </motion.p>

            <motion.div
              {...enter(0.3)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group" asChild>
                <Link to="/work">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resume">View Resume</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Abstract Visual */}
          <motion.div
            {...(prefersReducedMotion
              ? { initial: false }
              : {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.8, delay: 0.3 },
                })}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-border/30" aria-hidden="true" />
              <div className="absolute inset-8 rounded-full border border-border/20" aria-hidden="true" />
              <div className="absolute inset-16 rounded-full border border-primary/20" aria-hidden="true" />

              {/* Glowing orb */}
              <motion.div
                {...(prefersReducedMotion
                  ? {}
                  : {
                      animate: { scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] },
                      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    })}
                className="absolute inset-24 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-2xl"
                aria-hidden="true"
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-7xl font-bold text-gradient">7+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Years</div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div {...floatAnim([-10, 10], 6)} className="absolute top-8 right-12 glass px-4 py-2 rounded-full">
                <span className="text-sm font-medium">React.js</span>
              </motion.div>

              <motion.div {...floatAnim([10, -10], 5)} className="absolute bottom-16 left-4 glass px-4 py-2 rounded-full">
                <span className="text-sm font-medium">TypeScript</span>
              </motion.div>

              <motion.div {...floatAnim([-5, 15], 7)} className="absolute bottom-32 right-0 glass px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Vue.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
