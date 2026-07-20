import { ArrowRight, Mail } from "lucide-react";
import { SectionContainer } from "@/shared/layouts";
import { CtaBlock } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { AboutCta } from "@/features/about/types";

export type AboutCtaSectionProps = {
  data: AboutCta;
};

export function AboutCtaSection({ data }: AboutCtaSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <CtaBlock
        content={{
          description: t(data.description),
          primaryAction: {
            href: data.primaryHref,
            icon: <ArrowRight aria-hidden="true" size={18} />,
            label: t(data.primaryLabel),
          },
          secondaryAction: {
            href: data.secondaryHref,
            icon: <Mail aria-hidden="true" size={18} />,
            label: t(data.secondaryLabel),
          },
          title: t(data.title),
        }}
      />
    </SectionContainer>
  );
}
