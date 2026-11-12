"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <section className="project-hero" style={{ minHeight: "80svh", borderBottom: 0 }}>
      <div className="wrap">
        <h1 className="project-title">404</h1>
        <p className="project-subtitle">
          Unter <span style={{ fontStyle: "normal" }}>{pathname}</span> ist
          nichts zu sehen.
        </p>
        <p className="prose-muted" style={{ marginTop: "1.5rem" }}>
          Die angeforderte Route existiert nicht oder wurde verschoben.
        </p>
        <ul className="contact-links">
          <li>
            <Link className="link" href="/">
              Zur Startseite
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className="link" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
