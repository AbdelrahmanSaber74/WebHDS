import { useCallback, useEffect, useMemo, useState } from "react";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "hds-theme-mode";

function getInitialThemeMode(): ThemeMode {
  const storedMode = window.localStorage.getItem(STORAGE_KEY);

  if (storedMode === "light" || storedMode === "dark") {
    return storedMode;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemeMode(mode: ThemeMode) {
  document.documentElement.classList.toggle("dark", mode === "dark");
  document.documentElement.dataset.theme = mode;
  document.documentElement.style.colorScheme = mode;
}

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(getInitialThemeMode);

  useEffect(() => {
    applyThemeMode(mode);
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggleThemeMode = useCallback(() => {
    setMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));
  }, []);

  return useMemo(
    () => ({
      isDark: mode === "dark",
      mode,
      setMode,
      toggleThemeMode,
    }),
    [mode, toggleThemeMode],
  );
}
