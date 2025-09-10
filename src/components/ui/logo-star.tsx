
import { memo } from "react";

interface LogoStarProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const LogoStar = memo(({ size = "md", className = "" }: LogoStarProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
          fill="url(#starGradient)"
          stroke="hsl(var(--brand-gold))"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--brand-pink))" />
            <stop offset="50%" stopColor="hsl(var(--brand-gold))" />
            <stop offset="100%" stopColor="hsl(var(--brand-red))" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

LogoStar.displayName = "LogoStar";

export { LogoStar };
