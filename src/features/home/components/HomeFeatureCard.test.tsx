import { screen } from "@testing-library/react";
import { Code2 } from "lucide-react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { HomeFeatureCard } from "./HomeFeatureCard";

const item = {
  id: "custom-software",
  titleKey: "home.services.customSoftware.title",
  descriptionKey: "home.services.customSoftware.description",
  icon: Code2,
};

describe("HomeFeatureCard", () => {
  it("renders translated service content", () => {
    renderWithProviders(<HomeFeatureCard item={item} />);

    expect(screen.getByRole("heading", { name: "Custom Software" })).toBeInTheDocument();
    expect(
      screen.getByText(/Tailored platforms designed around your workflows/i),
    ).toBeInTheDocument();
  });
});
