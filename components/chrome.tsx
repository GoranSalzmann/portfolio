import Link from "next/link";
import { navLinks, site } from "@/content/site";

export function Masthead() {
  return (
    <header className="masthead">
      <Link href="/" className="masthead-name">
        {site.name}
      </Link>
      <nav aria-label="Hauptnavigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function Colophon() {
  return (
    <footer className="colophon">
      <p>
        {site.name} — {site.location}
      </p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
