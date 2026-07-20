import { Box, HStack, Link, Text } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo } from "react";
import { useI18n } from "@/shared/i18n";
import type { BreadcrumbItem } from "@/shared/types";

export type BreadcrumbsProps = {
  ariaLabel: string;
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ ariaLabel, items }: BreadcrumbsProps) {
  const { direction } = useI18n();
  const SeparatorIcon = direction === "rtl" ? ChevronLeft : ChevronRight;

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(item.href ? { item: item.href } : {}),
      })),
    }),
    [items],
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <Box as="nav" aria-label={ariaLabel}>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <Box as="ol" display="flex" flexWrap="wrap" gap="2">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <Box as="li" key={`${item.label}-${index}`} display="flex" alignItems="center">
              <HStack gap="2">
                {item.href && !isCurrent ? (
                  <Link color="fg.muted" fontSize="sm" href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <Text
                    aria-current={isCurrent ? "page" : undefined}
                    color={isCurrent ? "fg.default" : "fg.muted"}
                    fontSize="sm"
                    fontWeight={isCurrent ? "semibold" : "normal"}
                  >
                    {item.label}
                  </Text>
                )}
                {!isCurrent ? (
                  <SeparatorIcon aria-hidden="true" size={16} strokeWidth="1.75" />
                ) : null}
              </HStack>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
