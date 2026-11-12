"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/theme-provider";
import type { ThemePreference } from "@/lib/theme";

const modes: Record<
  ThemePreference,
  { label: string; next: string; Icon: typeof Sun }
> = {
  system: { label: "System", next: "Tagkarte", Icon: Monitor },
  light: { label: "Tag", next: "Nachtkarte", Icon: Sun },
  dark: { label: "Nacht", next: "Systemeinstellung", Icon: Moon },
};

export function ThemeToggle() {
  const { preference, cycleTheme } = useTheme();
  const { label, next, Icon } = modes[preference];

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycleTheme}
      aria-label={`Farbschema: ${label}. Wechseln zu ${next}`}
    >
      <Icon size={15} aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
