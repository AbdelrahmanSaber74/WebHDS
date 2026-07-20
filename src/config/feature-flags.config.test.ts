import { describe, expect, it } from "vitest";
import { isFeatureEnabled } from "./feature-flags.config";

describe("feature flags config", () => {
  it("returns boolean values for known feature flags", () => {
    expect(typeof isFeatureEnabled("blog")).toBe("boolean");
    expect(typeof isFeatureEnabled("careers")).toBe("boolean");
    expect(typeof isFeatureEnabled("contactForm")).toBe("boolean");
  });
});
