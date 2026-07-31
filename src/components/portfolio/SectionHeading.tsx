import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  highlightStyle?: "gradient" | "serif-muted";
  className?: string;
}

/**
 * Standardized section heading used across landing sections and pages.
 * - `gradient`: highlighted word uses copper/gold text-gradient
 * - `serif-muted`: highlighted word uses italic serif muted style
 */
const SectionHeading = ({
  title,
  highlight,
  description,
  align = "left",
  size = "lg",
  highlightStyle = "gradient",
  className,
}: SectionHeadingProps) => {
  const sizeClasses =
    size === "lg"
      ? "text-3xl md:text-5xl"
      : "text-2xl md:text-3xl";

  const highlightClass =
    highlightStyle === "gradient"
      ? "text-gradient"
      : "font-serif italic text-muted-foreground";

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <h2 className={cn(sizeClasses, "font-bold mb-4")}>
        {title}
        {highlight && (
          <>
            {" "}
            <span className={highlightClass}>{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={cn(
          "text-muted-foreground",
          size === "lg" ? "text-lg" : "text-base",
          align === "center" && "max-w-2xl mx-auto",
          align === "left" && "max-w-xl",
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
