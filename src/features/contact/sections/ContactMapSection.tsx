import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MapPinned } from "lucide-react";
import { SectionContainer } from "@/shared/layouts";
import { Button, Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { CompanyOffice } from "@/features/company/types";
import { ContactSectionHeader } from "@/features/contact/components";
import type { ContactContent } from "@/features/contact/types";

export type ContactMapSectionProps = {
  data: ContactContent["map"];
  offices: CompanyOffice[];
};

export function ContactMapSection({ data, offices }: ContactMapSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <SimpleGrid alignItems="center" columns={{ base: 1, lg: 2 }} gap="10">
        <ContactSectionHeader header={data} />
        <Card minH={{ base: "72", md: "96" }} p="0" position="relative" variant="feature">
          <Box
            aria-hidden="true"
            bg="linear-gradient(135deg, token(colors.brand.soft), transparent 45%, token(colors.accent.soft))"
            inset="0"
            position="absolute"
          />
          <Stack gap="5" h="full" justify="center" p={{ base: "6", md: "10" }} position="relative">
            <Box
              alignItems="center"
              bg="bg.surface"
              border="1px solid"
              borderColor="border.subtle"
              color="brand.solid"
              display="inline-flex"
              h="12"
              justifyContent="center"
              rounded="lg"
              w="12"
            >
              <MapPinned aria-hidden="true" size={24} />
            </Box>
            <Stack gap="2">
              <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }}>
                {t(data.title)}
              </Heading>
              <Text color="fg.muted" lineHeight="relaxed">
                {t(data.description ?? "")}
              </Text>
            </Stack>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="3">
              {offices.map((office) => (
                <Card key={office.id} bg="bg.surface" p="4" variant="outline">
                  <Text fontWeight="bold">
                    {t(office.city)}, {t(office.country)}
                  </Text>
                  <Text color="fg.subtle" fontSize="sm">
                    {office.coordinates.latitude}, {office.coordinates.longitude}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
            {data.action ? (
              <Button asChild alignSelf="flex-start" variant="outline">
                <a href={data.action.href} rel="noreferrer" target="_blank">
                  {t(data.action.label)}
                </a>
              </Button>
            ) : null}
          </Stack>
        </Card>
      </SimpleGrid>
    </SectionContainer>
  );
}
