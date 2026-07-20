import { SimpleGrid, Stack } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { useI18n } from "@/shared/i18n";
import { AboutMetricCard, AboutSectionHeader } from "@/features/about/components";
import type { AboutSectionHeaderContent } from "@/features/about/types";
import type { CompanyStatistic } from "@/features/company/types";

export type AboutStatisticsSectionProps = {
  header: AboutSectionHeaderContent;
  statistics: CompanyStatistic[];
};

export function AboutStatisticsSection({ header, statistics }: AboutStatisticsSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <Stack gap="8">
        <AboutSectionHeader align="center" header={header} />
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="5">
          {statistics.map((statistic) => (
            <AboutMetricCard
              key={statistic.id}
              label={t(statistic.label)}
              value={`${statistic.value}${statistic.suffix ? t(statistic.suffix) : ""}`}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
