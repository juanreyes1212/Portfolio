import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/portfolio/PageLayout";
import SEO from "@/components/SEO";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const NotFound = () => {
  const prefersReducedMotion = useReducedMotion();

  const animate = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0 };
  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 30 };

  return (
    <PageLayout>
      <SEO title="Page Not Found" noindex />
      <main id="main-content" className="flex min-h-[80vh] items-center justify-center px-6 pt-24">
        <div className="relative text-center">
          {/* Glow effect */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6 }}
            className="relative glass rounded-2xl p-12 max-w-md mx-auto"
          >
            <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
            <p className="text-xl text-foreground mb-2">Page not found</p>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild size="lg">
              <Link to="/">
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </main>
    </PageLayout>
  );
};

export default NotFound;
