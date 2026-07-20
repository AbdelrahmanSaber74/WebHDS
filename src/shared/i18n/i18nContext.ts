import { createContext } from "react";
import type { Direction, Locale } from "@/config";

export type I18nContextValue = {
  locale: Locale;
  direction: Direction;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

export const I18nContext = createContext<I18nContextValue | null>(null);
