import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useI18n } from "@/shared/i18n";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import type { CompanyOffice } from "@/features/company/types";

export type CompanyOfficesSectionProps = {
  offices: CompanyOffice[];
};

export function CompanyOfficesSection({ offices }: CompanyOfficesSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <Stack gap="8">
        <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
          {t("company.offices.title")}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="5">
          {offices.map((office) => (
            <Card key={office.id} h="full">
              <Stack gap="3">
                <Text fontWeight="semibold">
                  {t(office.city)}, {t(office.country)}
                </Text>
                <Text color="fg.muted">{t(office.address)}</Text>
                <Text color="fg.muted">{office.phone}</Text>
                <Text color="fg.muted">{office.email}</Text>
                <Text color="fg.muted">{t(office.workingHours)}</Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
