import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { AboutSectionHeader } from "@/features/about/components";
import type { AboutSectionHeaderContent } from "@/features/about/types";
import type { CompanyValue } from "@/features/company/types";

export type CoreValuesSectionProps = {
  header: AboutSectionHeaderContent;
  values: CompanyValue[];
};

export function CoreValuesSection({ header, values }: CoreValuesSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <Stack gap="8">
        <AboutSectionHeader align="center" header={header} />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="5">
          {values.map((value) => (
            <Card key={value.id} h="full">
              <Stack gap="3">
                <Heading as="h3" fontSize="2xl">
                  {t(value.title)}
                </Heading>
                <Text color="fg.muted" lineHeight="relaxed">
                  {t(value.description)}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
