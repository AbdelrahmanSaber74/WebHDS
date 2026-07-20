import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useI18n } from "@/shared/i18n";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import type { CompanyStatistic } from "@/features/company/types";

export type CompanyStatsSectionProps = {
  statistics: CompanyStatistic[];
};

export function CompanyStatsSection({ statistics }: CompanyStatsSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer bg="bg.subtle">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="5">
        {statistics.map((statistic) => (
          <Card key={statistic.id} h="full">
            <Stack gap="2">
              <Heading as="h3" fontSize="3xl">
                {statistic.value}
                {statistic.suffix ? t(statistic.suffix) : null}
              </Heading>
              <Text color="fg.muted">{t(statistic.label)}</Text>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </SectionContainer>
  );
}
