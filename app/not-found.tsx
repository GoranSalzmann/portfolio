import Link from "next/link";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="page shell flex min-h-svh flex-col justify-end pb-[clamp(4rem,12vh,8rem)] pt-28">
      <p className="font-display text-xl italic tabular-nums text-accent">404</p>
      <h1 className="mt-2 max-w-3xl text-[clamp(3rem,9vw,7rem)] font-extralight italic leading-[0.95] tracking-[-0.03em]">
        Diese Seite gibt es nicht.
      </h1>
      <p className="mt-8 max-w-xl text-muted">
        Der Link ist veraltet oder falsch geschrieben.{" "}
        <Link href="/" className="link">
          Zur Startseite
        </Link>
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
