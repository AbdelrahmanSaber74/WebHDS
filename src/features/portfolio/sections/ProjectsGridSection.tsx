import { SimpleGrid, Stack } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { EmptyState } from "@/shared/ui";
import {
  PortfolioSectionHeader,
  ProjectCard,
} from "@/features/portfolio/components";
import type {
  PortfolioListingContent,
  PortfolioProject,
} from "@/features/portfolio/types";
import { useI18n } from "@/shared/i18n";

export type ProjectsGridSectionProps = {
  data: PortfolioListingContent["grid"];
  projects: PortfolioProject[];
};

export function ProjectsGridSection({
  data,
  projects,
}: ProjectsGridSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="8">
        <PortfolioSectionHeader
          align="center"
          description={data.description}
          eyebrow={data.eyebrow}
          title={data.title}
        />
        {projects.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="5">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </SimpleGrid>
        ) : (
          <EmptyState
            title={t("portfolio.empty.title")}
            description={t("portfolio.empty.description")}
          />
        )}
      </Stack>
    </SectionContainer>
  );
}
