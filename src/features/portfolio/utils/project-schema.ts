import { appConfig } from "@/config";
import type { PortfolioProject } from "@/features/portfolio/types";

export function buildProjectSchema(
  project: PortfolioProject,
  translated: { description: string; industry: string; title: string },
) {
  const url = new URL(project.seo.canonicalPath, appConfig.url).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: translated.title,
        description: translated.description,
        image: project.featuredImage,
        datePublished: `${project.year}-01-01`,
        author: {
          "@type": "Organization",
          name: appConfig.name,
          url: appConfig.url,
        },
        mainEntityOfPage: url,
      },
      {
        "@type": "CreativeWork",
        name: translated.title,
        description: translated.description,
        about: translated.industry,
        creator: {
          "@type": "Organization",
          name: appConfig.name,
          url: appConfig.url,
        },
        url,
      },
    ],
  };
}
