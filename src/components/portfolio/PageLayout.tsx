import Navigation from "./Navigation";
import Footer from "./Footer";
import SkipToContent from "@/components/SkipToContent";

interface PageLayoutProps {
  children: React.ReactNode;
  /** Deprecated — skip link now renders on every page. Kept for backwards compat. */
  showSkipToContent?: boolean;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SkipToContent />

      {/* Background effects */}
      <div className="fixed inset-0 bg-noise pointer-events-none opacity-50" aria-hidden="true" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-glow pointer-events-none" aria-hidden="true" />

      <Navigation />

      {children}

      <Footer />
    </div>
  );
};

export default PageLayout;
