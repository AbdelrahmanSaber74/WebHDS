import { ArrowRight, Building2 } from "lucide-react";
import { routesConfig } from "@/config";
import { useI18n } from "@/shared/i18n";
import { Container } from "@/shared/layouts";
import { PageHero } from "@/shared/ui";
import type { AboutHero } from "@/features/about/types";

export type AboutHeroSectionProps = {
  data: AboutHero;
};

export function AboutHeroSection({ data }: AboutHeroSectionProps) {
  const { t } = useI18n();

  return (
    <Container size="xl">
      <PageHero
        breadcrumbLabel={t("about.breadcrumb.label")}
        content={{
          backgroundImage: data.image,
          backgroundImageAlt: t(data.imageAlt),
          badge: t(data.badge),
          breadcrumbs: [
            { href: routesConfig.home.path, label: t("about.breadcrumb.home") },
            { label: t("about.breadcrumb.about") },
          ],
          primaryAction: {
            href: data.primaryHref,
            icon: <ArrowRight aria-hidden="true" size={18} />,
            label: t(data.primaryLabel),
          },
          secondaryAction: {
            href: data.secondaryHref,
            icon: <Building2 aria-hidden="true" size={18} />,
            label: t(data.secondaryLabel),
          },
          subtitle: t(data.subtitle),
          title: t(data.title),
        }}
      />
    </Container>
  );
}
