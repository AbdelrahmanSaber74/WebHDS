import { Box, Stack } from "@chakra-ui/react";

import { HomeSectionHeader } from "../components/HomeSectionHeader";
import type { HomeClient, HomeContent } from "@/features/home/types";
import { useI18n } from "@/shared/i18n";
import { Section } from "@/shared/layouts";

export type ClientsSectionProps = {
  data: HomeContent["clients"];
};

function LogoRail({ items, reverse = false }: { items: HomeClient[]; reverse?: boolean }) {
  const { t } = useI18n();
  const repeatedItems = [...items, ...items];

  return (
    <Box overflow="hidden" py="2">
      <Box
        animation={`${reverse ? "hds-marquee-reverse" : "hds-marquee"} 38s linear infinite`}
        display="flex"
        gap="5"
        minW="max-content"
        _hover={{ animationPlayState: "paused" }}
      >
        {repeatedItems.map((item, index) => (
          <Box
            key={`${item.id}-${index}`}
            alignItems="center"
            bg="bg.glass"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="border.subtle"
            display="inline-flex"
            justifyContent="center"
            minW={{ base: "36", md: "44" }}
            h={{ base: "14", md: "16" }}
            px="6"
            rounded="card"
            transition="all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            _hover={{
              borderColor: item.accent,
              transform: "translateY(-4px)",
              boxShadow: "sm",
            }}
          >
            {item.logoUrl ? (
              <img
                src={item.logoUrl}
                alt={t(item.labelKey)}
                style={{
                  maxHeight: "32px",
                  maxWidth: "85%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <Box
                color="fg.muted"
                fontWeight="bold"
                letterSpacing="tight"
                fontSize="sm"
                _groupHover={{ color: item.accent }}
              >
                {t(item.labelKey)}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function ClientsSection({ data }: ClientsSectionProps) {
  const firstRow = data.items.slice(0, Math.ceil(data.items.length / 2));
  const secondRow = data.items.slice(Math.ceil(data.items.length / 2));

  return (
    <Section spacing="compact">
      <Stack gap={{ base: "5", md: "6" }} align="stretch">
        {/* Centered Section Header */}
        <HomeSectionHeader header={data.header} />

        {/* Full-width scrolling logo clouds */}
        <Stack
          gap="4"
          maskImage="linear-gradient(90deg, transparent, black 12%, black 88%, transparent)"
          w="full"
        >
          <LogoRail items={firstRow} />
          <LogoRail items={secondRow.length ? secondRow : firstRow} reverse />
        </Stack>
      </Stack>
    </Section>
  );
}
