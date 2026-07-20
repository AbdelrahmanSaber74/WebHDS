import { useEffect } from "react";
import { seoConfig } from "@/config";
import type { SeoRouteKey } from "@/config";
import { analytics } from "@/lib/analytics";
import { useI18n } from "@/shared/i18n";
import { applySeoMetadata } from "@/shared/utils";

export function useSeo(routeKey: SeoRouteKey) {
  const { t } = useI18n();

  useEffect(() => {
    const config = seoConfig[routeKey];
    const { title } = applySeoMetadata({
      title: t(config.titleKey),
      description: t(config.descriptionKey),
      keywords: t(config.keywordsKey),
      canonicalPath: config.canonicalPath,
      structuredData: config.structuredData,
    });

    analytics.page(window.location.pathname, title);
  }, [routeKey, t]);
}
