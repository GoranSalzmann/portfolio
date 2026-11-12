import { LegendSymbol } from "@/components/site/legend-symbol";
import { MapHero } from "@/components/site/map-hero";
import {
  about,
  contactText,
  hobbies,
  hobbiesIntro,
  hobbiesNote,
  projectsPending,
  roles,
  timeline,
  timelineIntro,
} from "@/lib/content";
import { site, socialLinks } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-name">
        <div className="hero-map">
          <MapHero />
        </div>
        <div className="hero-title">
          <h1 id="hero-name">
            Mike
            <br />
            Karl
          </h1>
          <p className="hero-roles">{roles.join(", ")}</p>
          <p className="hero-place">{site.location}</p>
        </div>
        <div className="hero-margin">
          <p>
            Die rote Linie ist mein Werdegang, von 2020 bis heute. Relief
            stilisiert.
          </p>
          <div className="scale" aria-hidden="true">
            <span className="scale-bar" />
            <span>10 km</span>
          </div>
        </div>
      </section>

      <section id="about" className="band">
        <div className="wrap split">
          <h2>About</h2>
          <div className="prose">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="hobbies" className="band">
        <div className="wrap split">
          <div className="heading">
            <h2>Hobbies</h2>
            <p>{hobbiesIntro}</p>
          </div>
          <div>
            <ul className="legend">
              {hobbies.map((hobby) => (
                <li key={hobby.title}>
                  <LegendSymbol name={hobby.symbol} />
                  <div>
                    <h3>{hobby.title}</h3>
                    <p className="legend-short">{hobby.short}</p>
                    <p>{hobby.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="footnote">{hobbiesNote}</p>
          </div>
        </div>
      </section>

      <section id="projects" className="band">
        <div className="wrap split">
          <h2>Projekte</h2>
          <div className="unmapped">
            <h3>{projectsPending.title}</h3>
            <p>{projectsPending.text}</p>
          </div>
        </div>
      </section>

      <section id="timeline" className="band">
        <div className="wrap split">
          <div className="heading">
            <h2>Werdegang</h2>
            <p>{timelineIntro}</p>
          </div>
          <ol className="stages">
            {timeline.map((stage) => (
              <li key={stage.year + stage.title}>
                <p className="stage-year">{stage.year}</p>
                <div className="stage-body">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                  <p className="stage-tags">{stage.tags.join(", ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="band band-last">
        <div className="wrap split">
          <h2>Kontakt</h2>
          <div>
            <p className="prose">{contactText}</p>
            <a className="contact-mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <ul className="contact-links">
              {socialLinks
                .filter((link) => link.icon !== "mail")
                .map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
