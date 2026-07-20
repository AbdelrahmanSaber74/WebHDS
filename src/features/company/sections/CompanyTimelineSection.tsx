import { Heading, Stack, Text } from "@chakra-ui/react";
import { useI18n } from "@/shared/i18n";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import type { CompanyTimelineItem } from "@/features/company/types";

export type CompanyTimelineSectionProps = {
  timeline: CompanyTimelineItem[];
};

export function CompanyTimelineSection({ timeline }: CompanyTimelineSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="8">
        <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
          {t("company.timeline.title")}
        </Heading>
        <Stack gap="4">
          {timeline.map((item) => (
            <Card key={item.id}>
              <Stack gap="2">
                <Text color="brand.primary" fontWeight="semibold">
                  {item.year}
                </Text>
                <Heading as="h3" fontSize="xl">
                  {t(item.title)}
                </Heading>
                <Text color="fg.muted">{t(item.description)}</Text>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </SectionContainer>
  );
}
