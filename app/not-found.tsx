import Link from "next/link";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="project notfound">
      <svg
        className="spaghetti"
        viewBox="0 0 600 160"
        role="img"
        aria-label="Ein Knäuel aus Filament, wie nach einem fehlgeschlagenen Druck"
      >
        <path d="M10 120c60-90 90 60 150-20s40-90 90-30-30 90 40 70 30-130 90-80-10 100 60 60 50-110 150-60" />
        <path d="M40 60c50 70 100-60 160 10s70 80 130 20 60-80 120-10 60 40 110-30" />
      </svg>
      <h1 className="band-title">404</h1>
      <p className="about-lead">
        Dieser Druck hat sich vom Bett gelöst. Die angeforderte Route existiert
        nicht oder wurde verschoben.
      </p>
      <div className="contact-actions">
        <Link href="/" className="button">
          Zur Startseite
        </Link>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="link">
            {link.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
