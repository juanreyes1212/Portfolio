import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import PageSkeleton, { type SkeletonVariant } from "./PageSkeleton";

interface PageTransitionProps {
  children: React.ReactNode;
  skeleton?: SkeletonVariant;
}

const PageTransition = ({ children, skeleton = "default" }: PageTransitionProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowSkeleton(false);
      return;
    }
    const timer = setTimeout(() => setShowSkeleton(false), 150);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {showSkeleton ? <PageSkeleton variant={skeleton} /> : children}
    </motion.div>
  );
};

export default PageTransition;
