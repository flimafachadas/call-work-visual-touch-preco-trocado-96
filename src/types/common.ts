
import { LucideIcon } from "lucide-react";

export interface SocialMediaLink {
  href: string;
  icon: LucideIcon;
  bgColor: string;
  label: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  content: string | string[];
  label?: string;
  color?: string;
}

export interface NavigationLink {
  href: string;
  text: string;
}

export interface Certification {
  icon: LucideIcon;
  text: string;
  color: string;
}

export interface ServiceData {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface BrandColors {
  orange: string;
  red: string;
  green: string;
  blue: string;
  lightBlue: string;
  dark: string;
  light: string;
}
