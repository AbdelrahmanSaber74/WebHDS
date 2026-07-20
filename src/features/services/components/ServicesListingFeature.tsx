import { Box } from "@chakra-ui/react";
import { useServices } from "@/features/services/hooks";
import {
  ServicesCtaSection,
  ServicesFaqPreviewSection,
  ServicesGridSection,
  ServicesListingHeroSection,
  ServicesProcessSection,
  ServicesTechnologiesSection,
} from "@/features/services/sections";
import { useSeo } from "@/shared/hooks";

export function ServicesListingFeature() {
  useSeo("services");
  const { listing, services } = useServices();
  const defaultProcess = services[0]?.developmentProcess ?? [];

  return (
    <Box as="main" id="main-content">
      <ServicesListingHeroSection data={listing.hero} />
      <ServicesGridSection services={services} />
      <ServicesTechnologiesSection data={listing.technologies} services={services} />
      <ServicesProcessSection data={listing.process} steps={defaultProcess} />
      <ServicesFaqPreviewSection data={listing.faq} />
      <ServicesCtaSection data={listing.cta} />
    </Box>
  );
}
