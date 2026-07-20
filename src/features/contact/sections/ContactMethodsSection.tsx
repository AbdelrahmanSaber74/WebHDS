import { SimpleGrid, Stack } from "@chakra-ui/react";
import { SectionContainer } from "@/shared/layouts";
import type { CompanyContact } from "@/features/company/types";
import { ContactMethodCard, ContactSectionHeader } from "@/features/contact/components";
import type { ContactContent } from "@/features/contact/types";

export type ContactMethodsSectionProps = {
  contact: CompanyContact;
  data: ContactContent["methods"];
};

function getChannel(contact: CompanyContact, id: ContactContent["methods"]["items"][number]["id"]) {
  if (id === "sales") return contact.sales;
  if (id === "support") return contact.support;
  if (id === "phone") return contact.phones[0];
  return contact.emails[0];
}

export function ContactMethodsSection({ contact, data }: ContactMethodsSectionProps) {
  return (
    <SectionContainer>
      <Stack gap="10">
        <ContactSectionHeader align="center" header={data} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="5">
          {data.items.map((method) => (
            <ContactMethodCard
              key={method.id}
              channel={getChannel(contact, method.id)}
              method={method}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
