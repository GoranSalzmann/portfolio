import type { Metadata } from "next";
import Link from "next/link";
import { emulator } from "@/lib/content";

export const metadata: Metadata = {
  title: "6502 Emulator — Mike Karl",
  description:
    "Cycle-accurate CPU-Simulation in C++ mit eigenem Assembler-Parser.",
};

export default function EmulatorPage() {
  return (
    <main className="sheet">
      <div className="wrap">
        <Link href="/#projects" className="back-link">
          Zurück zu den Projekten
        </Link>

        <header className="sheet-head">
          <h1>{emulator.title}</h1>
          <p className="sheet-subtitle">{emulator.subtitle}</p>
          <dl className="sheet-meta">
            {emulator.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
            <div>
              <dt>Themen</dt>
              <dd>{emulator.tags.join(", ")}</dd>
            </div>
          </dl>
        </header>

        <section className="split sheet-part">
          <h2>Das Projekt</h2>
          <div className="prose">
            {emulator.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="split sheet-part">
          <h2>Technische Umsetzung</h2>
          <div>
            <dl className="features">
              {emulator.features.map((feature) => (
                <div key={feature.title}>
                  <dt>{feature.title}</dt>
                  <dd>{feature.description}</dd>
                </div>
              ))}
            </dl>
            <dl className="stats">
              {emulator.stats.map((stat) => (
                <div key={stat.label}>
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </main>
  );
}
