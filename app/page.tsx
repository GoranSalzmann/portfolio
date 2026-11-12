import { ClockTrace } from "@/components/clock-trace";
import { Colophon, Masthead } from "@/components/chrome";
import { about, contact, hobbies, timeline } from "@/content/profile";
import { projects } from "@/content/projects";
import { roles, site } from "@/content/site";

export default function Home() {
  const [emulator] = projects;

  return (
    <>
      <Masthead />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <p className="hero-roles">{roles.join(" / ")}</p>
          <h1 id="hero-title" className="hero-name">
            Mike
            <br />
            Karl
          </h1>
          <p className="hero-location">{site.location}</p>
          <ClockTrace className="hero-trace" />
        </section>

        <section id="about" className="block">
          <h2 className="block-title">Über mich</h2>
          <div className="prose prose-lead">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="hobbies" className="block">
          <h2 className="block-title">Hobbys</h2>
          <ul className="hobby-list">
            {hobbies.map((hobby) => (
              <li key={hobby.title} className="hobby">
                <h3>{hobby.title}</h3>
                <p className="hobby-summary">{hobby.summary}</p>
                <p className="hobby-details">{hobby.details}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="block">
          <h2 className="block-title">Projekte</h2>
          <a className="feature-project" href={`/project/${emulator.slug}`}>
            <span className="feature-project-meta">
              {emulator.year}, {emulator.status}
            </span>
            <span className="feature-project-title">{emulator.title}</span>
            <span className="feature-project-subtitle">
              {emulator.subtitle}
            </span>
            <span className="feature-project-tags">
              {emulator.tags.join(", ")}
            </span>
            <span className="feature-project-cta">Case Study lesen</span>
          </a>
        </section>

        <section id="timeline" className="block">
          <h2 className="block-title">Werdegang</h2>
          <ol className="timeline">
            {timeline.map((entry) => (
              <li key={entry.period + entry.title} className="timeline-entry">
                <p className="timeline-period">{entry.period}</p>
                <div className="timeline-body">
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                  <p className="timeline-tags">{entry.tags.join(", ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="block block-contact">
          <h2 className="block-title">Kontakt</h2>
          <p className="contact-intro">{contact.intro}</p>
          <a className="contact-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <ul className="contact-links">
            <li>
              <a href={site.github}>GitHub</a>
            </li>
            <li>
              <a href={site.linkedin}>LinkedIn</a>
            </li>
          </ul>
        </section>
      </main>
      <Colophon />
    </>
  );
}
