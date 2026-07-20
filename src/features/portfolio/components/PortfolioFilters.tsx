import { HStack, Input, NativeSelect, Stack } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useI18n } from "@/shared/i18n";
import type { PortfolioFilterState } from "@/features/portfolio/types";

export type PortfolioFilterOptions = {
  industries: string[];
  services: string[];
  technologies: string[];
};

export type PortfolioFiltersProps = {
  filters: PortfolioFilterState;
  options: PortfolioFilterOptions;
  onChange: (filters: PortfolioFilterState) => void;
};

export function PortfolioFilters({ filters, onChange, options }: PortfolioFiltersProps) {
  const { t } = useI18n();

  return (
    <Stack gap="4">
      <HStack
        bg="bg.surface"
        border="1px solid"
        borderColor="border.subtle"
        gap="3"
        px="4"
        py="2"
        rounded="panel"
      >
        <Search aria-hidden="true" size={18} />
        <Input
          aria-label={t("portfolio.filters.searchLabel")}
          border="0"
          onChange={(event) => onChange({ ...filters, search: event.target.value })}
          placeholder={t("portfolio.filters.searchPlaceholder")}
          value={filters.search ?? ""}
        />
      </HStack>
      <HStack gap="3" wrap="wrap">
        <NativeSelect.Root maxW={{ base: "full", md: "xs" }}>
          <NativeSelect.Field
            aria-label={t("portfolio.filters.industry")}
            onChange={(event) =>
              onChange({ ...filters, industry: event.target.value || undefined })
            }
            value={filters.industry ?? ""}
          >
            <option value="">{t("portfolio.filters.allIndustries")}</option>
            {options.industries.map((industry) => (
              <option key={industry} value={industry}>
                {t(industry)}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
        <NativeSelect.Root maxW={{ base: "full", md: "xs" }}>
          <NativeSelect.Field
            aria-label={t("portfolio.filters.technology")}
            onChange={(event) =>
              onChange({ ...filters, technology: event.target.value || undefined })
            }
            value={filters.technology ?? ""}
          >
            <option value="">{t("portfolio.filters.allTechnologies")}</option>
            {options.technologies.map((technology) => (
              <option key={technology} value={technology}>
                {technology}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
        <NativeSelect.Root maxW={{ base: "full", md: "xs" }}>
          <NativeSelect.Field
            aria-label={t("portfolio.filters.service")}
            onChange={(event) => onChange({ ...filters, service: event.target.value || undefined })}
            value={filters.service ?? ""}
          >
            <option value="">{t("portfolio.filters.allServices")}</option>
            {options.services.map((service) => (
              <option key={service} value={service}>
                {t(service)}
              </option>
            ))}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </HStack>
    </Stack>
  );
}
