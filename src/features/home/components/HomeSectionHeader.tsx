import { Heading, Stack, Text } from "@chakra-ui/react";
import { Badge } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { HomeSectionHeader as HomeSectionHeaderData } from "@/features/home/types";

export type HomeSectionHeaderProps = {
  align?: "start" | "center";
  header: HomeSectionHeaderData;
};

export function HomeSectionHeader({ align = "center", header }: HomeSectionHeaderProps) {
  const { t } = useI18n();

  return (
    <Stack
      align={align}
      gap="4"
      maxW="containerMd"
      mx={align === "center" ? "auto" : undefined}
      textAlign={align}
    >
      <Badge alignSelf={align === "center" ? "center" : "flex-start"}>{t(header.eyebrowKey)}</Badge>
      <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="tight">
        {t(header.titleKey)}
      </Heading>
      {header.descriptionKey ? (
        <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="relaxed">
          {t(header.descriptionKey)}
        </Text>
      ) : null}
    </Stack>
  );
}
