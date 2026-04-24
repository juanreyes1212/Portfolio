import { motion } from "framer-motion";
import BackLink from "./BackLink";

interface PageHeaderProps {
  backTo: string;
  backLabel: string;
  title: string;
  titleHighlight: string;
  description: string;
}

const PageHeader = ({ backTo, backLabel, title, titleHighlight, description }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <BackLink to={backTo} label={backLabel} />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        {title} <span className="text-gradient">{titleHighlight}</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl">
        {description}
      </p>
    </motion.div>
  );
};

export default PageHeader;
