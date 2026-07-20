import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  meta?: string;
};

export type PageContent = {
  title: string;
  eyebrow: string;
  description: string;
  items: FeatureItem[];
};
