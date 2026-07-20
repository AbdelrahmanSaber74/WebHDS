import { Box, Heading, Stack, Text, chakra } from "@chakra-ui/react";
import { MapPin } from "lucide-react";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { CompanyOffice } from "@/features/company/types";

export type OfficeCardProps = {
  office: CompanyOffice;
};

export function OfficeCard({ office }: OfficeCardProps) {
  const { t } = useI18n();

  return (
    <Card as="article" h="full" p="6" variant="feature">
      <Stack gap="4">
        <Box
          alignItems="center"
          aria-hidden="true"
          bg="accent.soft"
          color="accent.solid"
          display="inline-flex"
          h="11"
          justifyContent="center"
          rounded="lg"
          w="11"
        >
          <MapPin size={22} />
        </Box>
        <Stack gap="2">
          <Heading as="h3" fontSize="xl">
            {t(office.city)}, {t(office.country)}
          </Heading>
          <Text color="fg.muted" lineHeight="relaxed">
            {t(office.address)}
          </Text>
          <Text color="fg.subtle" fontSize="sm">
            {t(office.workingHours)}
          </Text>
        </Stack>
        <Stack gap="1" fontWeight="semibold">
          <chakra.a color="brand.solid" href={`mailto:${office.email}`}>
            {office.email}
          </chakra.a>
          <chakra.a color="brand.solid" href={`tel:${office.phone.replace(/\s/g, "")}`}>
            {office.phone}
          </chakra.a>
        </Stack>
      </Stack>
    </Card>
  );
}
