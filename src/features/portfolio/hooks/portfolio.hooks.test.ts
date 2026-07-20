import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { usePortfolio } from "./usePortfolio";
import { usePortfolioProject } from "./usePortfolioProject";

describe("portfolio hooks", () => {
  it("exposes filtered portfolio listing data", () => {
    const { result } = renderHook(() => usePortfolio({ technology: "Azure" }));

    expect(result.current.projects.some((project) => project.slug === "nova-payments")).toBe(true);
    expect(result.current.listing.hero.title).toBe("portfolio.hero.title");
  });

  it("exposes project details and related projects", () => {
    const { result } = renderHook(() => usePortfolioProject("marketlane-commerce"));

    expect(result.current.project?.clientName).toBe("MarketLane");
    expect(result.current.relatedProjects.length).toBeGreaterThan(0);
  });
});
