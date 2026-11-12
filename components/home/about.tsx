import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap split">
        <h2 className="section-title">Über mich</h2>
        <div>
          <p className="about-lead">{about.lead}</p>
          <div className="about-body prose-muted" style={{ maxWidth: "none" }}>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} style={{ maxWidth: "var(--measure)" }}>
                {p}
              </p>
            ))}
          </div>
          <p className="about-aside">{about.aside}</p>
        </div>
      </div>
    </section>
  );
}
