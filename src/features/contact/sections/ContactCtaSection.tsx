import { Box } from "@chakra-ui/react";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { analytics } from "@/lib/analytics";
import { SectionContainer } from "@/shared/layouts";
import { CtaBlock } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { CTAContent } from "@/shared/types";

export type ContactCtaSectionProps = {
  data: CTAContent;
};

export function ContactCtaSection({ data }: ContactCtaSectionProps) {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <Box
        onClickCapture={(event) => {
          const target = event.target instanceof Element ? event.target.closest("a") : null;

          if (target) {
            analytics.track({
              name: "CTA Clicked",
              properties: { href: target.getAttribute("href"), source: "contact" },
            });
          }
        }}
      >
        <CtaBlock
          content={{
            description: data.description ? t(data.description) : undefined,
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
                  icon: <BriefcaseBusiness aria-hidden="true" size={18} />,
                  label: t(data.secondaryAction.label),
                }
              : undefined,
            title: t(data.title),
          }}
        />
      </Box>
    </SectionContainer>
  );
}
