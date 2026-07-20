import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { ServiceDetailsFeature } from "./ServiceDetailsFeature";

describe("ServiceDetailsFeature", () => {
  it("renders a service page from the service model", () => {
    renderWithProviders(<ServiceDetailsFeature slug="web-development" />);

    expect(screen.getByRole("heading", { level: 1, name: "Web Development" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Overview" })).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(document.title).toBe("Web Development Services | HDS");
    expect(document.getElementById("structured-data")?.textContent).toContain('"@type":"Service"');
  });

  it("renders a proper not found experience for an invalid slug", () => {
    renderWithProviders(<ServiceDetailsFeature slug="missing-service" />);

    expect(screen.getByText("Service not found.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Back to services/i })).toHaveAttribute(
      "href",
      "/services",
    );
  });
});
