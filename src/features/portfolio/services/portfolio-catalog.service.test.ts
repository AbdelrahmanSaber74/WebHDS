import { describe, expect, it } from "vitest";
import { portfolioCatalogService } from "./portfolio-catalog.service";

describe("portfolioCatalogService", () => {
  it("returns portfolio content from the content repository", () => {
    expect(portfolioCatalogService.getContent().listing.hero.image).toBeTruthy();
    expect(portfolioCatalogService.getContent().projects.length).toBeGreaterThan(0);
  });

  it("returns project lookup by slug", () => {
    const project = portfolioCatalogService.getProjectBySlug("careflow-command");

    expect(project?.clientName).toBe("CareFlow Command");
  });

  it("returns listing metadata or project metadata from one service boundary", () => {
    expect(portfolioCatalogService.getMetadata().canonicalPath).toBe("/portfolio");
    expect(portfolioCatalogService.getMetadata("careflow-command").canonicalPath).toBe(
      "/portfolio/careflow-command",
    );
  });

  it("returns undefined for invalid slugs", () => {
    expect(portfolioCatalogService.getProjectBySlug("missing-project")).toBeUndefined();
  });

  it("filters projects by industry, technology, service, and search", () => {
    const results = portfolioCatalogService.filterProjects({
      industry: "portfolio.industries.fintech",
      search: "nova",
      service: "portfolio.services.devops",
      technology: "Azure",
    });

    expect(results).toHaveLength(1);
    expect(results[0]?.slug).toBe("nova-payments");
  });

  it("provides filter options for future API-backed filtering", () => {
    const options = portfolioCatalogService.getFilterOptions();

    expect(options.industries).toContain("portfolio.industries.healthcare");
    expect(options.technologies).toContain("React");
    expect(options.services).toContain("portfolio.services.webDevelopment");
  });
});
