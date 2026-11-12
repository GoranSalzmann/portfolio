import type { Metadata } from "next";
import Link from "next/link";
import { Colophon, Masthead } from "@/components/chrome";
import { projects } from "@/content/projects";

const project = projects.find((p) => p.slug === "emulator")!;

export const metadata: Metadata = {
  title: `${project.title} — Mike Karl`,
  description: project.subtitle,
};

export default function EmulatorPage() {
  return (
    <>
      <Masthead />
      <main>
        <header className="case-hero">
          <Link className="case-back" href="/#projects">
            Alle Projekte
          </Link>
          <h1 className="case-title">{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <dl className="case-meta">
            <div>
              <dt>Jahr</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Dauer</dt>
              <dd>{project.duration}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
          <p className="case-tags">{project.tags.join(", ")}</p>
        </header>

        <section className="block">
          <h2 className="block-title">Das Projekt</h2>
          <div className="prose prose-lead">
            {project.description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="block">
          <h2 className="block-title">Technische Umsetzung</h2>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
          <dl className="stat-row">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <Colophon />
    </>
  );
}
