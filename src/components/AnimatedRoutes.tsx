import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import PageSkeleton from "./PageSkeleton";

const Index = lazy(() => import("@/pages/Index"));
const Work = lazy(() => import("@/pages/Work"));
const WorkProject = lazy(() => import("@/pages/WorkProject"));
const Personal = lazy(() => import("@/pages/Personal"));
const PersonalProject = lazy(() => import("@/pages/PersonalProject"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Resume = lazy(() => import("@/pages/Resume"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageSkeleton variant="default" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/work" element={<PageTransition skeleton="grid"><Work /></PageTransition>} />
          <Route path="/work/:slug" element={<PageTransition skeleton="detail"><WorkProject /></PageTransition>} />
          <Route path="/personal" element={<PageTransition skeleton="grid"><Personal /></PageTransition>} />
          <Route path="/personal/:slug" element={<PageTransition skeleton="detail"><PersonalProject /></PageTransition>} />
          <Route path="/blog" element={<PageTransition skeleton="grid"><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition skeleton="detail"><BlogPost /></PageTransition>} />
          <Route path="/resume" element={<PageTransition skeleton="resume"><Resume /></PageTransition>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
