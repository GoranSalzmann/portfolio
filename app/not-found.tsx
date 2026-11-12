"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="sheet lost">
      <div className="wrap">
        <h1>404</h1>
        <p className="sheet-subtitle">Seite nicht gefunden</p>
        <p className="prose">
          Die angeforderte Route existiert nicht oder wurde verschoben.
        </p>
        <p className="lost-path">{pathname}</p>
        <Link href="/" className="contact-mail">
          Zur Startseite
        </Link>
        <p className="footnote">Oder schau dich um:</p>
        <ul className="contact-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
