import { memo, useEffect, useState } from 'react';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { cn } from '@/lib/utils';

interface ImageLoadingProgressProps {
  images: string[];
  className?: string;
  showPercentage?: boolean;
  hideWhenComplete?: boolean;
  onComplete?: () => void;
}

const ImageLoadingProgress = memo(({ 
  images, 
  className,
  showPercentage = false,
  hideWhenComplete = true,
  onComplete
}: ImageLoadingProgressProps) => {
  const { progress, isAllLoaded, loadedCount, totalCount } = useImagePreloader(images, { priority: true });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isAllLoaded) {
      onComplete?.();
      
      if (hideWhenComplete) {
        // Fade out após completar
        setTimeout(() => setIsVisible(false), 500);
      }
    }
  }, [isAllLoaded, onComplete, hideWhenComplete]);

  if (!isVisible && hideWhenComplete && isAllLoaded) {
    return null;
  }

  return (
    <div 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-500",
        isAllLoaded && hideWhenComplete && "opacity-0 transform -translate-y-full",
        className
      )}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="font-medium">
            {isAllLoaded ? 'Carregamento concluído!' : 'Otimizando experiência...'}
          </span>
          
          {showPercentage && (
            <span className="tabular-nums">
              {Math.round(progress)}% ({loadedCount}/{totalCount})
            </span>
          )}
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-1 mt-2 overflow-hidden">
          <div 
            className={cn(
              "h-full rounded-full transition-all duration-300 ease-out",
              isAllLoaded 
                ? "bg-green-500" 
                : "bg-gradient-to-r from-blue-500 to-blue-600"
            )}
            style={{ 
              width: `${progress}%`,
              transform: isAllLoaded ? 'scale(1)' : 'scale(0.98)'
            }}
          />
        </div>
      </div>
    </div>
  );
});

ImageLoadingProgress.displayName = "ImageLoadingProgress";

export { ImageLoadingProgress };