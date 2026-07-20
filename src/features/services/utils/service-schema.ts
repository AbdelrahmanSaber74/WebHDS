import { appConfig } from "@/config";
import type { Service } from "@/features/services/types";

export function buildServiceSchema(
  service: Service,
  translated: { title: string; description: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: translated.title,
    description: translated.description,
    provider: {
      "@type": "Organization",
      name: appConfig.name,
      url: appConfig.url,
    },
    areaServed: "Global",
    serviceType: translated.title,
    url: new URL(service.seo.canonicalPath, appConfig.url).toString(),
  };
}
