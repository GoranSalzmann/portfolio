import Link from "next/link";
import { navLinks, site, socialLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        {site.name}
      </Link>
      <nav aria-label="Hauptnavigation">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {site.name}, {site.location}
      </p>
      <ul className="footer-links">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
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
    </footer>
  );
}
