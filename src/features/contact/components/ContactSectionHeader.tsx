import { Heading, Stack, Text } from "@chakra-ui/react";
import { Badge } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { SectionContent } from "@/shared/types";

export type ContactSectionHeaderProps = {
  align?: "start" | "center";
  header: SectionContent;
};

export function ContactSectionHeader({ align = "center", header }: ContactSectionHeaderProps) {
  const { t } = useI18n();

  return (
    <Stack
      align={align}
      gap="4"
      maxW="containerMd"
      mx={align === "center" ? "auto" : undefined}
      textAlign={align}
    >
      {header.eyebrow ? (
        <Badge alignSelf={align === "center" ? "center" : "flex-start"}>{t(header.eyebrow)}</Badge>
      ) : null}
      <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="tight">
        {t(header.title)}
      </Heading>
      {header.description ? (
        <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="relaxed">
          {t(header.description)}
        </Text>
      ) : null}
    </Stack>
  );
}
