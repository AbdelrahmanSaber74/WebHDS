import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { ServiceProcessStep } from "@/features/services/types";
import { useI18n } from "@/shared/i18n";
import { Card } from "@/shared/ui";

export type ProcessListProps = {
  steps: ServiceProcessStep[];
};

export function ProcessList({ steps }: ProcessListProps) {
  const { t } = useI18n();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="5">
      {steps.map((step, index) => (
        <Card key={step.id} h="full">
          <Stack gap="4">
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
  );
}
