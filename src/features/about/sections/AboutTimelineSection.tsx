import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { AboutSectionHeader } from "@/features/about/components";
import type { AboutSectionHeaderContent } from "@/features/about/types";
import type { CompanyTimelineItem } from "@/features/company/types";

export type AboutTimelineSectionProps = {
  header: AboutSectionHeaderContent;
  timeline: CompanyTimelineItem[];
};

export function AboutTimelineSection({ header, timeline }: AboutTimelineSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="8">
        <AboutSectionHeader header={header} />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="5">
          {timeline.map((item) => (
            <Card key={item.id} h="full" variant="glass">
              <Stack gap="3">
                <Text color="brand.primary" fontWeight="bold">
                  {item.year}
                </Text>
                <Heading as="h3" fontSize="xl">
                  {t(item.title)}
                </Heading>
                <Text color="fg.muted" lineHeight="relaxed">
                  {t(item.description)}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
