import { ArrowRight, Mail } from "lucide-react";
import { routesConfig } from "@/config";
import { useI18n } from "@/shared/i18n";
import { Container } from "@/shared/layouts";
import { PageHero } from "@/shared/ui";
import type { HeroContent } from "@/shared/types";

export type ContactHeroSectionProps = {
  data: HeroContent;
};

export function ContactHeroSection({ data }: ContactHeroSectionProps) {
  const { t } = useI18n();

  return (
    <Container size="xl">
      <PageHero
        breadcrumbLabel={t("contact.breadcrumb.label")}
        content={{
          badge: data.badge ? t(data.badge) : undefined,
          breadcrumbs: [
            { href: routesConfig.home.path, label: t("contact.breadcrumb.home") },
            { label: t("contact.breadcrumb.contact") },
          ],
          primaryAction: data.primaryAction
            ? {
                href: data.primaryAction.href,
                icon: <ArrowRight aria-hidden="true" size={18} />,
                label: t(data.primaryAction.label),
              }
            : undefined,
          secondaryAction: data.secondaryAction
            ? {
                href: data.secondaryAction.href,
                icon: <Mail aria-hidden="true" size={18} />,
                label: t(data.secondaryAction.label),
              }
            : undefined,
          subtitle: data.subtitle ? t(data.subtitle) : undefined,
          title: t(data.title),
        }}
      />
    </Container>
  );
}
