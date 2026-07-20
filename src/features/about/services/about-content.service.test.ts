import { describe, expect, it } from "vitest";
import { aboutContentService } from "./about-content.service";

describe("aboutContentService", () => {
  it("returns the complete about storytelling contract", () => {
    const content = aboutContentService.getContent();

    expect(content.hero.title).toBe("about.hero.title");
    expect(content.hero.image).toBeTruthy();
    expect(content.story.paragraphs).toHaveLength(3);
    expect(content.whyChoose.items.length).toBeGreaterThan(0);
    expect(content.process.steps).toHaveLength(4);
    expect(content.cta.primaryLabel).toBe("about.cta.primary");
  });

  it("keeps backwards-compatible content access and page metadata", () => {
    expect(aboutContentService.getAboutContent()).toBe(aboutContentService.getContent());
    expect(aboutContentService.getMetadata().canonicalPath).toBe("/about");
  });
});
