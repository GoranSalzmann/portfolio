"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/theme/theme-provider";
import { navLinks, site } from "@/lib/site";

function ThemeSwitch() {
  const { resolved, setPreference } = useTheme();
  const next = resolved === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => setPreference(next)}
      className="nav-link"
      aria-label={next === "light" ? "Zur Tagansicht wechseln" : "Zur Nachtansicht wechseln"}
      suppressHydrationWarning
    >
      <span className="theme-glyph" />
      <span suppressHydrationWarning>{next === "light" ? "Tag" : "Nacht"}</span>
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Unlock scrolling before the router scrolls to the target section.
  const close = () => {
    document.body.style.overflow = "";
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const wide = window.matchMedia("(min-width: 768px)");
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell flex h-18 items-center justify-between">
        <Link href="/" className="font-display text-xl italic" onClick={close}>
          {site.name}
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <ThemeSwitch />
        </nav>

        <div className="flex items-center gap-5 md:hidden">
          <ThemeSwitch />
          <button
            type="button"
            className="nav-link"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Schließen" : "Menü"}
          </button>
        </div>
      </div>

      <nav id="menu" aria-label="Hauptnavigation" className="menu-sheet md:hidden" hidden={!open}>
        <ul className="shell flex h-full flex-col justify-center gap-2 pb-24">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="block py-2 font-display text-5xl font-light italic"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
