import { seoConfig } from "@/config";
import { servicesData, servicesListingData } from "@/features/services/data";
import type { Service, ServicesListingContent } from "@/features/services/types";
import { createLocalContentRepository } from "@/lib/content";

export type ServicesContent = {
  listing: ServicesListingContent;
  services: Service[];
};

export const servicesContentRepository = createLocalContentRepository({
  content: {
    listing: servicesListingData,
    services: servicesData,
  } satisfies ServicesContent,
  metadata: seoConfig.services,
});

export type ServicesContentRepository = typeof servicesContentRepository;
