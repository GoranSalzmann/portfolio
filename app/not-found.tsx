"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-deep-space">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(232,97,1,0.06) 0%, transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 60%, #0F0E0C 100%)",
        }}
      />

      <section className="relative z-10 w-full px-[5vw] pb-24 pt-32">
        <Container className="max-w-[640px] space-y-8 text-center">
          <p className="section-label">404 — Seite nicht gefunden</p>

          <h1
            className="font-display font-bold leading-[0.85] tracking-tight text-text-primary"
            style={{ fontSize: "clamp(5rem, 18vw, 9rem)" }}
          >
            404
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-[60px] bg-amber" />
            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary md:text-sm">
              Not Found
            </p>
            <div className="h-px w-[60px] bg-amber" />
          </div>

          <p className="text-lg leading-relaxed text-text-secondary">
            Die angeforderte Route existiert nicht oder wurde verschoben.
          </p>

          <CodeBlock>
            <p className="mb-3 text-text-secondary">
              $ navigate{" "}
              <span className="text-text-primary">{pathname}</span>
            </p>
            <p>
              <span className="keyword">Error</span>
              {": "}
              <span className="type">ENOENT</span>
              <span className="text-text-secondary"> — </span>
              <span className="string">route not found</span>
            </p>
          </CodeBlock>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
            <Button href="/">
              <Home size={18} />
              Zur Startseite
            </Button>
          </div>

          <div className="space-y-4 pt-4">
            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              Oder schau dich um:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-amber"
                >
                  <span className="text-link">{link.label}</span>
                  <ArrowRight
                    size={14}
                    className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
