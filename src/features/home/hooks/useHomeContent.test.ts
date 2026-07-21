import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useHomeContent } from "./useHomeContent";

describe("useHomeContent", () => {
  it("exposes data required by the home page composition", () => {
    const { result } = renderHook(() => useHomeContent());

    expect(result.current.hero.primaryCtaHref).toBe("#contact");
    expect(result.current.process.items).toHaveLength(7);
  });
});
