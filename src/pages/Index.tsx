import PageLayout from "@/components/portfolio/PageLayout";
import HeroSection from "@/components/portfolio/HeroSection";
import StatsBar from "@/components/portfolio/StatsBar";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import BlogSection from "@/components/portfolio/BlogSection";
import CTASection from "@/components/portfolio/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <PageLayout showSkipToContent>
      <SEO
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Juan Reyes",
          jobTitle: "Senior Frontend Developer",
          url: "https://juanreyes.dev",
          email: "reyes1212@gmail.com",
          telephone: "+1-480-435-2155",
          address: { "@type": "PostalAddress", addressLocality: "Mesa", addressRegion: "AZ", addressCountry: "US" },
          sameAs: ["https://github.com/juanreyes1212", "https://linkedin.com/in/juanreyes"],
          knowsAbout: ["React.js", "Vue.js", "TypeScript", "Frontend Development", "Design Systems"],
        }}
      />
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <CTASection />
      </main>
    </PageLayout>
  );
};

export default Index;
