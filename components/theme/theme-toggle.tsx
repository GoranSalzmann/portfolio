"use client";

import { useTheme } from "@/components/theme/theme-provider";
import type { ThemePreference } from "@/lib/theme";

const options: { value: ThemePreference; label: string }[] = [
  { value: "system", label: "Auto" },
  { value: "light", label: "Hell" },
  { value: "dark", label: "Dunkel" },
];

export function ThemeToggle() {
  const { preference, setPreference } = useTheme();

  return (
    <div
      role="group"
      aria-label="Farbschema"
      className="flex font-mono text-[0.6875rem]"
    >
      {options.map(({ value, label }) => {
        const selected = preference === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={selected}
            onClick={() => setPreference(value)}
            className={
              selected
                ? "cursor-pointer border border-ink bg-ink px-2 py-1 text-paper first:rounded-l-[3px] last:rounded-r-[3px]"
                : "cursor-pointer border border-rule px-2 py-1 text-dim first:rounded-l-[3px] last:rounded-r-[3px] hover:text-ink"
            }
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
