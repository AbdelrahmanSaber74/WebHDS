import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { homeData } from "@/features/home/data";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders primary and secondary calls to action", () => {
    renderWithProviders(<HeroSection data={homeData.hero} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Software platforms");
    expect(screen.getByRole("link", { name: /Start a project/i })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(screen.getByRole("link", { name: /Explore services/i })).toHaveAttribute(
      "href",
      "#services",
    );
  });
});
