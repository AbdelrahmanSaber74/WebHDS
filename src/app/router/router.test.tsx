import { matchRoutes } from "react-router";
import { describe, expect, it } from "vitest";
import { appRoutes } from "./router";

describe("app routes", () => {
  it("matches the services listing route", () => {
    const matches = matchRoutes(appRoutes, "/services");
    const paths = matches?.map((match) => (match.route as { path?: string }).path);

    expect(paths).toContain("/services");
  });

  it("matches dynamic service detail routes", () => {
    const matches = matchRoutes(appRoutes, "/services/web-development");
    const paths = matches?.map((match) => (match.route as { path?: string }).path);

    expect(paths).toContain("/services/:slug");
    expect(matches?.at(-1)?.params.slug).toBe("web-development");
  });

  it("matches the portfolio listing route", () => {
    const matches = matchRoutes(appRoutes, "/portfolio");
    const paths = matches?.map((match) => (match.route as { path?: string }).path);

    expect(paths).toContain("/portfolio");
  });

  it("matches dynamic portfolio case study routes", () => {
    const matches = matchRoutes(appRoutes, "/portfolio/careflow-command");
    const paths = matches?.map((match) => (match.route as { path?: string }).path);

    expect(paths).toContain("/portfolio/:slug");
    expect(matches?.at(-1)?.params.slug).toBe("careflow-command");
  });
});
