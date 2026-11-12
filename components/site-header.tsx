import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, site } from "@/lib/site";

function NavList({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {navLinks.map((link, index) => (
        <li key={link.href} className="shrink-0">
          <Link
            href={link.href}
            className="group flex items-baseline gap-1.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <span className="label text-accent max-md:hidden">{index + 1}</span>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex h-14 max-w-[1240px] items-center gap-8 px-5 md:px-8">
        <Link href="/" className="heading text-xl uppercase tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Hauptnavigation" className="ml-auto hidden md:block">
          <NavList className="flex items-center gap-6" />
        </nav>
        <ThemeToggle className="ml-auto md:ml-0" />
      </div>
      <nav
        aria-label="Hauptnavigation"
        className="border-t border-hair md:hidden"
      >
        <NavList className="flex items-center justify-between gap-2 px-5" />
      </nav>
    </header>
  );
}
