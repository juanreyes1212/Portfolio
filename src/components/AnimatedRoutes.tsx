import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Index from "@/pages/Index";
import Work from "@/pages/Work";
import WorkProject from "@/pages/WorkProject";
import Personal from "@/pages/Personal";
import PersonalProject from "@/pages/PersonalProject";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
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
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
