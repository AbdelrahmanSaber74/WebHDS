export function getExternalLinkProps(isExternal?: boolean) {
  return isExternal ? { rel: "noreferrer", target: "_blank" } : {};
}

export function createAriaLabel(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}
