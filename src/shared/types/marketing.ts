import type { ReactNode } from "react";

export type LinkAction = {
  href: string;
  label: string;
  external?: boolean;
  icon?: ReactNode;
};

export type BreadcrumbItem = {
  href?: string;
  label: string;
};

export type MarketingHeroContent = {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string;
  backgroundImageAlt?: string;
  primaryAction?: LinkAction;
  secondaryAction?: LinkAction;
};

export type CtaBlockContent = {
  title: string;
  description?: string;
  primaryAction?: LinkAction;
  secondaryAction?: LinkAction;
  illustration?: ReactNode;
};

export type EmptyStateContent = {
  title: string;
  description?: string;
  action?: LinkAction;
  icon?: ReactNode;
};
