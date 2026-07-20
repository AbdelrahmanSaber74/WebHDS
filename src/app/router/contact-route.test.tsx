import { describe, expect, it } from "vitest";
import { routesConfig } from "@/config";
import { appRoutes } from "./router";

describe("contact route", () => {
  it("registers the contact page as a lazy route", () => {
    const childRoutes = appRoutes[0]?.children ?? [];

    expect(routesConfig.contact.path).toBe("/contact");
    expect(childRoutes.some((route) => route.path === routesConfig.contact.path)).toBe(true);
  });
});
