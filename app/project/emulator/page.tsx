import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "6502 Emulator — Mike Karl",
  description:
    "Cycle-accurate CPU-Simulation in C++ mit eigenem Assembler-Parser.",
};

const project = {
  title: "6502 Emulator",
  subtitle: "Cycle-accurate CPU-Simulation in C++",
  tags: ["C++", "6502 Assembly", "Systems Programming", "Emulation"],
  year: "2023",
  duration: "6 Monate",
  status: "Abgeschlossen",
  paragraphs: [
    "Der MOS 6502 ist der Chip, der die Home-Computer-Revolution antrieb: Apple II, Commodore 64, Nintendo Entertainment System. Er hat 3510 Transistoren. Jeder einzelne zählt.",
    "Mein Emulator simuliert jeden Taktzyklus des 6502 mit Cycle-Accuracy – das bedeutet, dass die Timing-Korrektheit bis auf einen Takt genau stimmt. Das ist entscheidend für Systeme, die auf präzise Hardware-Timing angewiesen sind, wie der C64 mit seinem VIC-II-Grafikchip.",
    "Der Emulator enthält einen eigenen Assembler-Parser, der 6502-Assembly-Syntax in Maschinencode übersetzt. Keine externen Abhängigkeiten – nur C++, Standardbibliotheken und das Verständnis der Architektur.",
  ],
  features: [
    {
      title: "Cycle-Accurate Simulation",
      description:
        "Jeder Befehl wird mit korrektem Takt-Verbrauch simuliert. Seiten-Effekte, Page-Crossing-Penalties, genaue Adressierungsmodi.",
    },
    {
      title: "Assembler-Parser",
      description:
        "Eigener zweipassiger Assembler mit Label-Auflösung, Expression-Evaluation und Fehlerberichterstattung.",
    },
    {
      title: "Speichersystem",
      description:
        "64KB Adressraum mit korrekter Memory-Mapping-Logik. RAM, ROM und Memory-Mapped I/O.",
    },
  ],
  stats: [
    { label: "Transistoren simuliert", value: "3,510" },
    { label: "Implementierte Befehle", value: "56" },
    { label: "Adressierungsmodi", value: "13" },
    { label: "Taktzyklen getestet", value: "1M+" },
  ],
  prev: { title: "Raycasting Engine", href: "/project/raycaster" },
  next: { title: "Software Raytracer", href: "/project/raytracer" },
};

export default function EmulatorPage() {
  return (
    <>
      <section className="project-hero">
        <div className="wrap">
          <Link href="/#projects" className="link" style={{ color: "var(--muted)" }}>
            Zurück zu den Projekten
          </Link>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <dl className="facts">
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
            <div>
              <dt>Stack</dt>
              <dd style={{ fontSize: "1.1rem" }}>{project.tags.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2 className="section-title">Das Projekt</h2>
          <div>
            <p className="about-lead">{project.paragraphs[0]}</p>
            <div className="about-body prose-muted" style={{ maxWidth: "none" }}>
              {project.paragraphs.slice(1).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="section-title">Technische Umsetzung</h2>
          <ul className="feature-list">
            {project.features.map((f) => (
              <li key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </li>
            ))}
          </ul>
          <dl className="stat-row">
            {project.stats.map((s) => (
              <div key={s.label}>
                <dd>{s.value}</dd>
                <dt>{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <nav className="wrap project-nav" aria-label="Weitere Projekte">
        <Link href={project.prev.href}>
          <small>Vorheriges Projekt</small>
          <span>{project.prev.title}</span>
        </Link>
        <Link href={project.next.href}>
          <small>Nächstes Projekt</small>
          <span>{project.next.title}</span>
        </Link>
      </nav>
    </>
  );
}
