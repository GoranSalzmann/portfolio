"use client";

import { useEffect, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import {
  applyTheme,
  getPreferenceServerSnapshot,
  getPreferenceSnapshot,
  setThemePreference,
  subscribePreference,
  type ThemePreference,
} from "@/lib/theme";

const options: { value: ThemePreference; label: string }[] = [
  { value: "system", label: "Auto" },
  { value: "light", label: "Hell" },
  { value: "dark", label: "Dunkel" },
];

export function ThemeToggle({ className }: { className?: string }) {
  const preference = useSyncExternalStore(
    subscribePreference,
    getPreferenceSnapshot,
    getPreferenceServerSnapshot
  );

  useEffect(() => {
    applyTheme(preference);
    if (preference !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = () => applyTheme("system");
    media.addEventListener("change", follow);
    return () => media.removeEventListener("change", follow);
  }, [preference]);

  return (
    <div
      role="group"
      aria-label="Farbschema"
      className={cn("flex border border-ink", className)}
    >
      {options.map(({ value, label }) => {
        const selected = preference === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={selected}
            onClick={() => setThemePreference(value)}
            className={cn(
              "label px-2 py-1.5 transition-colors",
              selected
                ? "bg-ink text-paper"
                : "text-muted hover:text-ink"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
