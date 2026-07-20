import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { analytics } from "@/lib/analytics";
import type { ContactRepository } from "@/features/contact/repository";
import { contactService } from "@/features/contact/services";
import type { Lead } from "@/features/contact/types";
import {
  contactFormSchema,
  defaultContactFormValues,
  type ContactFormValues,
} from "@/features/contact/validation";

export type ContactSubmissionState = {
  error: string | null;
  lead: Lead | null;
};

export type UseContactFormOptions = {
  repository?: ContactRepository;
};

export function useContactContent() {
  return contactService.getContent();
}

export function useContactForm({ repository }: UseContactFormOptions = {}) {
  const startedRef = useRef(false);
  const submittingRef = useRef(false);
  const [submission, setSubmission] = useState<ContactSubmissionState>({ error: null, lead: null });

  const form = useForm<ContactFormValues>({
    defaultValues: defaultContactFormValues,
    resolver: zodResolver(contactFormSchema),
    shouldFocusError: true,
  });

  const markStarted = useCallback(() => {
    if (startedRef.current) {
      return;
    }

    startedRef.current = true;
    analytics.track({ name: "Lead Started", properties: { source: "website-contact" } });
  }, []);

  const submit = useMemo(
    () =>
      form.handleSubmit(async (values) => {
        if (submittingRef.current) {
          return;
        }

        submittingRef.current = true;
        setSubmission({ error: null, lead: null });

        try {
          const lead = await contactService.submitLead(
            {
              ...values,
              company: values.company || undefined,
              inquiryType: "project",
              phone: values.phone || undefined,
              source: "website-contact",
            },
            repository,
          );

          analytics.track({
            name: "Lead Submitted",
            properties: { industry: values.industry, service: values.service, source: lead.source },
          });
          setSubmission({ error: null, lead });
          form.reset(defaultContactFormValues);
        } catch (error) {
          analytics.track({
            name: "Lead Failed",
            properties: { error: error instanceof Error ? error.message : "unknown" },
          });
          setSubmission({ error: "contact.form.status.errorDescription", lead: null });
        } finally {
          submittingRef.current = false;
        }
      }),
    [form, repository],
  );

  return {
    form,
    markStarted,
    resetSubmission: () => setSubmission({ error: null, lead: null }),
    submission,
    submit,
  };
}
