import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

const restrictedSharedImports = ["@/app/*", "@/features/*"];
const restrictedLibImports = ["@/app/*", "@/features/*"];
const restrictedThemeImports = ["@/app/*", "@/features/*"];
const restrictedConfigImports = ["@/app/*", "@/features/*"];

export default tseslint.config(
  {
    ignores: ["dist", "coverage", "node_modules"],
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
      "no-restricted-imports": [
        "error",
        {
          patterns: ["../*/*/*/*"],
        },
      ],
    },
  },
  {
    files: ["src/shared/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": ["error", { patterns: restrictedSharedImports }],
    },
  },
  {
    files: ["src/lib/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": ["error", { patterns: restrictedLibImports }],
    },
  },
  {
    files: ["src/theme/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": ["error", { patterns: restrictedThemeImports }],
    },
  },
  {
    files: ["src/config/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": ["error", { patterns: restrictedConfigImports }],
    },
  },
  prettier,
);
