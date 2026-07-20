import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { routesConfig } from "@/config";
import { Container } from "@/shared/layouts";
import { useI18n } from "@/shared/i18n";
import { PageHero } from "@/shared/ui";
import type { PortfolioListingContent } from "@/features/portfolio/types";

export type PortfolioHeroSectionProps = {
  data: PortfolioListingContent["hero"];
};

export function PortfolioHeroSection({ data }: PortfolioHeroSectionProps) {
  const { t } = useI18n();

  return (
    <Container size="xl">
      <PageHero
        breadcrumbLabel={t("portfolio.breadcrumb.label")}
        content={{
          backgroundImage: data.image,
          backgroundImageAlt: t(data.imageAlt),
          badge: t(data.badge),
          breadcrumbs: [
            { href: routesConfig.home.path, label: t("portfolio.breadcrumb.home") },
            { label: t("portfolio.breadcrumb.portfolio") },
          ],
          primaryAction: {
            href: data.primaryHref,
            icon: <ArrowRight aria-hidden="true" size={18} />,
            label: t(data.primaryLabel),
          },
          secondaryAction: {
            href: data.secondaryHref,
            icon: <BriefcaseBusiness aria-hidden="true" size={18} />,
            label: t(data.secondaryLabel),
          },
          subtitle: t(data.subtitle),
          title: t(data.title),
        }}
      />
    </Container>
  );
}
