import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-1 py-3">
        <Link href="/" className="font-mono text-sm font-bold">
          {site.name.toLowerCase().replace(" ", "_")}
        </Link>
        <div className="md:order-last">
          <ThemeToggle />
        </div>
        <nav
          aria-label="Hauptnavigation"
          className="-mx-1 w-full overflow-x-auto [scrollbar-width:none] md:mx-0 md:ml-auto md:w-auto"
        >
          <ul className="flex justify-between font-mono text-[0.6875rem] min-[400px]:justify-start min-[400px]:gap-2 md:gap-3 md:text-xs">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-1 py-1.5 text-dim hover:text-key"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
