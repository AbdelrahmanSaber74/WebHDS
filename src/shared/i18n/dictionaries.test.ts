import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { dictionaries } from "./dictionaries";

const TRANSLATION_KEY_PATTERN =
  /["'`]((?:common|errors|seo|navigation|home|about|company|services|portfolio)\.[A-Za-z0-9._{}-]+)["'`]/g;
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
});
