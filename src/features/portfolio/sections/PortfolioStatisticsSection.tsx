import { SimpleGrid, Stack } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { AboutMetricCard } from "@/features/about/components";
import { PortfolioSectionHeader } from "@/features/portfolio/components";
import { useI18n } from "@/shared/i18n";
import type { PortfolioListingContent, PortfolioProject } from "@/features/portfolio/types";

export type PortfolioStatisticsSectionProps = {
  data: PortfolioListingContent["statistics"];
  projects: PortfolioProject[];
};

export function PortfolioStatisticsSection({ data, projects }: PortfolioStatisticsSectionProps) {
  const { t } = useI18n();
  const industries = new Set(projects.map((project) => project.industry)).size;
  const technologies = new Set(projects.flatMap((project) => project.technologies)).size;
  const featured = projects.filter((project) => project.featured).length;

  return (
    <SectionContainer>
      <Stack gap="8">
        <PortfolioSectionHeader
          align="center"
          description={data.description}
          eyebrow={data.eyebrow}
          title={data.title}
        />
        <SimpleGrid columns={{ base: 1, md: 4 }} gap="5">
          <AboutMetricCard
            label={t("portfolio.statistics.projects")}
            value={`${projects.length}`}
          />
          <AboutMetricCard label={t("portfolio.statistics.industries")} value={`${industries}`} />
          <AboutMetricCard
            label={t("portfolio.statistics.technologies")}
            value={`${technologies}`}
          />
          <AboutMetricCard label={t("portfolio.statistics.featured")} value={`${featured}`} />
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
