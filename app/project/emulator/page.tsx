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
      <Link href="/#projects" className="link">
        Zurück zu den Projekten
      </Link>

      <header className="project-head">
        <h1 className="band-title">{emulator.title}</h1>
        <p className="project-subtitle">{emulator.subtitle}</p>
        <ul className="tags" aria-label="Themen">
          {emulator.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <dl className="project-meta">
          {emulator.meta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="band">
        <h2 className="band-subtitle">Das Projekt</h2>
        <div className="about">
          <p className="about-lead">{emulator.paragraphs[0]}</p>
          <div className="about-rest">
            {emulator.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <h2 className="band-subtitle">Technische Umsetzung</h2>
        <ul className="hobbies features">
          {emulator.features.map((feature) => (
            <li key={feature.title} className="hobby">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
        <dl className="stats">
          {emulator.stats.map((stat) => (
            <div key={stat.label}>
              <dd>{stat.value}</dd>
              <dt>{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
