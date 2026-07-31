export type SkeletonVariant = "default" | "grid" | "detail" | "resume";

const DefaultSkeleton = () => (
  <div className="container mx-auto max-w-4xl space-y-6">
    <div className="h-4 w-24 bg-muted rounded" />
    <div className="h-10 w-3/4 bg-muted rounded" />
    <div className="h-6 w-1/2 bg-muted rounded" />
    <div className="h-64 w-full bg-muted rounded-2xl mt-8" />
    <div className="space-y-3 mt-8">
      <div className="h-4 w-full bg-muted rounded" />
      <div className="h-4 w-5/6 bg-muted rounded" />
      <div className="h-4 w-4/6 bg-muted rounded" />
    </div>
  </div>
);

const GridSkeleton = () => (
  <div className="container mx-auto max-w-6xl space-y-8">
    <div className="space-y-3">
      <div className="h-4 w-24 bg-muted rounded" />
      <div className="h-10 w-1/2 bg-muted rounded" />
      <div className="h-5 w-2/3 bg-muted rounded" />
    </div>
    <div className="h-10 w-64 bg-muted rounded mt-4" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-muted/50 rounded-2xl overflow-hidden">
          <div className="h-40 bg-muted" />
          <div className="p-6 space-y-3">
            <div className="h-4 w-20 bg-muted rounded" />
            <div className="h-5 w-3/4 bg-muted rounded" />
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-2/3 bg-muted rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DetailSkeleton = () => (
  <div className="container mx-auto max-w-4xl space-y-6">
    <div className="h-4 w-24 bg-muted rounded" />
    <div className="h-5 w-20 bg-muted rounded-full" />
    <div className="h-12 w-3/4 bg-muted rounded" />
    <div className="flex gap-4">
      <div className="h-4 w-24 bg-muted rounded" />
      <div className="h-4 w-20 bg-muted rounded" />
      <div className="h-4 w-16 bg-muted rounded" />
    </div>
    <div className="h-64 md:h-96 w-full bg-muted rounded-2xl mt-4" />
    <div className="space-y-4 mt-8">
      <div className="h-5 w-full bg-muted rounded" />
      <div className="h-5 w-5/6 bg-muted rounded" />
      <div className="h-5 w-full bg-muted rounded" />
      <div className="h-5 w-4/6 bg-muted rounded" />
      <div className="h-5 w-full bg-muted rounded" />
    </div>
  </div>
);

const ResumeSkeleton = () => (
  <div className="container mx-auto max-w-4xl space-y-8">
    <div className="space-y-3">
      <div className="h-4 w-24 bg-muted rounded" />
      <div className="h-10 w-1/3 bg-muted rounded" />
    </div>
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="bg-muted/50 rounded-2xl p-6 space-y-3">
        <div className="h-6 w-1/3 bg-muted rounded" />
        <div className="h-4 w-1/2 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />
      </div>
    ))}
  </div>
);

const skeletonMap: Record<SkeletonVariant, React.FC> = {
  default: DefaultSkeleton,
  grid: GridSkeleton,
  detail: DetailSkeleton,
  resume: ResumeSkeleton,
};

const PageSkeleton = ({ variant = "default" }: { variant?: SkeletonVariant }) => {
  const Skeleton = skeletonMap[variant];
  return (
    <div className="pt-32 pb-24 px-6 animate-pulse">
      <Skeleton />
    </div>
  );
};

export default PageSkeleton;
