import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { AboutMetricCard, AboutSectionHeader } from "@/features/about/components";
import type { AboutStory } from "@/features/about/types";

export type CompanyStorySectionProps = {
  data: AboutStory;
};

export function CompanyStorySection({ data }: CompanyStorySectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <SimpleGrid columns={{ base: 1, lg: 12 }} gap={{ base: "8", lg: "10" }} alignItems="start">
        <Stack gap="6" gridColumn={{ lg: "span 5" }}>
          <AboutSectionHeader header={data.header} />
          <SimpleGrid columns={{ base: 1, sm: 3, lg: 1 }} gap="4">
            {data.proofPoints.map((item) => (
              <AboutMetricCard key={item.id} label={t(item.label)} value={t(item.value)} />
            ))}
          </SimpleGrid>
        </Stack>
        <Card gridColumn={{ lg: "span 7" }} p={{ base: "6", md: "8" }} variant="glass">
          <Stack gap="5">
            {data.paragraphs.map((paragraph) => (
              <Text
                key={paragraph}
                color="fg.muted"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="relaxed"
              >
                {t(paragraph)}
              </Text>
            ))}
          </Stack>
        </Card>
      </SimpleGrid>
    </SectionContainer>
  );
}
