import { SimpleGrid, Stat } from "@chakra-ui/react";
import { Section } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";

export type StatisticsSectionProps = {
  data: HomeContent["statistics"];
};

export function StatisticsSection({ data }: StatisticsSectionProps) {
  const { t } = useI18n();

  return (
    <Section spacing="compact">
      <HomeSectionHeader header={data.header} />
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="5" mt="10">
        {data.items.map((item) => (
          <Card key={item.id} textAlign="center" variant="glass">
            <Stat.Root>
              <Stat.ValueText color="brand.primary" fontSize="4xl" fontWeight="bold">
                {item.value}
              </Stat.ValueText>
              <Stat.Label color="fg.muted">{t(item.labelKey)}</Stat.Label>
            </Stat.Root>
          </Card>
        ))}
      </SimpleGrid>
    </Section>
  );
}
