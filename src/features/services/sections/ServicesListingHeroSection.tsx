import { ArrowRight, Layers3 } from "lucide-react";
import { useI18n } from "@/shared/i18n";
import { Container } from "@/shared/layouts";
import { PageHero } from "@/shared/ui";
import type { ServicesListingContent } from "@/features/services/types";

export type ServicesListingHeroSectionProps = {
  data: ServicesListingContent["hero"];
};

export function ServicesListingHeroSection({ data }: ServicesListingHeroSectionProps) {
  const { t } = useI18n();

  return (
    <Container size="xl">
      <PageHero
        breadcrumbLabel={t("services.breadcrumb.label")}
        content={{
          backgroundImage: data.image,
          backgroundImageAlt: t(data.imageAlt),
          badge: t(data.badge),
          breadcrumbs: [
            { href: "/", label: t("services.breadcrumb.home") },
            { label: t("services.breadcrumb.services") },
          ],
          primaryAction: {
            href: data.primaryHref,
            icon: <ArrowRight aria-hidden="true" size={18} />,
            label: t(data.primaryLabel),
          },
          secondaryAction: {
            href: data.secondaryHref,
            icon: <Layers3 aria-hidden="true" size={18} />,
            label: t(data.secondaryLabel),
          },
          subtitle: t(data.subtitle),
          title: t(data.title),
        }}
      />
    </Container>
  );
}
