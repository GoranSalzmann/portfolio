"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header-bar">
        <Link href="/" className="site-name" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav
          id="site-nav"
          className="site-nav"
          data-open={open}
          aria-label="Hauptnavigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-tools">
          <ThemeToggle />
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Schließen" : "Menü"}
          </button>
        </div>
      </div>
    </header>
  );
}
