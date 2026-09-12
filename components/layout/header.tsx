"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons";
import { navLinks, site, socialLinks } from "@/lib/site";
import { cn } from "@/lib/cn";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
};

function getSectionId(href: string) {
  const hash = href.split("#")[1];
  return hash ?? null;
}

function NavAnchor({
  href,
  label,
  activeSection,
  onNavigate,
  className,
  children,
}: {
  href: string;
  label: string;
  activeSection: string | null;
  onNavigate?: () => void;
  className?: string;
  children?: ReactNode;
}) {
  const pathname = usePathname();
  const sectionId = getSectionId(href);
  const isHome = pathname === "/";
  const isActive = isHome && sectionId !== null && activeSection === sectionId;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome || !sectionId) return;

    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
    onNavigate?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-current={isActive ? "location" : undefined}
      className={cn(
        "text-sm transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted hover:text-foreground",
        className
      )}
    >
      {children ?? label}
    </Link>
  );
}

function MobileNav({
  activeSection,
  open,
  onOpenChange,
}: {
  activeSection: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const setMenuOpen = (next: boolean | ((value: boolean) => boolean)) => {
    onOpenChange(typeof next === "function" ? next(open) : next);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) onOpenChange(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, [onOpenChange]);

  return (
    <>
      <button
        type="button"
        className="relative z-50 h-6 w-6 md:hidden"
        onClick={() => setMenuOpen((value) => !value)}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        <Menu
          size={24}
          className={cn(
            "absolute inset-0 text-foreground transition-opacity duration-200",
            open ? "opacity-0" : "opacity-100"
          )}
        />
        <X
          size={24}
          className={cn(
            "absolute inset-0 text-foreground transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0"
          )}
        />
      </button>

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        inert={!open}
        data-state={open ? "open" : "closed"}
        className={cn(
          "mobile-nav-panel fixed inset-x-0 bottom-0 top-[4.5rem] z-40 flex flex-col bg-background md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <nav className="flex min-h-0 flex-1 flex-col px-[5vw] pt-4">
          <ul className="flex min-h-0 flex-1 flex-col justify-center gap-1 overflow-y-auto py-4">
            {navLinks.map((link, index) => {
              const sectionId = getSectionId(link.href);
              const isActive = sectionId !== null && activeSection === sectionId;

              return (
                <li key={link.href}>
                  <NavAnchor
                    href={link.href}
                    label={link.label}
                    activeSection={activeSection}
                    onNavigate={() => setMenuOpen(false)}
                    className={cn(
                      "group flex items-baseline gap-5 border-l-2 py-3 pl-4",
                      isActive
                        ? "border-accent"
                        : "border-transparent hover:border-border"
                    )}
                  >
                    <span className="font-mono text-xs tracking-[0.18em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[clamp(1.75rem,7vw,2.5rem)] font-semibold leading-none tracking-tight">
                      {link.label}
                    </span>
                  </NavAnchor>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto border-t border-border/50 px-[5vw] pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.icon !== "mail" ? "_blank" : undefined}
                    rel={
                      link.icon !== "mail" ? "noopener noreferrer" : undefined
                    }
                    aria-label={link.label}
                    tabIndex={open ? 0 : -1}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <p className="font-mono text-xs tracking-wider text-muted">
              {site.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const highlightedSection = pathname === "/" ? activeSection : null;
  const menuOpen = menuPath === pathname;
  const setMenuOpen = useCallback(
    (open: boolean) => setMenuPath(open ? pathname : null),
    [pathname]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = navLinks
      .map((link) => getSectionId(link.href))
      .filter(Boolean) as string[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 h-[4.5rem] transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-border/50 bg-background"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-[5vw]">
        <Link
          href="/"
          onClick={() => setMenuPath(null)}
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          {site.name.toUpperCase()}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavAnchor
                  href={link.href}
                  label={link.label}
                  activeSection={highlightedSection}
                />
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-border pl-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon !== "mail" ? "_blank" : undefined}
                  rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              );
            })}
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <MobileNav
            activeSection={highlightedSection}
            open={menuOpen}
            onOpenChange={setMenuOpen}
          />
        </div>
      </nav>
    </header>
  );
}
