// Centralized color mappings for badges and status indicators.
// All colors map to design-system semantic tokens defined in index.css.

export type ProjectStatus = "Live" | "In Development" | "Archived";

export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    "Live": "border-success/50 text-success bg-success/10",
    "In Development": "border-info/50 text-info bg-info/10",
    "Archived": "border-muted-foreground/50 text-muted-foreground bg-muted/10",
  };
  return colors[status] || colors["Archived"];
};

export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    "Architecture": "border-primary/50 text-primary bg-primary/10",
    "Performance": "border-success/50 text-success bg-success/10",
    "Leadership": "border-info/50 text-info bg-info/10",
    "TypeScript": "border-info/50 text-info bg-info/10",
    "Accessibility": "border-accent/50 text-accent bg-accent/10",
    "Migration": "border-warning/50 text-warning bg-warning/10",
    "Testing": "border-warning/50 text-warning bg-warning/10",
    "React": "border-info/50 text-info bg-info/10",
    "learnings": "border-info/50 text-info bg-info/10",
    "tutorials": "border-success/50 text-success bg-success/10",
  };
  return colors[category] || "border-accent/50 text-accent bg-accent/10";
};
