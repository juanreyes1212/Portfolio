import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BackLinkProps {
  to: string;
  label: string;
}

const BackLink = ({ to, label }: BackLinkProps) => {
  return (
    <Link 
      to={to} 
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      {label}
    </Link>
  );
};

export default BackLink;
