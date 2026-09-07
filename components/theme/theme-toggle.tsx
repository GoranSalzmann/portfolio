"use client";

import { useRef } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import { cn } from "@/lib/cn";
import { THEME_CYCLE, type ThemePreference } from "@/lib/theme";

const options: {
  value: ThemePreference;
  label: string;
  Icon: typeof Sun;
}[] = [
  { value: "system", label: "System", Icon: Monitor },
  { value: "light", label: "Hell", Icon: Sun },
  { value: "dark", label: "Dunkel", Icon: Moon },
];

export function ThemeToggle({ className }: { className?: string }) {
  const { preference, setPreference } = useTheme();
  const activeIndex = Math.max(0, THEME_CYCLE.indexOf(preference));
  const buttonsRef = useRef(new Map<ThemePreference, HTMLButtonElement>());

  const select = (next: ThemePreference) => {
    setPreference(next);
    buttonsRef.current.get(next)?.focus();
  };

  const moveSelection = (delta: number) => {
    const nextIndex =
      (activeIndex + delta + THEME_CYCLE.length) % THEME_CYCLE.length;
    select(THEME_CYCLE[nextIndex]);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Farbschema"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          event.preventDefault();
          moveSelection(1);
        }
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          event.preventDefault();
          moveSelection(-1);
        }
      }}
      className={cn(
        "relative h-8 w-[5.5rem] border border-border p-0.5",
        className
      )}
    >
      <div className="relative grid h-full grid-cols-3">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-accent-10 transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />
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
                if (node) buttonsRef.current.set(value, node);
                else buttonsRef.current.delete(value);
              }}
              onClick={() => select(value)}
              className={cn(
                "relative z-10 grid place-items-center transition-colors",
                selected
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              )}
            >
              <Icon size={14} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
