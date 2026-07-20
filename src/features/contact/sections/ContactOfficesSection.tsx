import { SimpleGrid, Stack } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import type { CompanyOffice } from "@/features/company/types";
import { ContactSectionHeader, OfficeCard } from "@/features/contact/components";
import type { ContactContent } from "@/features/contact/types";

export type ContactOfficesSectionProps = {
  data: ContactContent["offices"];
  offices: CompanyOffice[];
};

export function ContactOfficesSection({ data, offices }: ContactOfficesSectionProps) {
  return (
    <SectionContainer bg="bg.subtle">
      <Stack gap="10">
        <ContactSectionHeader align="center" header={data} />
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="5">
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
