const TRUE_VALUES = new Set(["true", "1", "yes", "on"]);

type PublicEnvKey = `VITE_${string}`;

function readPublicEnv(key: PublicEnvKey, fallback = ""): string {
  return import.meta.env[key] ?? fallback;
}

function readBooleanEnv(key: PublicEnvKey, fallback: boolean): boolean {
  const rawValue = readPublicEnv(key);

  if (!rawValue) {
    return fallback;
  }

  return TRUE_VALUES.has(rawValue.toLowerCase());
}

export const envConfig = {
  appName: readPublicEnv("VITE_APP_NAME", "HDS"),
  appUrl: readPublicEnv("VITE_APP_URL", "https://hds.example"),
  apiBaseUrl: readPublicEnv("VITE_API_BASE_URL", "/api"),
  defaultLocale: readPublicEnv("VITE_DEFAULT_LOCALE", "en"),
  flags: {
    blog: readBooleanEnv("VITE_ENABLE_BLOG", true),
    careers: readBooleanEnv("VITE_ENABLE_CAREERS", true),
    contactForm: readBooleanEnv("VITE_ENABLE_CONTACT_FORM", true),
    aiAssistant: readBooleanEnv("VITE_ENABLE_AI_ASSISTANT", false),
    darkMode: readBooleanEnv("VITE_ENABLE_DARK_MODE", true),
  },
} as const;
