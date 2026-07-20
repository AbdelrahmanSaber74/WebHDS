import { appConfig } from "@/config";

export type StructuredData = Record<string, unknown>;

export type SeoMetadata = {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  imageUrl?: string;
  type?: "website" | "article" | "profile";
  structuredData?: StructuredData;
};

export type SocialMetadata = {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
};

export function buildPageTitle(title: string) {
  return `${title} | ${appConfig.name}`;
}

export function buildCanonicalUrl(path: string) {
  return new URL(path, appConfig.url).toString();
}

export function buildOpenGraphMetadata(
  metadata: SocialMetadata,
  type: SeoMetadata["type"] = "website",
) {
  return {
    "og:title": metadata.title,
    "og:description": metadata.description,
    "og:type": type,
    "og:url": metadata.url,
    ...(metadata.imageUrl ? { "og:image": metadata.imageUrl } : {}),
  };
}

export function buildTwitterMetadata(metadata: SocialMetadata) {
  return {
    "twitter:card": metadata.imageUrl ? "summary_large_image" : "summary",
    "twitter:title": metadata.title,
    "twitter:description": metadata.description,
    ...(metadata.imageUrl ? { "twitter:image": metadata.imageUrl } : {}),
  };
}

export function upsertMetaTag(
  name: string,
  content: string,
  attribute: "name" | "property" = "name",
) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function upsertCanonicalLink(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = url;
}

export function upsertStructuredData(
  data: StructuredData | undefined,
  elementId = "structured-data",
) {
  const existingElement = document.getElementById(elementId);

  existingElement?.remove();

  if (!data) {
    return;
  }

  const element = document.createElement("script");
  element.id = elementId;
  element.type = "application/ld+json";
  element.text = JSON.stringify(data);
  document.head.appendChild(element);
}

export function applySeoMetadata(metadata: SeoMetadata) {
  const title = buildPageTitle(metadata.title);
  const canonicalUrl = buildCanonicalUrl(metadata.canonicalPath);
  const socialMetadata = {
    title,
    description: metadata.description,
    url: canonicalUrl,
    imageUrl: metadata.imageUrl,
  };

  document.title = title;
  upsertMetaTag("description", metadata.description);

  if (metadata.keywords) {
    upsertMetaTag("keywords", metadata.keywords);
  }

  Object.entries(buildOpenGraphMetadata(socialMetadata, metadata.type)).forEach(
    ([name, content]) => {
      upsertMetaTag(name, content, "property");
    },
  );

  Object.entries(buildTwitterMetadata(socialMetadata)).forEach(([name, content]) => {
    upsertMetaTag(name, content);
  });

  upsertCanonicalLink(canonicalUrl);
  upsertStructuredData(metadata.structuredData);

  return { canonicalUrl, title };
}
