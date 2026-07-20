import { describe, expect, it } from "vitest";
import {
  applySeoMetadata,
  buildCanonicalUrl,
  buildOpenGraphMetadata,
  buildTwitterMetadata,
} from "./seo";

describe("seo utilities", () => {
  it("builds canonical urls from configured app url", () => {
    expect(buildCanonicalUrl("/services")).toBe("https://hds.example/services");
  });

  it("builds social metadata without requiring an image", () => {
    expect(
      buildOpenGraphMetadata({
        description: "Description",
        title: "Title",
        url: "https://hds.example/services",
      }),
    ).toMatchObject({
      "og:description": "Description",
      "og:title": "Title",
      "og:type": "website",
    });

    expect(
      buildTwitterMetadata({
        description: "Description",
        title: "Title",
        url: "https://hds.example/services",
      }),
    ).toMatchObject({ "twitter:card": "summary" });
  });

  it("applies metadata, canonical, and structured data to the document", () => {
    const result = applySeoMetadata({
      canonicalPath: "/services",
      description: "Services description",
      keywords: "services, hds",
      structuredData: { "@type": "WebPage" },
      title: "Services",
    });

    expect(result.title).toBe("Services | HDS");
    expect(document.title).toBe("Services | HDS");
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      "Services description",
    );
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://hds.example/services",
    );
    expect(document.getElementById("structured-data")?.textContent).toContain("WebPage");
  });
});
