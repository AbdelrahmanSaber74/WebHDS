import { FEATURED_PROJECTS_LIMIT, RELATED_PROJECTS_LIMIT } from "@/features/portfolio/constants";
import type {
  PortfolioFilterState,
  PortfolioListingContent,
  PortfolioProject,
  PortfolioProjectId,
  PortfolioProjectSlug,
} from "@/features/portfolio/types";
import { portfolioContentRepository } from "./portfolio-content.repository";

const portfolioCatalog: PortfolioProject[] = [...portfolioContentRepository.getContent().projects];

export type PortfolioCatalogPort = {
  filterProjects: (filters?: PortfolioFilterState) => PortfolioProject[];
  getContent: typeof portfolioContentRepository.getContent;
  getFeaturedProjects: (limit?: number) => PortfolioProject[];
  getFilterOptions: () => {
    industries: string[];
    services: string[];
    technologies: string[];
  };
  getListingContent: () => PortfolioListingContent;
  getMetadata: (
    slug?: string,
  ) => ReturnType<typeof portfolioContentRepository.getMetadata> | PortfolioProject["seo"];
  getProjectBySlug: (slug: string | undefined) => PortfolioProject | undefined;
  getProjects: () => PortfolioProject[];
  getRelatedProjects: (project: PortfolioProject, limit?: number) => PortfolioProject[];
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values)).sort((first, second) => first.localeCompare(second));
}

function getContent() {
  return portfolioContentRepository.getContent();
}

function getListingContent() {
  return getContent().listing;
}

function getMetadata(slug?: string) {
  return getProjectBySlug(slug)?.seo ?? portfolioContentRepository.getMetadata();
}

function getProjects() {
  return portfolioCatalog;
}

function getFeaturedProjects(limit = FEATURED_PROJECTS_LIMIT) {
  return portfolioCatalog.filter((project) => project.featured).slice(0, limit);
}

function isProjectSlug(slug: string | undefined): slug is PortfolioProjectSlug {
  return Boolean(slug && portfolioCatalog.some((project) => project.slug === slug));
}

function getProjectBySlug(slug: string | undefined) {
  if (!isProjectSlug(slug)) {
    return undefined;
  }

  return portfolioCatalog.find((project) => project.slug === slug);
}

function getProjectsByIds(ids: PortfolioProjectId[]) {
  return ids.reduce<PortfolioProject[]>((result, id) => {
    const project = portfolioCatalog.find((item) => item.id === id);

    if (project) {
      result.push(project);
    }

    return result;
  }, []);
}

function getRelatedProjects(project: PortfolioProject, limit = RELATED_PROJECTS_LIMIT) {
  return getProjectsByIds(project.relatedProjects)
    .filter((relatedProject) => relatedProject.id !== project.id)
    .slice(0, limit);
}

function getFilterOptions() {
  return {
    industries: uniqueSorted(portfolioCatalog.map((project) => project.industry)),
    services: uniqueSorted(portfolioCatalog.flatMap((project) => project.services)),
    technologies: uniqueSorted(portfolioCatalog.flatMap((project) => project.technologies)),
  };
}

function filterProjects(filters: PortfolioFilterState = {}) {
  const search = normalize(filters.search ?? "");

  return portfolioCatalog.filter((project) => {
    const matchesIndustry = filters.industry ? project.industry === filters.industry : true;
    const matchesTechnology = filters.technology
      ? project.technologies.some((technology) => technology === filters.technology)
      : true;
    const matchesService = filters.service
      ? project.services.some((service) => service === filters.service)
      : true;
    const searchableText = normalize(
      [
        project.clientName,
        project.slug,
        project.title,
        project.subtitle,
        project.industry,
        ...project.technologies,
      ].join(" "),
    );
    const matchesSearch = search ? searchableText.includes(search) : true;

    return matchesIndustry && matchesTechnology && matchesService && matchesSearch;
  });
}

export const portfolioCatalogService: PortfolioCatalogPort = {
  filterProjects,
  getContent,
  getFeaturedProjects,
  getFilterOptions,
  getListingContent,
  getMetadata,
  getProjectBySlug,
  getProjects,
  getRelatedProjects,
};
