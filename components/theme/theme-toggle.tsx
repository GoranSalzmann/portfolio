"use client";

import { useRef } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { THEME_CYCLE, type ThemePreference } from "@/lib/theme";

const options: { value: ThemePreference; label: string; Icon: typeof Sun }[] = [
  { value: "system", label: "System", Icon: Monitor },
  { value: "light", label: "Hell", Icon: Sun },
  { value: "dark", label: "Dunkel", Icon: Moon },
];

export function ThemeToggle() {
  const { preference, setPreference } = useTheme();
  const activeIndex = Math.max(0, THEME_CYCLE.indexOf(preference));
  const refs = useRef(new Map<ThemePreference, HTMLButtonElement>());

  const select = (next: ThemePreference) => {
    setPreference(next);
    refs.current.get(next)?.focus();
  };
  const move = (delta: number) =>
    select(THEME_CYCLE[(activeIndex + delta + THEME_CYCLE.length) % THEME_CYCLE.length]);

  return (
    <div
      role="radiogroup"
      aria-label="Farbschema"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          move(1);
        }
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          move(-1);
        }
      }}
      className="inline-flex rounded-full border border-line p-0.5"
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
            ref={(n) => {
              if (n) refs.current.set(value, n);
              else refs.current.delete(value);
            }}
            onClick={() => select(value)}
            className={`grid h-8 w-8 place-items-center rounded-full transition-colors motion-reduce:transition-none ${
              selected ? "bg-fg text-bg" : "text-muted hover:text-fg"
            }`}
          >
            <Icon size={14} />
          </button>
        );
      })}
    </div>
  );
}
