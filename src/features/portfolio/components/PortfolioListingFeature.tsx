import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { usePortfolio } from "@/features/portfolio/hooks";
import {
  FeaturedProjectsSection,
  PortfolioCtaSection,
  PortfolioHeroSection,
  PortfolioStatisticsSection,
  ProjectsGridSection,
} from "@/features/portfolio/sections";
import type { PortfolioFilterState } from "@/features/portfolio/types";
import { useSeo } from "@/shared/hooks";

export function PortfolioListingFeature() {
  useSeo("portfolio");
  const [filters, setFilters] = useState<PortfolioFilterState>({});
  const { featuredProjects, filterOptions, listing, projects } = usePortfolio(filters);
  const { projects: allProjects } = usePortfolio();

  return (
    <Box as="main" id="main-content">
      <PortfolioHeroSection data={listing.hero} />
      <FeaturedProjectsSection data={listing.featured} projects={featuredProjects} />
      <ProjectsGridSection
        data={listing.grid}
        filterOptions={filterOptions}
        filters={filters}
        onFiltersChange={setFilters}
        projects={projects}
      />
      <PortfolioStatisticsSection data={listing.statistics} projects={allProjects} />
      <PortfolioCtaSection data={listing.cta} />
    </Box>
  );
}
