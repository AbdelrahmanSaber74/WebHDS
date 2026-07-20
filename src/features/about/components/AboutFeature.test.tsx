import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { AboutFeature } from "./AboutFeature";

describe("AboutFeature", () => {
  it("renders the about storytelling page from typed data and company domain data", () => {
    renderWithProviders(<AboutFeature />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "A product and engineering company",
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Built for the difficult middle between strategy and shipping.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Mission")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Start the conversation/i })).toHaveAttribute(
      "href",
      "mailto:sales@hds.example",
    );
  });
});
