import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { dictionaries } from "./dictionaries";

const TRANSLATION_KEY_PATTERN =
  /["'`]((?:common|errors|seo|navigation|home|about|company|services|portfolio|contact)\.[A-Za-z0-9._{}-]+)["'`]/g;
const MOJIBAKE_PATTERN = /[\u00d8\u00d9\u00c3\u00c2\ufffd]/;
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/;
const ARABIC_CHARACTER_PATTERN = /[\u0600-\u06FF]/;
const INTENTIONAL_LATIN_ARABIC_KEYS =
  /(?:\.title$|\.clientName$|\.technologies\.|\.social\.|\.placeholder|\.locale\.|\.year$|\.duration$|\.teamSize$)/;
const INTENTIONAL_LATIN_ARABIC_VALUES =
  /^(HDS|EN|AR|404|UI\/UX|DevOps|SaaS|React|Node\.js|AWS|Azure|Figma|PostgreSQL|Redis|Kubernetes|Terraform|Stripe|Mapbox|GraphQL|REST|HIPAA|SOC 2|ISO|work@company\.com|you@company\.com|\+|\d|[\d\s+\-/%.,:]+)$/i;
const IGNORED_DIRECTORIES = new Set(["node_modules", "dist", ".git"]);

function walkFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    if (IGNORED_DIRECTORIES.has(entry)) {
      return [];
    }

    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      return walkFiles(path);
    }

    return /\.(ts|tsx)$/.test(entry) ? [path] : [];
  });
}

function collectReferencedTranslationKeys() {
  return new Set(
    walkFiles("src").flatMap((file) => {
      const source = readFileSync(file, "utf8");
      return [...source.matchAll(TRANSLATION_KEY_PATTERN)].map((match) => match[1]);
    }),
  );
}

describe("i18n dictionaries", () => {
  it("keeps English and Arabic dictionaries structurally identical", () => {
    const englishKeys = Object.keys(dictionaries.en).sort();
    const arabicKeys = Object.keys(dictionaries.ar).sort();

    expect(arabicKeys).toEqual(englishKeys);
  });

  it("contains every translation key referenced by source files", () => {
    const referencedKeys = collectReferencedTranslationKeys();
    const missingKeys = [...referencedKeys].filter(
      (key) => !(key in dictionaries.en) || !(key in dictionaries.ar),
    );

    expect(missingKeys).toEqual([]);
  });

  it("does not use raw translation keys as dictionary values", () => {
    const rawValues = Object.entries(dictionaries).flatMap(([locale, dictionary]) =>
      Object.entries(dictionary)
        .filter(([key, value]) => key === value)
        .map(([key]) => `${locale}:${key}`),
    );

    expect(rawValues).toEqual([]);
  });

  it("does not contain mojibake or control characters", () => {
    const corruptedValues = Object.entries(dictionaries).flatMap(([locale, dictionary]) =>
      Object.entries(dictionary)
        .filter(
          ([, value]) => MOJIBAKE_PATTERN.test(value) || CONTROL_CHARACTER_PATTERN.test(value),
        )
        .map(([key]) => `${locale}:${key}`),
    );

    expect(corruptedValues).toEqual([]);
  });

  it("keeps Arabic user-facing copy localized unless intentionally language-neutral", () => {
    const latinOnlyArabicValues = Object.entries(dictionaries.ar)
      .filter(([key, value]) => {
        if (ARABIC_CHARACTER_PATTERN.test(value)) {
          return false;
        }

        return (
          !INTENTIONAL_LATIN_ARABIC_KEYS.test(key) &&
          !INTENTIONAL_LATIN_ARABIC_VALUES.test(value.trim())
        );
      })
      .map(([key]) => key);

    expect(latinOnlyArabicValues).toEqual([]);
  });
});
