import type { LucideIcon } from "lucide-react";

export type TranslationKey = string;

export type AboutSectionHeaderContent = {
  eyebrow: TranslationKey;
  title: TranslationKey;
  description?: TranslationKey;
};

export type AboutHero = {
  badge: TranslationKey;
  title: TranslationKey;
  subtitle: TranslationKey;
  primaryLabel: TranslationKey;
  primaryHref: string;
  secondaryLabel: TranslationKey;
  secondaryHref: string;
  image: string;
  imageAlt: TranslationKey;
};

export type AboutStory = {
  header: AboutSectionHeaderContent;
  paragraphs: TranslationKey[];
  proofPoints: AboutProofPoint[];
};

export type AboutProofPoint = {
  id: string;
  label: TranslationKey;
  value: TranslationKey;
};

export type AboutPrinciple = {
  id: string;
  icon: LucideIcon;
  title: TranslationKey;
  description: TranslationKey;
};

export type AboutProcessStep = {
  id: string;
  title: TranslationKey;
  description: TranslationKey;
};

export type AboutIndustry = {
  id: string;
  title: TranslationKey;
  description: TranslationKey;
};

export type AboutTeamOverview = {
  header: AboutSectionHeaderContent;
  description: TranslationKey;
};

export type AboutCta = {
  title: TranslationKey;
  description: TranslationKey;
  primaryLabel: TranslationKey;
  primaryHref: string;
  secondaryLabel: TranslationKey;
  secondaryHref: string;
};

export type AboutContent = {
  hero: AboutHero;
  story: AboutStory;
  missionVision: AboutSectionHeaderContent;
  values: AboutSectionHeaderContent;
  whyChoose: {
    header: AboutSectionHeaderContent;
    items: AboutPrinciple[];
  };
  process: {
    header: AboutSectionHeaderContent;
    steps: AboutProcessStep[];
  };
  timeline: AboutSectionHeaderContent;
  technologies: AboutSectionHeaderContent;
  industries: {
    header: AboutSectionHeaderContent;
    items: AboutIndustry[];
  };
  statistics: AboutSectionHeaderContent;
  team: AboutTeamOverview;
  certifications: AboutSectionHeaderContent;
  cta: AboutCta;
};
