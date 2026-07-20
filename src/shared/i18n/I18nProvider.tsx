import type { PropsWithChildren } from "react";
import { useEffect, useMemo, useState } from "react";
import { defaultLocale, isSupportedLocale, localeDirections } from "@/config";
import type { Locale } from "@/config";
import { dictionaries } from "./dictionaries";
import { I18nContext } from "./i18nContext";
import type { I18nContextValue } from "./i18nContext";

function getInitialLocale(): Locale {
  const storedLocale = window.localStorage.getItem("hds-locale");

  if (storedLocale && isSupportedLocale(storedLocale)) {
    return storedLocale;
  }

  return defaultLocale;
}

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const direction = localeDirections[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    window.localStorage.setItem("hds-locale", locale);
  }, [direction, locale]);

  const value = useMemo<I18nContextValue>(() => {
    const dictionary: Record<string, string> = dictionaries[locale];

    return {
      locale,
      direction,
      setLocale: setLocaleState,
      t: (key) => dictionary[key] ?? key,
    };
  }, [direction, locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
