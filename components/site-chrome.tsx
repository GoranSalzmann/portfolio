"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useTheme } from "@/components/theme/theme-provider";
import { HUE_SPAN, HUE_START } from "@/lib/filament";
import { navLinks, site } from "@/lib/site";
import type { ThemePreference } from "@/lib/theme";

const spoolNames: Record<ThemePreference, string> = {
  system: "Automatisch",
  light: "Weiß matt",
  dark: "Schwarz matt",
};

/** Moves the page's filament colour along the spool as you scroll. */
function useScrollHue() {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const t = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      document.documentElement.style.setProperty(
        "--hue",
        String(Math.round(HUE_START + t * HUE_SPAN)),
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

export function Header() {
  const { preference, cycleTheme } = useTheme();
  useScrollHue();

  return (
    <header className="site-header">
      <Link href="/" className="site-name">
        {site.name}
      </Link>
      <nav aria-label="Hauptnavigation" className="site-nav">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className="spool"
        onClick={cycleTheme}
        aria-label={`Farbschema wechseln, aktuell: ${spoolNames[preference]}`}
        suppressHydrationWarning
      >
        <span className="spool-icon" aria-hidden="true" />
        <span suppressHydrationWarning>{spoolNames[preference]}</span>
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
      <p>Built with Next.js & Tailwind CSS</p>
    </footer>
  );
}
