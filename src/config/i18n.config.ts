export const supportedLocales = ["en", "ar"] as const;

export type Locale = (typeof supportedLocales)[number];
export type Direction = "ltr" | "rtl";

export const defaultLocale: Locale = "en";

export const localeDirections: Record<Locale, Direction> = {
  en: "ltr",
  ar: "rtl",
};

export function isSupportedLocale(locale: string): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}
