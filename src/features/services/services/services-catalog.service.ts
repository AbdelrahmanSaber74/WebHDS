import { RELATED_SERVICES_LIMIT } from "@/features/services/constants";
import type { Service, ServiceId, ServiceSlug } from "@/features/services/types";
import { servicesContentRepository } from "./services-content.repository";

const servicesCatalog: Service[] = [...servicesContentRepository.getContent().services];

export type ServicesCatalogPort = {
  getContent: typeof servicesContentRepository.getContent;
  getListingContent: () => ReturnType<typeof servicesContentRepository.getContent>["listing"];
  getMetadata: (
    slug?: string,
  ) => ReturnType<typeof servicesContentRepository.getMetadata> | Service["seo"];
  getServices: () => Service[];
  getServiceBySlug: (slug: string | undefined) => Service | undefined;
  getRelatedServices: (service: Service, limit?: number) => Service[];
};

function isServiceSlug(slug: string | undefined): slug is ServiceSlug {
  return Boolean(slug && servicesCatalog.some((service) => service.slug === slug));
}

function getContent() {
  return servicesContentRepository.getContent();
}

function getListingContent() {
  return getContent().listing;
}

function getMetadata(slug?: string) {
  return getServiceBySlug(slug)?.seo ?? servicesContentRepository.getMetadata();
}

function getServices() {
  return servicesCatalog;
}

function getServiceBySlug(slug: string | undefined) {
  if (!isServiceSlug(slug)) {
    return undefined;
  }

  return servicesCatalog.find((service) => service.slug === slug);
}

function getServicesByIds(ids: ServiceId[]) {
  return ids.reduce<Service[]>((result, id) => {
    const service = servicesCatalog.find((catalogService) => catalogService.id === id);

    if (service) {
      result.push(service);
    }

    return result;
  }, []);
}

function getRelatedServices(service: Service, limit = RELATED_SERVICES_LIMIT) {
  return getServicesByIds(service.relatedServices)
    .filter((relatedService) => relatedService.id !== service.id)
    .slice(0, limit);
}

export const servicesCatalogService: ServicesCatalogPort = {
  getContent,
  getListingContent,
  getMetadata,
  getRelatedServices,
  getServiceBySlug,
  getServices,
};
