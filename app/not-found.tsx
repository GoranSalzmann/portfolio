import Link from "next/link";
import { DeadEndSign } from "@/components/signs";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="stretch dead-end-page">
      <DeadEndSign />
      <div>
        <h1 className="stretch-title">Sackgasse</h1>
        <p className="lead">
          Fehler 404: Diese Route existiert nicht oder wurde verschoben.
        </p>
        <Link className="button" href="/">
          Zur Startseite
        </Link>
        <p className="note">Oder schau dich um:</p>
        <ul className="contact-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className="link" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
