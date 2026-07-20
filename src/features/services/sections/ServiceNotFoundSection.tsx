import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/shared/i18n";
import { SectionContainer } from "@/shared/layouts";
import { Button, EmptyState } from "@/shared/ui";

export function ServiceNotFoundSection() {
  const { t } = useI18n();

  return (
    <SectionContainer>
      <EmptyState
        action={
          <Button asChild>
            <a href="/services">
              <ArrowLeft aria-hidden="true" size={18} />
              {t("services.notFound.action")}
            </a>
          </Button>
        }
        description={t("services.notFound.description")}
        title={t("services.notFound.title")}
      />
    </SectionContainer>
  );
}
