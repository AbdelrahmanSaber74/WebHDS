import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TestProviders } from "@/shared/utils/TestProviders";
import { useService } from "./useService";
import { useServices } from "./useServices";

describe("services hooks", () => {
  it("returns listing content and services", () => {
    const { result } = renderHook(() => useServices(), { wrapper: TestProviders });

    expect(result.current.listing.hero.title).toBe("services.listing.hero.title");
    expect(result.current.services).toHaveLength(4);
  });

  it("returns service details and related services", () => {
    const { result } = renderHook(() => useService("web-development"), { wrapper: TestProviders });

    expect(result.current.service?.slug).toBe("web-development");
    expect(result.current.relatedServices).toHaveLength(3);
  });

  it("handles missing services", () => {
    const { result } = renderHook(() => useService("unknown"), { wrapper: TestProviders });

    expect(result.current.service).toBeUndefined();
    expect(result.current.relatedServices).toEqual([]);
  });
});
