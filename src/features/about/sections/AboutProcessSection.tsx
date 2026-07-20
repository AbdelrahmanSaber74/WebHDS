import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { AboutSectionHeader } from "@/features/about/components";
import type { AboutContent } from "@/features/about/types";

export type AboutProcessSectionProps = {
  data: AboutContent["process"];
};

export function AboutProcessSection({ data }: AboutProcessSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <Stack gap="8">
        <AboutSectionHeader header={data.header} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="5">
          {data.steps.map((step, index) => (
            <Card key={step.id} h="full">
              <Stack gap="3">
                <Text color="brand.primary" fontWeight="bold">
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <Heading as="h3" fontSize="xl">
                  {t(step.title)}
                </Heading>
                <Text color="fg.muted" lineHeight="relaxed">
                  {t(step.description)}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
