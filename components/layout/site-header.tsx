"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site, socialLinks } from "@/lib/site";
import { ThemeSwitch } from "@/components/layout/theme-switch";

function sectionIdOf(href: string) {
  return href.split("#")[1] ?? null;
}

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const ids = navLinks.map((l) => sectionIdOf(l.href)).filter(Boolean) as string[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const active = useActiveSection(isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpenPath(null);
    const id = sectionIdOf(href);
    if (!isHome || !id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  const links = (
    <>
      {navLinks.map((link) => {
        const id = sectionIdOf(link.href);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className="nav-link"
              aria-current={id && id === active ? "location" : undefined}
              onClick={(e) => navigate(e, link.href)}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-open={open}
      data-hero={isHome}
    >
      <div className="wrap">
        <Link href="/" className="brand" onClick={() => setOpenPath(null)}>
          <span className="brand-star" aria-hidden />
          {site.name}
        </Link>

        <nav aria-label="Hauptnavigation">
          <ul className="nav-list">{links}</ul>
        </nav>

        <div className="header-tools">
          <ThemeSwitch />
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-panel"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? "Schließen" : "Menü"}
          </button>
        </div>
      </div>

      <div
        id="mobile-panel"
        className="mobile-panel"
        data-state={open ? "open" : "closed"}
        inert={!open}
      >
        <nav aria-label="Mobile Navigation">
          <ul>{links}</ul>
        </nav>
        <ul className="contact-links" style={{ marginTop: 0 }}>
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                className="link"
                href={link.href}
                {...(link.icon !== "mail"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
