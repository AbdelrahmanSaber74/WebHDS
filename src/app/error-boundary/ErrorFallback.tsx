import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useCallback } from "react";
import { useI18n } from "@/shared/i18n";

export function ErrorFallback() {
  const { t } = useI18n();
  const handleReload = useCallback(() => window.location.reload(), []);

  return (
    <Box as="main" id="main-content" minH="100vh" display="grid" placeItems="center" px="6">
      <VStack gap="5" textAlign="center" maxW="lg" role="alert">
        <Text color="fg.muted" fontWeight="semibold">
          {t("errors.application.eyebrow")}
        </Text>
        <Heading size="2xl">{t("errors.application.title")}</Heading>
        <Text color="fg.muted">{t("errors.application.description")}</Text>
        <Button colorPalette="teal" onClick={handleReload}>
          {t("common.actions.reload")}
        </Button>
      </VStack>
    </Box>
  );
}
