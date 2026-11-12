import { PrintBed } from "@/components/print-bed";
import {
  about,
  contactText,
  hobbies,
  hobbiesIntro,
  hobbiesNote,
  projectsEmpty,
  roles,
  timeline,
  timelineIntro,
} from "@/lib/content";
import { filamentHue } from "@/lib/filament";
import { site, socialLinks } from "@/lib/site";

export default function Home() {
  const external = socialLinks.filter((link) => link.icon !== "mail");

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="sr-only">
          {site.name}
        </h1>
        <PrintBed />
        <div className="hero-caption">
          <p className="hero-roles">{roles.join(", ")}</p>
          <p className="hero-meta">
            {site.location}. Ziehen dreht das Druckbett, der Regler blättert
            durch die Schichten.
          </p>
        </div>
      </section>

      <section id="about" className="band">
        <h2 className="band-title">About</h2>
        <div className="about">
          <p className="about-lead">{about[0]}</p>
          <div className="about-rest">
            <p>{about[1]}</p>
            <p>{about[2]}</p>
          </div>
        </div>
      </section>

      <section id="hobbies" className="band">
        <h2 className="band-title">Hobbies</h2>
        <p className="band-intro">{hobbiesIntro}</p>
        <ul className="hobbies">
          {hobbies.map((hobby) => (
            <li key={hobby.id} className={`hobby hobby-${hobby.id}`}>
              <h3>{hobby.title}</h3>
              <p className="hobby-short">{hobby.short}</p>
              <p>{hobby.text}</p>
            </li>
          ))}
        </ul>
        <p className="quiet-note">{hobbiesNote}</p>
      </section>

      <section id="projects" className="band">
        <h2 className="band-title">Projekte</h2>
        <div className="empty-bed">
          <div className="empty-bed-plate" aria-hidden="true">
            <div />
          </div>
          <div>
            <h3>{projectsEmpty.title}</h3>
            <p>
              Das Druckbett ist noch leer. {projectsEmpty.text}
            </p>
          </div>
        </div>
      </section>

      <section id="timeline" className="band">
        <h2 className="band-title">Werdegang</h2>
        <p className="band-intro">
          {timelineIntro} Wie beim Drucken liegt die erste Schicht unten.
        </p>
        <ol className="layers" reversed>
          {timeline.map((entry, index) => {
            const t = 1 - index / (timeline.length - 1);
            return (
              <li
                key={`${entry.year}-${entry.title}`}
                style={{ "--layer-hue": filamentHue(t) } as React.CSSProperties}
              >
                <p className="layer-year">{entry.year}</p>
                <div className="layer-body">
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                  <ul className="tags" aria-label="Themen">
                    {entry.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section id="contact" className="band contact">
        <h2 className="band-title">Kontakt</h2>
        <p className="contact-text">{contactText}</p>
        <a className="contact-mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="contact-actions">
          <a className="button" href={`mailto:${site.email}`}>
            Kontakt aufnehmen
          </a>
          {external.map((link) => (
            <a key={link.href} className="link" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
