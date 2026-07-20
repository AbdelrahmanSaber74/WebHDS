import { describe, expect, it } from "vitest";
import { companyService } from "@/features/company/services";
import { buildOrganizationSchema } from "./company-schema";

describe("buildOrganizationSchema", () => {
  it("creates organization schema with contact points and profiles", () => {
    const company = companyService.getCompany();
    const schema = buildOrganizationSchema(
      (key) => key,
      company,
      {
        contact: companyService.getContact(),
        description: "Company description",
        logoUrl: "https://hds.example/logo.svg",
        siteUrl: "https://hds.example",
      },
      companyService.getOffices(),
      companyService.getSocialLinks(),
    );

    expect(schema["@type"]).toBe("Organization");
    expect(schema.sameAs).toHaveLength(9);
    expect(schema.contactPoint).toHaveLength(7);
    expect(schema.address).toHaveLength(2);
    expect(schema.logo).toBe("https://hds.example/logo.svg");
  });
});
