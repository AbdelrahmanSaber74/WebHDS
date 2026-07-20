import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";
import { TestProviders } from "./TestProviders";

export function renderWithProviders(ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) {
  window.localStorage.removeItem("hds-locale");

  return render(ui, { wrapper: TestProviders, ...options });
}
