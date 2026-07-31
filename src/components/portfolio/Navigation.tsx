import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useFocusTrap } from "@/hooks/useFocusTrap";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Personal", href: "/personal" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const mobileMenuRef = useFocusTrap(isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => location.pathname === href;

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: {} }
    : {};

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto max-w-6xl px-6 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-gradient">JR</span>
            <span className="text-foreground/80 font-light">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm transition-colors relative group ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" asChild>
              <a href="mailto:reyes1212@gmail.com">Get In Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-strong pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={prefersReducedMotion ? {} : { delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1 ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 border-t border-border">
                <Button size="lg" className="w-full" asChild>
                  <a href="mailto:reyes1212@gmail.com">Get In Touch</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
