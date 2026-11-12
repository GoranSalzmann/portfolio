import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { emulatorProject as p } from "@/lib/content";

export const metadata: Metadata = {
  title: "6502 Emulator — Mike Karl",
  description: "Cycle-accurate CPU-Simulation in C++ mit eigenem Assembler-Parser.",
};

function Plate({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-sm border border-line bg-bg-deep">
      <Image src={src} alt={alt} width={1200} height={800} className="h-auto w-full" />
      <figcaption className="border-t border-line px-4 py-2 text-sm text-muted">{alt}</figcaption>
    </figure>
  );
}

export default function EmulatorPage() {
  return (
    <main>
      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="wrap">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-muted hover:text-fg">
            <ArrowLeft size={16} /> Zurück
          </Link>
          <h1
            className="display mt-10 font-extrabold"
            style={{ fontSize: "clamp(3.5rem, 15vw, 12rem)", fontVariationSettings: '"wdth" 80', lineHeight: 0.85 }}
          >
            {p.title}
          </h1>
          <p className="display mt-8 max-w-2xl text-2xl font-medium sm:text-4xl">{p.subtitle}</p>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3 border-t border-line pt-6">
            {[
              ["Jahr", p.year],
              ["Dauer", p.duration],
              ["Status", p.status],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-sm text-muted">{k}</dt>
                <dd className="display text-lg font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 italic text-muted">{p.tags.join(", ")}</p>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap grid items-start gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-[40rem]">
            <h2 className="display text-3xl font-semibold">Das Projekt</h2>
            <p className="mt-8 text-[1.55rem] leading-[1.4]">{p.paragraphs[0]}</p>
            <div className="mt-8 space-y-6 text-muted">
              {p.paragraphs.slice(1).map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
          </div>
          <Plate {...p.image} />
        </div>
      </section>

      <section className="border-t border-line bg-bg-deep py-20 md:py-28">
        <div className="wrap">
          <h2 className="display text-3xl font-semibold">Technische Umsetzung</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {p.features.map((f) => (
              <div key={f.title} className="border-t-2 border-star pt-5">
                <h3 className="display text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-muted">{f.description}</p>
              </div>
            ))}
          </div>
          <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {p.stats.map((s) => (
              <div key={s.label}>
                <dd className="display text-5xl font-extrabold tabular-nums sm:text-7xl">{s.value}</dd>
                <dt className="mt-2 text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap">
          <h2 className="display text-3xl font-semibold">Galerie</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {p.gallery.map((img) => (
              <Plate key={img.src} {...img} />
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Projekte" className="border-t border-line">
        <div className="wrap grid sm:grid-cols-2">
          <Link href={p.prev.href} className="group py-12 hover:text-accent">
            <span className="flex items-center gap-2 text-muted"><ArrowLeft size={16} /> Vorheriges Projekt</span>
            <span className="display mt-2 block text-3xl font-semibold">{p.prev.title}</span>
          </Link>
          <Link href={p.next.href} className="group border-t border-line py-12 hover:text-accent sm:border-l sm:border-t-0 sm:pl-10 sm:text-right">
            <span className="flex items-center gap-2 text-muted sm:justify-end">Nächstes Projekt <ArrowRight size={16} /></span>
            <span className="display mt-2 block text-3xl font-semibold">{p.next.title}</span>
          </Link>
        </div>
      </nav>
    </main>
  );
}
