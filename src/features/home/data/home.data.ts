import { homeClientsData } from "./clients.data";
import { homeCtaData } from "./cta.data";
import { homeFaqData } from "./faq.data";
import { homeHeroData } from "./hero.data";
import { homeProcessData } from "./process.data";
import { homeServicesPreviewData } from "./services-preview.data";
import { homeStatisticsData } from "./statistics.data";
import { homeTechnologiesData } from "./technologies.data";
import { homeTestimonialsData } from "./testimonials.data";
import { homeWhyChooseUsData } from "./why-choose-us.data";
import type { HomeContent } from "@/features/home/types";

export const homeData: HomeContent = {
  hero: homeHeroData,
  clients: homeClientsData,
  servicesPreview: homeServicesPreviewData,
  technologies: homeTechnologiesData,
  whyChooseUs: homeWhyChooseUsData,
  process: homeProcessData,
  statistics: homeStatisticsData,
  testimonials: homeTestimonialsData,
  faq: homeFaqData,
  cta: homeCtaData,
};
