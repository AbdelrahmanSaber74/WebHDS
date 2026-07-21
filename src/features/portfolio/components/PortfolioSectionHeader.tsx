import { Heading, Stack, Text } from "@chakra-ui/react";
import { Badge } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";

export type PortfolioSectionHeaderProps = {
  align?: "start" | "center";
  description: string;
  eyebrow: string;
  title: string;
};

export function PortfolioSectionHeader({
  align = "center",
  description,
  eyebrow,
  title,
}: PortfolioSectionHeaderProps) {
  const { t } = useI18n();

  return (
    <Stack
      align={align}
      gap="4"
      maxW="containerMd"
      mx={align === "center" ? "auto" : undefined}
      textAlign={align}
    >
      <Badge alignSelf={align === "center" ? "center" : "flex-start"}>{t(eyebrow)}</Badge>
      <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="tight">
        {t(title)}
      </Heading>
      <Text color="fg.muted" fontSize={{ base: "md", md: "lg" }} lineHeight="relaxed">
        {t(description)}
      </Text>
    </Stack>
  );
}
