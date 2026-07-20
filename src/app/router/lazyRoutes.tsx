import { lazy } from "react";

export const LazyHomePage = lazy(async () => {
  const module = await import("@/app/pages/HomePage");
  return { default: module.HomePage };
});

export const LazyAboutPage = lazy(async () => {
  const module = await import("@/app/pages/AboutPage");
  return { default: module.AboutPage };
});

export const LazyServicesPage = lazy(async () => {
  const module = await import("@/app/pages/ServicesPage");
  return { default: module.ServicesPage };
});

export const LazyServiceDetailsPage = lazy(async () => {
  const module = await import("@/app/pages/ServiceDetailsPage");
  return { default: module.ServiceDetailsPage };
});

export const LazyPortfolioPage = lazy(async () => {
  const module = await import("@/app/pages/PortfolioPage");
  return { default: module.PortfolioPage };
});

export const LazyPortfolioDetailsPage = lazy(async () => {
  const module = await import("@/app/pages/PortfolioDetailsPage");
  return { default: module.PortfolioDetailsPage };
});

export const LazyContactPage = lazy(async () => {
  const module = await import("@/app/pages/ContactPage");
  return { default: module.ContactPage };
});

export const LazyNotFoundPage = lazy(async () => {
  const module = await import("@/app/pages/NotFoundPage");
  return { default: module.NotFoundPage };
});

export const LazyAppRouteErrorPage = lazy(async () => {
  const module = await import("@/app/pages/AppRouteErrorPage");
  return { default: module.AppRouteErrorPage };
});
