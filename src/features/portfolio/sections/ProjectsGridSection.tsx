import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { EmptyState } from "@/shared/ui";
import {
  PortfolioFilters,
  PortfolioSectionHeader,
  ProjectCard,
} from "@/features/portfolio/components";
import type { PortfolioFilterOptions } from "@/features/portfolio/components";
import type {
  PortfolioFilterState as PortfolioFilterStateModel,
  PortfolioListingContent,
  PortfolioProject,
} from "@/features/portfolio/types";
import { useI18n } from "@/shared/i18n";

export type ProjectsGridSectionProps = {
  data: PortfolioListingContent["grid"];
  filters: PortfolioFilterStateModel;
  filterOptions: PortfolioFilterOptions;
  onFiltersChange: (filters: PortfolioFilterStateModel) => void;
  projects: PortfolioProject[];
};

export function ProjectsGridSection({
  data,
  filterOptions,
  filters,
  onFiltersChange,
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
        <PortfolioFilters filters={filters} onChange={onFiltersChange} options={filterOptions} />
        <Text color="fg.muted" fontSize="sm">
          {t("portfolio.grid.resultCount").replace("{count}", String(projects.length))}
        </Text>
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
