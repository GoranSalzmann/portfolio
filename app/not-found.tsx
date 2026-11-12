"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ByteWord } from "@/components/byte-word";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="wrap py-16 md:py-24">
      <h1 className="sr-only">404 – Seite nicht gefunden</h1>
      <div className="max-w-xl">
        <ByteWord
          text="404"
          identifier="status"
          hint="Auch hier lässt sich jedes Bit kippen."
          smallColumns={3}
        />
      </div>

      <pre className="code mt-12 max-w-xl whitespace-pre-wrap rounded-[3px] bg-raised p-5">
        <code>
          <span className="tok-dim">$</span> cd {pathname}
          {"\n"}
          <span className="tok-str">ENOENT</span>: Diese Seite gibt es nicht
          oder sie wurde verschoben.
        </code>
      </pre>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <Link href="/" className="btn btn-solid">
          Zur Startseite
        </Link>
        <ul className="code flex flex-wrap gap-x-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
