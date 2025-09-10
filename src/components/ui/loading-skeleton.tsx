import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
  variant?: 'default' | 'card' | 'text' | 'avatar' | 'image';
}

const Skeleton = ({ className, lines = 1, variant = 'default', ...props }: SkeletonProps) => {
  const getSkeletonClasses = () => {
    switch (variant) {
      case 'card':
        return 'h-32 w-full rounded-lg';
      case 'text':
        return 'h-4 w-full rounded';
      case 'avatar':
        return 'h-12 w-12 rounded-full';
      case 'image':
        return 'h-48 w-full rounded-lg';
      default:
        return 'h-4 w-full rounded';
    }
  };

  if (lines > 1) {
    return (
      <div className={cn('space-y-2', className)} {...props}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'loading-skeleton',
              getSkeletonClasses(),
              i === lines - 1 && 'w-4/5' // Last line shorter
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn('loading-skeleton', getSkeletonClasses(), className)}
      {...props}
    />
  );
};

export { Skeleton };