import { portfolioCatalogService } from "@/features/portfolio/services";

export function usePortfolioProject(slug: string | undefined) {
  const project = portfolioCatalogService.getProjectBySlug(slug);

  return {
    project,
    relatedProjects: project ? portfolioCatalogService.getRelatedProjects(project) : [],
  };
}
