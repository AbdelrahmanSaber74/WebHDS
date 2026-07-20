import { describe, expect, it } from "vitest";
import { servicesCatalogService } from "./services-catalog.service";

describe("servicesCatalogService", () => {
  it("returns all configured services from the content repository", () => {
    expect(servicesCatalogService.getContent().services).toHaveLength(4);
    expect(servicesCatalogService.getServices()).toHaveLength(4);
    expect(servicesCatalogService.getContent().listing.hero.image).toBeTruthy();
  });

  it("finds a service by slug", () => {
    const service = servicesCatalogService.getServiceBySlug("web-development");

    expect(service?.id).toBe("web-development");
    expect(service?.seo.canonicalPath).toBe("/services/web-development");
  });

  it("returns listing metadata or service metadata from one service boundary", () => {
    expect(servicesCatalogService.getMetadata().canonicalPath).toBe("/services");
    expect(servicesCatalogService.getMetadata("web-development").canonicalPath).toBe(
      "/services/web-development",
    );
  });

  it("returns undefined for an invalid slug", () => {
    expect(servicesCatalogService.getServiceBySlug("missing-service")).toBeUndefined();
  });

  it("returns related services without including the source service", () => {
    const service = servicesCatalogService.getServiceBySlug("web-development");

    expect(service).toBeDefined();
    const relatedServices = servicesCatalogService.getRelatedServices(service!);

    expect(relatedServices).toHaveLength(3);
    expect(relatedServices.every((relatedService) => relatedService.id !== service!.id)).toBe(true);
  });
});
