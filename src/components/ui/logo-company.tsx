
import { memo } from "react";

interface LogoCompanyProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
}

const LogoCompany = memo(({ size = "md", className = "" }: LogoCompanyProps) => {
  const sizeClasses = {
    sm: "w-25 h-25",
    md: "w-40 h-40", 
    lg: "w-50 h-50",
    xl: "w-60 h-60"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${sizeClasses[size]}`}>
        <img 
          src="/lovable-uploads/d94e1b20-0b59-4780-b234-09c04cff5b01.png"
          alt="Israel Coworking"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
});

LogoCompany.displayName = "LogoCompany";

export { LogoCompany };
