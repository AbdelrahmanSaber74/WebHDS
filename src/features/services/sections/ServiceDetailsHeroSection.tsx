import { ArrowRight, Mail } from "lucide-react";
import { useI18n } from "@/shared/i18n";
import { Container } from "@/shared/layouts";
import { PageHero } from "@/shared/ui";
import type { Service } from "@/features/services/types";

export type ServiceDetailsHeroSectionProps = {
  service: Service;
};

export function ServiceDetailsHeroSection({ service }: ServiceDetailsHeroSectionProps) {
  const { t } = useI18n();

  return (
    <Container size="xl">
      <PageHero
        breadcrumbLabel={t("services.breadcrumb.label")}
        content={{
          backgroundImage: service.heroImage,
          backgroundImageAlt: t(service.heroImageAlt),
          badge: t("services.details.badge"),
          breadcrumbs: [
            { href: "/", label: t("services.breadcrumb.home") },
            { href: "/services", label: t("services.breadcrumb.services") },
            { label: t(service.title) },
          ],
          primaryAction: {
            href: service.cta.primaryHref,
            icon: <ArrowRight aria-hidden="true" size={18} />,
            label: t(service.cta.primaryLabel),
          },
          secondaryAction: {
            href: service.cta.secondaryHref,
            icon: <Mail aria-hidden="true" size={18} />,
            label: t(service.cta.secondaryLabel),
          },
          subtitle: t(service.subtitle),
          title: t(service.title),
        }}
      />
    </Container>
  );
}
