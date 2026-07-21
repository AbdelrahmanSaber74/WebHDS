import { Heading, Stack, Text } from "@chakra-ui/react";
import { Badge } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { HomeSectionHeader as HomeSectionHeaderData } from "@/features/home/types";

export type HomeSectionHeaderProps = {
  align?: "start" | "center";
  header: HomeSectionHeaderData;
};

export function HomeSectionHeader({ header }: HomeSectionHeaderProps) {
  const { t } = useI18n();
  const descriptionText = header.descriptionKey ? t(header.descriptionKey).trim() : "";

  return (
    <Stack align="center" gap="4" maxW="4xl" mx="auto" textAlign="center" w="full" mt="0" mb="0">
      <Badge alignSelf="center" textAlign="center">
        {t(header.eyebrowKey)}
      </Badge>
      <Heading
        as="h2"
        m="0"
        w="full"
        textAlign="center"
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
        lineHeight="1.15"
        fontWeight="extrabold"
        className="hds-gradient-text"
        letterSpacing="-0.02em"
        py="1"
        px="1"
      >
        {t(header.titleKey)}
      </Heading>
      {descriptionText ? (
        <Text
          color="fg.muted"
          fontSize={{ base: "md", md: "lg" }}
          lineHeight="relaxed"
          maxW="2xl"
          mx="auto"
          m="0"
          mt="1.5"
          w="full"
          textAlign="center"
        >
          {descriptionText}
        </Text>
      ) : null}
    </Stack>
  );
}
