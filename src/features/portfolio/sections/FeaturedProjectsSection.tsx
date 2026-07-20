import { SimpleGrid, Stack } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { PortfolioSectionHeader, ProjectCard } from "@/features/portfolio/components";
import type { PortfolioListingContent, PortfolioProject } from "@/features/portfolio/types";

export type FeaturedProjectsSectionProps = {
  data: PortfolioListingContent["featured"];
  projects: PortfolioProject[];
};

export function FeaturedProjectsSection({ data, projects }: FeaturedProjectsSectionProps) {
  return (
    <SectionContainer>
      <Stack gap="10">
        <PortfolioSectionHeader
          description={data.description}
          eyebrow={data.eyebrow}
          title={data.title}
        />
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap="5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} priority={index === 0} project={project} />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
