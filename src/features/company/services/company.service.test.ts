import { describe, expect, it } from "vitest";
import { companyService } from "./company.service";

describe("companyService", () => {
  it("returns company core data through the content service", () => {
    expect(companyService.getContent().company.name).toBe("HDS");
    expect(companyService.getCompany().name).toBe("HDS");
    expect(companyService.getCompany().foundedYear).toBe(2018);
  });

  it("returns offices, contacts, and social links", () => {
    expect(companyService.getOffices()).toHaveLength(2);
    expect(companyService.getContact().emails).toHaveLength(2);
    expect(companyService.getSocialLinks()).toHaveLength(0);
  });

  it("returns statistics, technologies, timeline, leadership, and organization metadata", () => {
    expect(companyService.getStatistics()).toHaveLength(4);
    expect(companyService.getTechnologies()).toHaveLength(8);
    expect(companyService.getTimeline()).toHaveLength(3);
    expect(companyService.getLeadership()).toHaveLength(2);
    expect(companyService.getMetadata().organizationName).toBe("HDS Company LLC");
  });
});
