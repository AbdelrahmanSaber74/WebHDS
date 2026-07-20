import { servicesCatalogService } from "@/features/services/services";

export function useServices() {
  return {
    listing: servicesCatalogService.getListingContent(),
    services: servicesCatalogService.getServices(),
  };
}
