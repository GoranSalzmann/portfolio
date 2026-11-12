"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <main className="flex min-h-screen items-center py-32">
      <div className="wrap">
        <h1
          className="display font-extrabold"
          style={{ fontSize: "clamp(8rem, 38vw, 30rem)", fontVariationSettings: '"wdth" 80', lineHeight: 0.8 }}
        >
          404<span className="text-star">.</span>
        </h1>
        <p className="display mt-10 text-3xl font-semibold">Seite nicht gefunden</p>
        <p className="mt-3 max-w-lg text-muted">
          Die Route <code className="text-fg">{pathname}</code> existiert nicht oder wurde verschoben.
        </p>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <li><Link href="/" className="font-semibold underline decoration-star decoration-2 underline-offset-4">Zur Startseite</Link></li>
          {navLinks.map((l) => (
            <li key={l.href}><Link href={l.href} className="text-muted hover:text-fg">{l.label}</Link></li>
          ))}
        </ul>
      </div>
    </main>
  );
}
