import type { HomeContent } from "@/features/home/types";

export const homeTestimonialsData: HomeContent["testimonials"] = {
  header: {
    eyebrowKey: "home.testimonials.eyebrow",
    titleKey: "home.testimonials.title",
    descriptionKey: "home.testimonials.description",
  },
  items: [
    {
      id: "operations",
      quoteKey: "home.testimonials.operations.quote",
      nameKey: "home.testimonials.operations.name",
      roleKey: "home.testimonials.operations.role",
      companyKey: "home.testimonials.operations.company",
    },
    {
      id: "product",
      quoteKey: "home.testimonials.product.quote",
      nameKey: "home.testimonials.product.name",
      roleKey: "home.testimonials.product.role",
      companyKey: "home.testimonials.product.company",
    },
    {
      id: "growth",
      quoteKey: "home.testimonials.growth.quote",
      nameKey: "home.testimonials.growth.name",
      roleKey: "home.testimonials.growth.role",
      companyKey: "home.testimonials.growth.company",
    },
  ],
};
