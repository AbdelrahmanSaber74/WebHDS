import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useAboutContent } from "./useAboutContent";

describe("useAboutContent", () => {
  it("exposes data required by the about page composition", () => {
    const { result } = renderHook(() => useAboutContent());

    expect(result.current.hero.primaryHref).toBe("mailto:sales@hds.example");
    expect(result.current.industries.items).toHaveLength(4);
  });
});
