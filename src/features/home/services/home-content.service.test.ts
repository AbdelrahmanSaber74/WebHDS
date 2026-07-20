import { describe, expect, it } from "vitest";
import { homeContentService } from "./home-content.service";

describe("homeContentService", () => {
  it("returns the complete home content contract", () => {
    const content = homeContentService.getContent();

    expect(content.hero.titleKey).toBe("home.hero.title");
    expect(content.hero.image).toBeTruthy();
    expect(content.servicesPreview.items.length).toBeGreaterThan(0);
    expect(content.faq.items.length).toBeGreaterThan(0);
  });

  it("keeps backwards-compatible content access and page metadata", () => {
    expect(homeContentService.getHomeContent()).toBe(homeContentService.getContent());
    expect(homeContentService.getMetadata().canonicalPath).toBe("/");
  });
});
