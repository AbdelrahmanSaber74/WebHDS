import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { PageHero } from "./PageHero";

describe("PageHero", () => {
  it("renders generic marketing hero content and actions", () => {
    renderWithProviders(
      <PageHero
        breadcrumbLabel="Breadcrumb"
        content={{
          badge: "Services",
          breadcrumbs: [{ href: "/", label: "Home" }, { label: "Services" }],
          primaryAction: { href: "/contact", label: "Start" },
          secondaryAction: { href: "/portfolio", label: "Explore" },
          subtitle: "Reusable hero subtitle",
          title: "Reusable hero title",
        }}
      />,
    );

    expect(
      screen.getByRole("heading", { level: 1, name: "Reusable hero title" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Reusable hero subtitle")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Start" })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
  });
});
