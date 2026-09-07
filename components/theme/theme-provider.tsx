"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  applyTheme,
  cyclePreference,
  getPreferenceServerSnapshot,
  getPreferenceSnapshot,
  setThemePreference,
  subscribePreference,
  type ResolvedTheme,
  type ThemePreference,
} from "@/lib/theme";

type ThemeContextValue = {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  cycleTheme: () => void;
  setPreference: (preference: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function subscribeSystemTheme(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getSystemIsDarkSnapshot() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getSystemIsDarkServerSnapshot() {
  return false;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const preference = useSyncExternalStore(
    subscribePreference,
    getPreferenceSnapshot,
    getPreferenceServerSnapshot
  );
  const systemIsDark = useSyncExternalStore(
    subscribeSystemTheme,
    getSystemIsDarkSnapshot,
    getSystemIsDarkServerSnapshot
  );
  const resolved: ResolvedTheme =
    preference === "system" ? (systemIsDark ? "dark" : "light") : preference;

  useEffect(() => {
    applyTheme(preference);
  }, [preference, systemIsDark]);

  const setPreference = useCallback((next: ThemePreference) => {
    setThemePreference(next);
  }, []);

  const cycleTheme = useCallback(() => {
    setThemePreference(cyclePreference(preference));
  }, [preference]);

  const value = useMemo(
    () => ({ preference, resolved, cycleTheme, setPreference }),
    [preference, resolved, cycleTheme, setPreference]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
