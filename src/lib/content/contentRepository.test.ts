import { describe, expect, it } from "vitest";
import { createLocalContentRepository } from "./contentRepository";

describe("createLocalContentRepository", () => {
  it("exposes local content and metadata through a replaceable repository contract", () => {
    const repository = createLocalContentRepository({
      content: { title: "home.hero.title" },
      metadata: { canonicalPath: "/" },
    });

    expect(repository.getContent()).toEqual({ title: "home.hero.title" });
    expect(repository.getMetadata()).toEqual({ canonicalPath: "/" });
  });
});
