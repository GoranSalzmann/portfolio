"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="mx-auto max-w-[1240px] px-5 pb-20 pt-8 md:px-8 md:pt-12">
      <p className="label text-muted">404 — Seite nicht gefunden</p>

      <div className="mt-8 grid items-end gap-x-12 gap-y-10 lg:grid-cols-[auto_1fr]">
        <h1 className="display text-[clamp(8rem,34vw,20rem)] text-accent">
          404
        </h1>

        <div className="space-y-6 lg:pb-6">
          <p className="heading text-3xl md:text-4xl">Not Found</p>
          <p className="prose-sheet text-muted">
            Die angeforderte Route existiert nicht oder wurde verschoben.
          </p>
          <pre className="overflow-x-auto border border-ink bg-sheet p-4 font-mono text-sm leading-relaxed">
            <span className="text-muted">$ navigate </span>
            {pathname}
            {"\n"}
            <span className="font-medium text-accent">Error</span>: ENOENT —
            route not found
          </pre>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-semibold text-on-accent transition-opacity hover:opacity-85"
          >
            <ArrowLeft size={18} aria-hidden />
            Zur Startseite
          </Link>
        </div>
      </div>

      <div className="mt-16 border-t-2 border-ink pt-6">
        <p className="label text-muted">Oder schau dich um:</p>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="heading flex items-baseline gap-2 text-2xl transition-colors hover:text-accent"
              >
                <span className="label text-accent">{index + 1}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
