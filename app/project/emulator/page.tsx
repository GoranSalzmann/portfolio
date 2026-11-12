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
    <main className="project">
      <section className="stretch">
        <Link className="link" href="/#projects">
          Zurück zu den Projekten
        </Link>
        <h1 className="project-title">{emulator.title}</h1>
        <p className="lead">{emulator.subtitle}</p>
        <p className="station-tags">{emulator.tags.join(", ")}</p>
        <dl className="facts">
          {emulator.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="stretch">
        <h2 className="stretch-title">Das Projekt</h2>
        <div className="prose">
          {emulator.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="stretch">
        <h2 className="stretch-title">Technische Umsetzung</h2>
        <div className="features">
          {emulator.features.map((feature) => (
            <article key={feature.title} className="hobby">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
        <dl className="facts facts-large">
          {emulator.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
