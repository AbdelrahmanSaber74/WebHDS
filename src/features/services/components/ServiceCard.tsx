import { Box, Heading, HStack, Icon, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { SERVICES_BASE_PATH } from "@/features/services/constants";
import type { Service } from "@/features/services/types";
import { useI18n } from "@/shared/i18n";
import { Card } from "@/shared/ui";

export type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useI18n();
  const ServiceIcon = service.icon;

  return (
    <LinkBox asChild>
      <Card
        h="full"
        role="group"
        transition="transform var(--hds-transition-normal), box-shadow var(--hds-transition-normal), border-color var(--hds-transition-normal)"
        _hover={{
          borderColor: "brand.primary",
          boxShadow: "lift",
          transform: "translateY(-5px)",
          _after: {
            content: '""',
            position: "absolute",
            insetInline: 0,
            bottom: "-7px",
            height: "7px",
          },
        }}
      >
        <Stack gap="5" h="full">
          <Box
            alignItems="center"
            bg="brand.soft"
            color="brand.primary"
            display="inline-flex"
            h="12"
            justifyContent="center"
            rounded="panel"
            transition="transform var(--hds-transition-normal), background var(--hds-transition-normal)"
            w="12"
            _groupHover={{ transform: "scale(1.06)" }}
          >
            <Icon as={ServiceIcon} boxSize="iconLg" />
          </Box>
          <Stack gap="3" flex="1">
            <Heading as="h3" fontSize="xl" lineHeight="snug">
              <LinkOverlay href={`${SERVICES_BASE_PATH}/${service.slug}`}>
                {t(service.title)}
              </LinkOverlay>
            </Heading>
            <Text color="fg.muted" lineHeight="relaxed">
              {t(service.shortDescription)}
            </Text>
          </Stack>
          <HStack color="brand.primary" fontWeight="semibold" gap="2">
            <Text>{t("services.card.readMore")}</Text>
            <ArrowRight aria-hidden="true" size={18} />
          </HStack>
        </Stack>
      </Card>
    </LinkBox>
  );
}
