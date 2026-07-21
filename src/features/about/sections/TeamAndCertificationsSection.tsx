import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { AboutSectionHeader } from "@/features/about/components";
import type { AboutContent } from "@/features/about/types";
import type { CompanyCore } from "@/features/company/types";

export type TeamAndCertificationsSectionProps = {
  certificationsHeader: AboutContent["certifications"];
  company: CompanyCore;
  team: AboutContent["team"];
};

export function TeamAndCertificationsSection({
  certificationsHeader,
  company,
  team,
}: TeamAndCertificationsSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer bg="bg.subtle">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
        <Card h="full" variant="glass">
          <Stack gap="5">
            <AboutSectionHeader header={team.header} />
            <Text color="fg.muted" lineHeight="relaxed">
              {t(team.description)}
            </Text>
          </Stack>
        </Card>
        <Card h="full" variant="glass">
          <Stack gap="5">
            <AboutSectionHeader header={certificationsHeader} />
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="3">
              {company.certifications.map((certification) => (
                <Card key={certification} p="4" variant="outline">
                  <Heading as="h3" fontSize="md">
                    {t(certification)}
                  </Heading>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
        </Card>
      </SimpleGrid>
    </SectionContainer>
  );
}
