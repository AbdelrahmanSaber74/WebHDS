import { chakra, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Send } from "lucide-react";
import { Controller } from "react-hook-form";
import { Button, Card, Input, Select, Textarea } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { useContactForm } from "@/features/contact/hooks";
import type { ContactRepository } from "@/features/contact/repository";
import type { ContactFormContent, ContactOption } from "@/features/contact/types";
import { FormField } from "./FormField";

export type ContactFormProps = {
  content: ContactFormContent;
  repository?: ContactRepository;
};

function mapOptions(options: ContactOption[], translate: (key: string) => string) {
  return options.map((option) => ({ ...option, label: translate(option.label) }));
}

export function ContactForm({ content, repository }: ContactFormProps) {
  const { t } = useI18n();
  const { form, markStarted, resetSubmission, submission, submit } = useContactForm({ repository });
  const {
    control,
    formState: { errors, isSubmitting },
    register,
  } = form;

  const countryOptions = mapOptions(content.options.countries, t);
  const industryOptions = mapOptions(content.options.industries, t);
  const serviceOptions = mapOptions(content.options.services, t);
  const budgetOptions = mapOptions(content.options.budgets, t);
  const timelineOptions = mapOptions(content.options.timelines, t);

  return (
    <Card
      as="form"
      id="contact-form"
      p={{ base: "5", md: "8" }}
      variant="feature"
      onFocusCapture={markStarted}
      onSubmit={submit}
    >
      <Stack gap="6">
        {submission.lead ? (
          <Card bg="bg.surface" borderColor="success" p="4" variant="outline">
            <Stack gap="1">
              <Text color="success" fontWeight="bold">
                {t(content.status.successTitle)}
              </Text>
              <Text color="fg.muted">{t(content.status.successDescription)}</Text>
            </Stack>
          </Card>
        ) : null}
        {submission.error ? (
          <Card bg="bg.surface" borderColor="danger" p="4" variant="outline">
            <Stack gap="3">
              <Stack gap="1">
                <Text color="danger" fontWeight="bold">
                  {t(content.status.errorTitle)}
                </Text>
                <Text color="fg.muted">{t(submission.error)}</Text>
              </Stack>
              <Button
                alignSelf="flex-start"
                size="sm"
                type="button"
                variant="outline"
                onClick={resetSubmission}
              >
                {t(content.actions.retry)}
              </Button>
            </Stack>
          </Card>
        ) : null}

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="5">
          <FormField
            error={errors.fullName?.message ? t(errors.fullName.message) : undefined}
            id="fullName"
            label={t(content.fields.fullName)}
            required
          >
            <Input
              id="fullName"
              placeholder={t(content.placeholders.fullName)}
              {...register("fullName")}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              aria-invalid={Boolean(errors.fullName)}
            />
          </FormField>
          <FormField
            error={errors.company?.message ? t(errors.company.message) : undefined}
            id="company"
            label={t(content.fields.company)}
          >
            <Input
              id="company"
              placeholder={t(content.placeholders.company)}
              {...register("company")}
              aria-describedby={errors.company ? "company-error" : undefined}
              aria-invalid={Boolean(errors.company)}
            />
          </FormField>
          <FormField
            error={errors.email?.message ? t(errors.email.message) : undefined}
            id="email"
            label={t(content.fields.email)}
            required
          >
            <Input
              id="email"
              inputMode="email"
              placeholder={t(content.placeholders.email)}
              type="email"
              {...register("email")}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={Boolean(errors.email)}
            />
          </FormField>
          <FormField
            error={errors.phone?.message ? t(errors.phone.message) : undefined}
            id="phone"
            label={t(content.fields.phone)}
          >
            <Input
              id="phone"
              inputMode="tel"
              placeholder={t(content.placeholders.phone)}
              type="tel"
              {...register("phone")}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              aria-invalid={Boolean(errors.phone)}
            />
          </FormField>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <FormField
                error={errors.country?.message ? t(errors.country.message) : undefined}
                id="country"
                label={t(content.fields.country)}
                required
              >
                <Select
                  id="country"
                  options={countryOptions}
                  placeholder={t(content.placeholders.country)}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  aria-describedby={errors.country ? "country-error" : undefined}
                  aria-invalid={Boolean(errors.country)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="industry"
            render={({ field }) => (
              <FormField
                error={errors.industry?.message ? t(errors.industry.message) : undefined}
                id="industry"
                label={t(content.fields.industry)}
                required
              >
                <Select
                  id="industry"
                  options={industryOptions}
                  placeholder={t(content.placeholders.industry)}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  aria-describedby={errors.industry ? "industry-error" : undefined}
                  aria-invalid={Boolean(errors.industry)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <FormField
                error={errors.service?.message ? t(errors.service.message) : undefined}
                id="service"
                label={t(content.fields.service)}
                required
              >
                <Select
                  id="service"
                  options={serviceOptions}
                  placeholder={t(content.placeholders.service)}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  aria-invalid={Boolean(errors.service)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <FormField
                error={errors.budget?.message ? t(errors.budget.message) : undefined}
                id="budget"
                label={t(content.fields.budget)}
                required
              >
                <Select
                  id="budget"
                  options={budgetOptions}
                  placeholder={t(content.placeholders.budget)}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  aria-describedby={errors.budget ? "budget-error" : undefined}
                  aria-invalid={Boolean(errors.budget)}
                />
              </FormField>
            )}
          />
          <Controller
            control={control}
            name="timeline"
            render={({ field }) => (
              <FormField
                error={errors.timeline?.message ? t(errors.timeline.message) : undefined}
                id="timeline"
                label={t(content.fields.timeline)}
                required
              >
                <Select
                  id="timeline"
                  options={timelineOptions}
                  placeholder={t(content.placeholders.timeline)}
                  value={field.value}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                  aria-describedby={errors.timeline ? "timeline-error" : undefined}
                  aria-invalid={Boolean(errors.timeline)}
                />
              </FormField>
            )}
          />
        </SimpleGrid>

        <FormField
          error={errors.message?.message ? t(errors.message.message) : undefined}
          id="message"
          label={t(content.fields.message)}
          required
        >
          <Textarea
            id="message"
            minH="36"
            placeholder={t(content.placeholders.message)}
            {...register("message")}
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={Boolean(errors.message)}
          />
        </FormField>

        <Controller
          control={control}
          name="newsletterOptIn"
          render={({ field }) => (
            <chakra.label alignItems="flex-start" display="flex" gap="3">
              <chakra.input
                checked={field.value}
                mt="1"
                type="checkbox"
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(event.currentTarget.checked)}
              />
              <Text color="fg.muted" fontSize="sm" lineHeight="relaxed">
                {t(content.fields.newsletterOptIn)}
              </Text>
            </chakra.label>
          )}
        />

        <Button
          alignSelf={{ base: "stretch", sm: "flex-start" }}
          isLoading={isSubmitting}
          size="lg"
          type="submit"
        >
          <Send aria-hidden="true" size={18} />
          {t(content.actions.submit)}
        </Button>
      </Stack>
    </Card>
  );
}
