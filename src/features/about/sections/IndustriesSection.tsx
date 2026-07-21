import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { AboutSectionHeader } from "@/features/about/components";
import type { AboutContent } from "@/features/about/types";

export type IndustriesSectionProps = {
  data: AboutContent["industries"];
};

export function IndustriesSection({ data }: IndustriesSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="8">
        <AboutSectionHeader align="center" header={data.header} />
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="5">
          {data.items.map((industry) => (
            <Card key={industry.id} h="full" variant="glass">
              <Stack gap="3">
                <Heading as="h3" fontSize="xl">
                  {t(industry.title)}
                </Heading>
                <Text color="fg.muted" lineHeight="relaxed">
                  {t(industry.description)}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
