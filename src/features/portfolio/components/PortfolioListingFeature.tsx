import { Box } from "@chakra-ui/react";
import { usePortfolio } from "@/features/portfolio/hooks";
import {
  FeaturedProjectsSection,
  PortfolioCtaSection,
  PortfolioHeroSection,
  PortfolioStatisticsSection,
  ProjectsGridSection,
} from "@/features/portfolio/sections";
import { useSeo } from "@/shared/hooks";

export function PortfolioListingFeature() {
  useSeo("portfolio");
  const { featuredProjects, listing, projects } = usePortfolio();

  return (
    <Box as="main" id="main-content">
      <PortfolioHeroSection data={listing.hero} />
      <FeaturedProjectsSection data={listing.featured} projects={featuredProjects} />
      <ProjectsGridSection data={listing.grid} projects={projects} />
      <PortfolioStatisticsSection data={listing.statistics} projects={projects} />
      <PortfolioCtaSection data={listing.cta} />
    </Box>
  );
}
