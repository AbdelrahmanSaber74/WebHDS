import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useI18n } from "@/shared/i18n";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import type { CompanyCore } from "@/features/company/types";

export type CompanyOverviewSectionProps = {
  company: CompanyCore;
};

export function CompanyOverviewSection({ company }: CompanyOverviewSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap="6">
        <Stack gap="4">
          <Text color="brand.primary" fontWeight="semibold">
            {company.name}
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
            {t(company.tagline)}
          </Heading>
          <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="relaxed">
            {t(company.description)}
          </Text>
        </Stack>
        <Card>
          <Stack gap="4">
            <Text color="fg.muted">{t(company.mission)}</Text>
            <Text color="fg.muted">{t(company.vision)}</Text>
          </Stack>
        </Card>
      </SimpleGrid>
    </SectionContainer>
  );
}
