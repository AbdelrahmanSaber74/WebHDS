import { Box, Grid, Stack, Stat } from "@chakra-ui/react";

import { HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";
import { Card } from "@/shared/ui";

export type StatisticsSectionProps = {
  data: HomeContent["statistics"];
};

export function StatisticsSection({ data }: StatisticsSectionProps) {
  const { t } = useI18n();
  const [lead, ...supporting] = data.items;

  return (
    <Section spacing="compact">
      <Grid templateColumns={{ base: "1fr", lg: "0.9fr 1.1fr" }} gap="6" alignItems="stretch">
        <Card p={{ base: "6", md: "8" }} variant="feature">
          <Stack gap="8" h="full" justify="space-between">
            <HomeSectionHeader align="start" header={data.header} />
            <Stat.Root>
              <Stat.ValueText
                color="brand.primary"
                fontSize={{ base: "5xl", md: "7xl" }}
                fontWeight="extrabold"
                lineHeight="none"
              >
                {lead.value}
              </Stat.ValueText>
              <Stat.Label color="fg.muted" fontSize="lg" mt="2">
                {t(lead.labelKey)}
              </Stat.Label>
            </Stat.Root>
          </Stack>
        </Card>
        <Grid templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }} gap="4">
          {supporting.map((item) => (
            <Card key={item.id} p="5" variant="glass">
              <Stack gap="5" h="full" justify="space-between">
                <Box bg="brand.soft" h="1" rounded="full" w="12" />
                <Stat.Root>
                  <Stat.ValueText
                    color="fg.default"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="bold"
                  >
                    {item.value}
                  </Stat.ValueText>
                  <Stat.Label color="fg.muted" lineHeight="relaxed">
                    {t(item.labelKey)}
                  </Stat.Label>
                </Stat.Root>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
}
