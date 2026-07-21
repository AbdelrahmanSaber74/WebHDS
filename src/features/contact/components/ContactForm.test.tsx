import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/shared/utils/test-utils";
import { contactContent } from "@/features/contact/data";
import { createMockContactRepository } from "@/features/contact/repository";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  it("validates required fields with accessible messages", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <ContactForm
        content={contactContent.form}
        repository={createMockContactRepository({ delayMs: 0 })}
      />,
    );

    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));

    expect(await screen.findAllByRole("alert")).not.toHaveLength(0);
    expect(screen.getAllByText("This field is required.").length).toBeGreaterThan(0);
  });

  it("submits a valid inquiry and renders the success state", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <ContactForm
        content={contactContent.form}
        repository={createMockContactRepository({ delayMs: 0 })}
      />,
    );

    await user.type(screen.getByLabelText(/full name/i), "Mona Farouk");
    await user.type(screen.getByLabelText(/email/i), "mona@example.com");
    await user.selectOptions(screen.getByLabelText(/country/i), "egypt");
    await user.selectOptions(screen.getByLabelText(/industry/i), "healthcare");
    await user.selectOptions(screen.getByLabelText(/service/i), "web-development");
    await user.selectOptions(screen.getByLabelText(/timeline/i), "one-to-three-months");
    await user.type(
      screen.getByLabelText(/project message/i),
      "We need a patient operations platform.",
    );
    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));

    expect(await screen.findByText("Inquiry received")).toBeInTheDocument();
  });

  it("renders a retryable failure state", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <ContactForm
        content={contactContent.form}
        repository={createMockContactRepository({ delayMs: 0, shouldFail: () => true })}
      />,
    );

    await user.type(screen.getByLabelText(/full name/i), "Mona Farouk");
    await user.type(screen.getByLabelText(/email/i), "mona@example.com");
    await user.selectOptions(screen.getByLabelText(/country/i), "egypt");
    await user.selectOptions(screen.getByLabelText(/industry/i), "healthcare");
    await user.selectOptions(screen.getByLabelText(/service/i), "web-development");
    await user.selectOptions(screen.getByLabelText(/timeline/i), "one-to-three-months");
    await user.type(
      screen.getByLabelText(/project message/i),
      "We need a patient operations platform.",
    );
    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));

    await waitFor(() => expect(screen.getByText("Submission failed")).toBeInTheDocument());
    expect(screen.getByRole("button", { name: /try again/i })).toBeInTheDocument();
  });
});
