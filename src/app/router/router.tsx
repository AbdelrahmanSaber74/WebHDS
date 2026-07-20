import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { routesConfig } from "@/config";
import { Loader } from "@/shared/ui";
import { AppShell } from "@/app/AppShell";
import {
  LazyAboutPage,
  LazyAppRouteErrorPage,
  LazyContactPage,
  LazyHomePage,
  LazyNotFoundPage,
  LazyPortfolioDetailsPage,
  LazyPortfolioPage,
  LazyServiceDetailsPage,
  LazyServicesPage,
} from "./lazyRoutes";

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<Loader />}>{element}</Suspense>;
}

export const appRoutes = [
  {
    element: <AppShell />,
    errorElement: withSuspense(<LazyAppRouteErrorPage />),
    children: [
      { path: routesConfig.home.path, element: withSuspense(<LazyHomePage />) },
      { path: routesConfig.about.path, element: withSuspense(<LazyAboutPage />) },
      { path: routesConfig.services.path, element: withSuspense(<LazyServicesPage />) },
      { path: routesConfig.serviceDetails.path, element: withSuspense(<LazyServiceDetailsPage />) },
      { path: routesConfig.portfolio.path, element: withSuspense(<LazyPortfolioPage />) },
      {
        path: routesConfig.portfolioDetails.path,
        element: withSuspense(<LazyPortfolioDetailsPage />),
      },
      { path: routesConfig.contact.path, element: withSuspense(<LazyContactPage />) },
      { path: routesConfig.notFound.path, element: withSuspense(<LazyNotFoundPage />) },
    ],
  },
];

export const router = createBrowserRouter(appRoutes);
