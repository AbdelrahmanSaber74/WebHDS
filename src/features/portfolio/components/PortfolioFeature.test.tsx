import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { PortfolioListingFeature } from "./PortfolioListingFeature";
import { PortfolioDetailsFeature } from "./PortfolioDetailsFeature";

describe("Portfolio features", () => {
  it("renders the portfolio listing page", () => {
    renderWithProviders(<PortfolioListingFeature />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Proof that strong software",
    );
    expect(screen.getAllByText("CareFlow Command").length).toBeGreaterThan(0);
    expect(screen.getByLabelText("Search projects")).toBeInTheDocument();
  });

  it("renders a project case study page", () => {
    renderWithProviders(<PortfolioDetailsFeature slug="nova-payments" />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Nova Payments");
    expect(screen.getByText("Client")).toBeInTheDocument();
    expect(screen.getByText("Architecture highlights")).toBeInTheDocument();
  });

  it("renders invalid slug fallback", () => {
    renderWithProviders(<PortfolioDetailsFeature slug="unknown" />);

    expect(screen.getByText("Case study not found.")).toBeInTheDocument();
  });
});
