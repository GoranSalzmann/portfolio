"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
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
}: {
  href: string;
  label: string;
  activeSection: string | null;
  onNavigate?: () => void;
  className?: string;
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
      className={cn(
        "text-sm transition-colors",
        isActive
          ? "text-text-primary"
          : "text-text-secondary hover:text-text-primary",
        className
      )}
    >
      {label}
    </Link>
  );
}

function MobileNav({
  activeSection,
}: {
  activeSection: string | null;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        className="relative h-6 w-6 md:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
      >
        <Menu
          size={24}
          className={cn(
            "absolute inset-0 text-text-primary transition-opacity duration-200",
            open ? "opacity-0" : "opacity-100"
          )}
        />
        <X
          size={24}
          className={cn(
            "absolute inset-0 text-text-primary transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0"
          )}
        />
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Menü schließen"
          />
          <div className="relative z-40 border-t border-warm-grey/50 bg-deep-space/98 px-[5vw] py-8 md:hidden">
            <ul className="mb-8 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavAnchor
                    href={link.href}
                    label={link.label}
                    activeSection={activeSection}
                    onNavigate={() => setOpen(false)}
                    className="block text-lg text-text-primary"
                  />
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.icon !== "mail" ? "_blank" : undefined}
                    rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className="text-text-secondary transition-colors hover:text-amber"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const highlightedSection = pathname === "/" ? activeSection : null;

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
        "fixed left-0 right-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-warm-grey/50 bg-deep-space/95"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-[5vw] py-5">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-text-primary"
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
          <div className="flex items-center gap-4 border-l border-warm-grey pl-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon !== "mail" ? "_blank" : undefined}
                  rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="text-text-secondary transition-colors hover:text-amber"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <MobileNav key={pathname} activeSection={highlightedSection} />
      </nav>
    </header>
  );
}
