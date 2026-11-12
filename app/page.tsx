import { Barrier, ExitSign, TownSign } from "@/components/signs";
import { about, contactText, hobbies, roles, timeline } from "@/lib/content";
import { site, socialLinks } from "@/lib/site";

export default function Home() {
  const [lead, ...restOfAbout] = about;
  const [ride, ...otherHobbies] = hobbies;

  return (
    <main>
      <section className="hero">
        <h1 className="hero-name" aria-label={site.name}>
          <span aria-hidden="true">Mike</span>
          <span aria-hidden="true">Karl</span>
        </h1>
        <div className="hero-side">
          <TownSign town={site.town} district={site.district} />
          <ul className="hero-roles">
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <a className="button" href={`mailto:${site.email}`}>
            E-Mail schreiben
          </a>
        </div>
      </section>

      <section id="about" className="stretch">
        <h2 className="stretch-title">About</h2>
        <div className="prose">
          <p className="lead">{lead}</p>
          {restOfAbout.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="hobbies" className="stretch">
        <h2 className="stretch-title">Hobbies</h2>
        <p className="stretch-intro">Was ich außerhalb des Terminals mache.</p>
        <div className="hobbies">
          <article className="hobby hobby-ride">
            <h3>{ride.title}</h3>
            <p className="hobby-short">{ride.short}</p>
            <p>{ride.detail}</p>
          </article>
          {otherHobbies.map((hobby) => (
            <article key={hobby.id} className="hobby">
              <h3>{hobby.title}</h3>
              <p className="hobby-short">{hobby.short}</p>
              <p>{hobby.detail}</p>
            </article>
          ))}
        </div>
        <p className="note">
          Fotos zu den Hobbies erscheinen hier, sobald sie bereit sind.
        </p>
      </section>

      <section id="projects" className="stretch roadworks" data-roadworks>
        <Barrier />
        <div className="roadworks-body">
          <h2 className="stretch-title">Projekte</h2>
          <p className="lead">Projekte in Vorbereitung.</p>
          <p>
            Case Studies zu ausgewählten Arbeiten erscheinen hier, sobald sie
            bereit sind.
          </p>
        </div>
        <Barrier />
      </section>

      <section id="timeline" className="stretch">
        <h2 className="stretch-title">Werdegang</h2>
        <p className="stretch-intro">
          Von der Ausbildung zum Berufseinstieg als Anwendungsentwickler.
        </p>
        <ol className="stations">
          {timeline.map((entry) => (
            <li key={entry.year + entry.title} className="station">
              <p className="station-year">{entry.year}</p>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <p className="station-tags">{entry.tags.join(", ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="stretch contact">
        <ExitSign next="Ihr Team" leaving="Jobsuche" />
        <div>
          <h2 className="stretch-title">Kontakt</h2>
          <p className="lead">{contactText}</p>
          <div className="contact-actions">
            <a className="button" href={`mailto:${site.email}`}>
              Kontakt aufnehmen
            </a>
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <ul className="contact-links">
            {socialLinks
              .filter((link) => link.icon !== "mail")
              .map((link) => (
                <li key={link.label}>
                  <a
                    className="link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
