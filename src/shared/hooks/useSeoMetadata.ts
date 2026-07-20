import { useEffect } from "react";
import { analytics } from "@/lib/analytics";
import { applySeoMetadata } from "@/shared/utils";
import type { SeoMetadata } from "@/shared/utils";

export function useSeoMetadata(metadata: SeoMetadata | undefined) {
  useEffect(() => {
    if (!metadata) {
      return;
    }

    const { title } = applySeoMetadata(metadata);

    analytics.page(window.location.pathname, title);
  }, [metadata]);
}
