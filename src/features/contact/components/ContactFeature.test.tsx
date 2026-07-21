import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { ContactFeature } from "./ContactFeature";

describe("ContactFeature", () => {
  it("renders the contact page from content, company domain data, and shared infrastructure", () => {
    const { container } = renderWithProviders(<ContactFeature />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Let's shape the right software path",
    );
    expect(
      screen.getByRole("heading", { name: "Reach the right team from the first message." }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("support@hds-sa.com").length).toBeGreaterThan(0);
    expect(container.querySelector("#contact-form")).toBeInTheDocument();
  });
});
