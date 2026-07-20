import { servicesCatalogService } from "@/features/services/services";

export function useService(slug: string | undefined) {
  const service = servicesCatalogService.getServiceBySlug(slug);

  return {
    relatedServices: service ? servicesCatalogService.getRelatedServices(service) : [],
    service,
  };
}
