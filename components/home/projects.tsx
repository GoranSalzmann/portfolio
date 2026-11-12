import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2 className="section-title">Projekte</h2>
        <p className="section-sub">{projects.subtitle}</p>

        <div className="horizon">
          <div className="horizon-inner">
            <h3 className="horizon-title">{projects.title}</h3>
            <p>{projects.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
