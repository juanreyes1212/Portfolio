import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "instant" : "smooth",
      });
    }
  }, [pathname, prefersReducedMotion]);

  return null;
};

export default ScrollToTop;
