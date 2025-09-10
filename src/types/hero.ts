
export interface CTAButton {
  onClick: () => void;
  className: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  ariaLabel: string;
  variant?: "default" | "outline";
  hasArrow?: boolean;
}

export interface HeroFloatingElement {
  position: string;
  content: {
    value: string;
    label: string;
  };
  delay?: string;
  maxWidth?: string;
}

export interface HeroBackgroundElement {
  position: string;
  size: string;
  opacity: string;
  blur: string;
  delay?: string;
}
