import { portfolioCatalogService } from "@/features/portfolio/services";
import type { PortfolioFilterState } from "@/features/portfolio/types";

export function usePortfolio(filters?: PortfolioFilterState) {
  return {
    featuredProjects: portfolioCatalogService.getFeaturedProjects(),
    filterOptions: portfolioCatalogService.getFilterOptions(),
    listing: portfolioCatalogService.getListingContent(),
    projects: portfolioCatalogService.filterProjects(filters),
  };
}
