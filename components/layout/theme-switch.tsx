"use client";

import { useRef } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { THEME_CYCLE, type ThemePreference } from "@/lib/theme";

const options: { value: ThemePreference; label: string; Icon: typeof Sun }[] = [
  { value: "system", label: "System", Icon: Monitor },
  { value: "light", label: "Tag", Icon: Sun },
  { value: "dark", label: "Nacht", Icon: Moon },
];

export function ThemeSwitch() {
  const { preference, setPreference } = useTheme();
  const refs = useRef(new Map<ThemePreference, HTMLButtonElement>());
  const index = Math.max(0, THEME_CYCLE.indexOf(preference));

  const select = (value: ThemePreference) => {
    setPreference(value);
    refs.current.get(value)?.focus();
  };

  return (
    <div
      role="radiogroup"
      aria-label="Farbschema"
      className="theme-switch"
      onKeyDown={(e) => {
        const delta =
          e.key === "ArrowRight" || e.key === "ArrowDown"
            ? 1
            : e.key === "ArrowLeft" || e.key === "ArrowUp"
              ? -1
              : 0;
        if (!delta) return;
        e.preventDefault();
        select(THEME_CYCLE[(index + delta + THEME_CYCLE.length) % THEME_CYCLE.length]);
      }}
    >
      {options.map(({ value, label, Icon }) => {
        const selected = preference === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={label}
            title={label}
            tabIndex={selected ? 0 : -1}
            ref={(node) => {
              if (node) refs.current.set(value, node);
              else refs.current.delete(value);
            }}
            onClick={() => select(value)}
          >
            <Icon size={13} strokeWidth={1.75} />
          </button>
        );
      })}
    </div>
  );
}
