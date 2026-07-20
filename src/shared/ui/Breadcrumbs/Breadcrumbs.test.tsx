import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { Breadcrumbs } from "./Breadcrumbs";

const items = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { label: "Web Development" },
];

describe("Breadcrumbs", () => {
  it("renders accessible navigation with the current page", () => {
    renderWithProviders(<Breadcrumbs ariaLabel="Breadcrumb" items={items} />);

    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByText("Web Development")).toHaveAttribute("aria-current", "page");
  });

  it("renders BreadcrumbList structured data", () => {
    const { container } = renderWithProviders(<Breadcrumbs ariaLabel="Breadcrumb" items={items} />);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script?.textContent).toContain('"@type":"BreadcrumbList"');
    expect(script?.textContent).toContain('"position":3');
  });
});
