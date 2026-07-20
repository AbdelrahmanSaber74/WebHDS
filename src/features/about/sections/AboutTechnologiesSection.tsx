import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { AboutSectionHeader } from "@/features/about/components";
import type { AboutSectionHeaderContent } from "@/features/about/types";
import type { CompanyTechnology } from "@/features/company/types";

export type AboutTechnologiesSectionProps = {
  header: AboutSectionHeaderContent;
  technologies: CompanyTechnology[];
};

export function AboutTechnologiesSection({ header, technologies }: AboutTechnologiesSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <Stack gap="8">
        <AboutSectionHeader align="center" header={header} />
        <SimpleGrid columns={{ base: 2, md: 4 }} gap="4">
          {technologies.map((technology) => (
            <Card key={technology.id} p="5" textAlign="center" variant="outline">
              <Stack gap="1">
                <Text fontWeight="bold">{technology.name}</Text>
                <Text color="fg.muted" fontSize="sm">
                  {t(technology.category)}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
