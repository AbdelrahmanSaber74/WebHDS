import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
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
      <Stack gap={{ base: "8", lg: "12" }} align="stretch">
        {/* Top Section: Title & Description next to narrative story */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "8", lg: "16" }} alignItems="start">
          {/* Section Heading & Subtitle */}
          <AboutSectionHeader header={data.header} align="start" />

          {/* Narrative Paragraphs */}
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
        </SimpleGrid>

        {/* Bottom Section: Proof Points / Metric Cards arranged horizontally */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="5"
          pt="8"
          borderTop="1px solid"
          borderColor="border.subtle"
        >
          {data.proofPoints.map((item) => (
            <AboutMetricCard key={item.id} label={t(item.label)} value={t(item.value)} />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
