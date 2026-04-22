"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { site, navLinks, socialLinks } from "../data/site";
import { Icon } from "@/lib/icons";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const animateOpen = useCallback(() => {
    const menu = menuRef.current;
    const backdrop = backdropRef.current;
    const links = linksRef.current;
    const socials = socialsRef.current;
    if (!menu || !backdrop || !links || !socials) return;

    if (prefersReducedMotion.current) {
      gsap.set(menu, { opacity: 1, y: 0 });
      gsap.set(backdrop, { opacity: 1 });
      gsap.set([...links.children, ...socials.children], { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline();
    timelineRef.current = tl;

    tl.set(menu, { display: "block" })
      .fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "power2.out" }
      )
      .fromTo(
        menu,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
        "<"
      )
      .fromTo(
        links.children,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.04,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .fromTo(
        socials.children,
        { opacity: 0, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.04,
          ease: "power2.out",
        },
        "-=0.15"
      );
  }, []);

  const animateClose = useCallback(() => {
    const menu = menuRef.current;
    const backdrop = backdropRef.current;
    const links = linksRef.current;
    const socials = socialsRef.current;
    if (!menu || !backdrop || !links || !socials) return;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    if (prefersReducedMotion.current) {
      gsap.set(menu, { display: "none", opacity: 0 });
      gsap.set(backdrop, { opacity: 0, display: "none" });
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(menu, { display: "none" });
        gsap.set(backdrop, { display: "none" });
      },
    });

    tl.to(links.children, {
      opacity: 0,
      y: -6,
      duration: 0.15,
      stagger: 0.02,
      ease: "power2.in",
    })
      .to(
        socials.children,
        { opacity: 0, duration: 0.12, stagger: 0.02, ease: "power2.in" },
        "<"
      )
      .to(menu, { opacity: 0, y: -8, duration: 0.2, ease: "power2.in" }, "-=0.08")
      .to(backdrop, { opacity: 0, duration: 0.2, ease: "power2.in" }, "<");
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      animateOpen();
    } else {
      animateClose();
    }
  }, [mobileOpen, animateOpen, animateClose]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 [will-change:transform] ${
        scrolled
          ? "bg-deep-space/95 border-b border-warm-grey/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-[5vw] py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-text-primary tracking-tight text-lg"
        >
          {site.name.toUpperCase()}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4 border-l border-warm-grey pl-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-secondary hover:text-amber transition-colors"
              >
                <Icon name={link.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-6 h-6"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <Menu
            size={24}
            className={`absolute inset-0 text-text-primary transition-opacity duration-200 ease-out ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <X
            size={24}
            className={`absolute inset-0 text-text-primary transition-opacity duration-200 ease-out ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        style={{ display: "none", opacity: 0 }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden bg-deep-space/98 border-t border-warm-grey/50 px-[5vw] py-8 z-40"
        style={{ display: "none", opacity: 0 }}
      >
        <ul ref={linksRef} className="space-y-4 mb-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-lg text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div ref={socialsRef} className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-text-secondary hover:text-amber transition-colors"
            >
              <Icon name={link.icon} size={20} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
