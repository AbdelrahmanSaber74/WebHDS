import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { AboutSectionHeader } from "./AboutSectionHeader";

describe("AboutSectionHeader", () => {
  it("renders translated section copy", () => {
    renderWithProviders(
      <AboutSectionHeader
        header={{
          description: "about.values.description",
          eyebrow: "about.values.eyebrow",
          title: "about.values.title",
        }}
      />,
    );

    expect(screen.getByText("Core values")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "The standards behind the work." }),
    ).toBeInTheDocument();
  });
});
