import { seoConfig } from "@/config";
import { portfolioListingData, portfolioProjectsData } from "@/features/portfolio/data";
import type { PortfolioListingContent, PortfolioProject } from "@/features/portfolio/types";
import { createLocalContentRepository } from "@/lib/content";

export type PortfolioContent = {
  listing: PortfolioListingContent;
  projects: PortfolioProject[];
};

export const portfolioContentRepository = createLocalContentRepository({
  content: {
    listing: portfolioListingData,
    projects: portfolioProjectsData,
  } satisfies PortfolioContent,
  metadata: seoConfig.portfolio,
});

export type PortfolioContentRepository = typeof portfolioContentRepository;
