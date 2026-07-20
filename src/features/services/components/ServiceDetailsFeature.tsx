import { Box } from "@chakra-ui/react";
import { useMemo } from "react";
import { useService } from "@/features/services/hooks";
import {
  RelatedServicesSection,
  ServiceContentGridSection,
  ServiceDetailsHeroSection,
  ServiceFaqSection,
  ServiceNotFoundSection,
  ServiceOverviewSection,
  ServiceProcessSection,
  ServiceTechnologiesSection,
  ServicesCtaSection,
} from "@/features/services/sections";
import { buildServiceSchema } from "@/features/services/utils";
import { useSeo, useSeoMetadata } from "@/shared/hooks";
import { useI18n } from "@/shared/i18n";

export type ServiceDetailsFeatureProps = {
  slug: string | undefined;
};

function MissingServiceDetails() {
  useSeo("notFound");

  return (
    <Box as="main" id="main-content">
      <ServiceNotFoundSection />
    </Box>
  );
}

export function ServiceDetailsFeature({ slug }: ServiceDetailsFeatureProps) {
  const { t } = useI18n();
  const { relatedServices, service } = useService(slug);

  const metadata = useMemo(() => {
    if (!service) {
      return undefined;
    }

    return {
      canonicalPath: service.seo.canonicalPath,
      description: t(service.seo.description),
      imageUrl: service.coverImage,
      keywords: t(service.seo.keywords),
      structuredData: buildServiceSchema(service, {
        description: t(service.shortDescription),
        title: t(service.title),
      }),
      title: t(service.seo.title),
    };
  }, [service, t]);

  useSeoMetadata(metadata);

  if (!service) {
    return <MissingServiceDetails />;
  }

  return (
    <Box as="main" id="main-content">
      <ServiceDetailsHeroSection service={service} />
      <ServiceOverviewSection service={service} />
      <ServiceContentGridSection
        description="services.details.benefits.description"
        eyebrow="services.details.benefits.eyebrow"
        items={service.benefits}
        title="services.details.benefits.title"
      />
      <ServiceContentGridSection
        description="services.details.features.description"
        eyebrow="services.details.features.eyebrow"
        items={service.deliverables}
        title="services.details.features.title"
      />
      <ServiceProcessSection service={service} />
      <ServiceTechnologiesSection service={service} />
      <ServiceContentGridSection
        description="services.details.industries.description"
        eyebrow="services.details.industries.eyebrow"
        items={service.industries}
        title="services.details.industries.title"
      />
      <ServiceFaqSection service={service} />
      <RelatedServicesSection services={relatedServices} />
      <ServicesCtaSection data={service.cta} />
    </Box>
  );
}
