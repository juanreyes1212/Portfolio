import { motion, type MotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ElementType, ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  as?: "div" | "section" | "article";
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  /** Use whileInView (true) or animate-on-mount (false). Defaults to true. */
  inView?: boolean;
}

/**
 * Wrapper that fades + slides content in, but respects prefers-reduced-motion.
 * When reduced motion is preferred, content renders immediately with no transform.
 */
const FadeInOnScroll = ({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 0.5,
  y = 30,
  inView = true,
}: FadeInOnScrollProps) => {
  const prefersReducedMotion = useReducedMotion();

  const Comp = (motion[as] as unknown) as ElementType;

  const motionProps: MotionProps = prefersReducedMotion
    ? { initial: false }
    : inView
      ? {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration, delay },
        }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration, delay },
        };

  return (
    <Comp className={className} {...motionProps}>
      {children}
    </Comp>
  );
};

export default FadeInOnScroll;
