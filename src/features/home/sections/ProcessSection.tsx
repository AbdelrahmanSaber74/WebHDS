import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import { Section } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { HomeSectionHeader } from "@/features/home/components";
import type { HomeContent } from "@/features/home/types";

export type ProcessSectionProps = {
  data: HomeContent["process"];
};

export function ProcessSection({ data }: ProcessSectionProps) {
  const { t } = useI18n();

  return (
    <Section bg="bg.subtle">
      <HomeSectionHeader header={data.header} />
      <Grid templateColumns={{ base: "1fr", lg: "repeat(6, 1fr)" }} gap="4" mt="12">
        {data.items.map((step, index) => (
          <GridItem key={step.id} colSpan={{ base: 1, lg: index % 2 === 0 ? 2 : 1 }}>
            <Card h="full" variant="outline">
              <VStack align="start" gap="4">
                <Box color="brand.primary" fontSize="sm" fontWeight="bold">
                  {String(index + 1).padStart(2, "0")}
                </Box>
                <Heading as="h3" size="md">
                  {t(step.titleKey)}
                </Heading>
                <Text color="fg.muted" lineHeight="relaxed">
                  {t(step.descriptionKey)}
                </Text>
              </VStack>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
}
