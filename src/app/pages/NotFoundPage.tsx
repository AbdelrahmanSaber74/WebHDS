import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router";
import { routesConfig } from "@/config";
import { useSeo } from "@/shared/hooks";
import { useI18n } from "@/shared/i18n";

export function NotFoundPage() {
  const { t } = useI18n();
  useSeo("notFound");

  return (
    <Box as="main" id="main-content" minH="100vh" display="grid" placeItems="center" px="6">
      <VStack gap="5" textAlign="center" maxW="lg">
        <Text color="fg.muted" fontWeight="semibold">
          {t("errors.notFound.eyebrow")}
        </Text>
        <Heading size="2xl">{t("errors.notFound.title")}</Heading>
        <Text color="fg.muted">{t("errors.notFound.description")}</Text>
        <Button asChild colorPalette="teal">
          <Link to={routesConfig.home.path}>{t("common.actions.backHome")}</Link>
        </Button>
      </VStack>
    </Box>
  );
}
