import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { servicesCatalogService } from "@/features/services/services";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { ServiceCard } from "./ServiceCard";

describe("ServiceCard", () => {
  it("renders translated service content and detail link", () => {
    const service = servicesCatalogService.getServiceBySlug("web-development");

    expect(service).toBeDefined();
    renderWithProviders(<ServiceCard service={service!} />);

    expect(screen.getByRole("heading", { level: 3, name: "Web Development" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Web Development" })).toHaveAttribute(
      "href",
      "/services/web-development",
    );
    expect(screen.getByText("Explore service")).toBeInTheDocument();
  });
});
