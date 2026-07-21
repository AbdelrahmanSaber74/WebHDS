import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { AboutSectionHeader } from "@/features/about/components";
import type { AboutSectionHeaderContent } from "@/features/about/types";
import type { CompanyCore } from "@/features/company/types";

export type MissionVisionSectionProps = {
  company: CompanyCore;
  header: AboutSectionHeaderContent;
};

export function MissionVisionSection({ company, header }: MissionVisionSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="8">
        <AboutSectionHeader align="center" header={header} />
        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="5">
          <Card h="full">
            <Stack gap="3">
              <Heading as="h3" fontSize="2xl">
                {t("about.mission.card.title")}
              </Heading>
              <Text color="fg.muted" lineHeight="relaxed">
                {t(company.mission)}
              </Text>
            </Stack>
          </Card>
          <Card h="full">
            <Stack gap="3">
              <Heading as="h3" fontSize="2xl">
                {t("about.vision.card.title")}
              </Heading>
              <Text color="fg.muted" lineHeight="relaxed">
                {t(company.vision)}
              </Text>
            </Stack>
          </Card>
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
