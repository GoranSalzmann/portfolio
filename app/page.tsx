import { SiteFooter } from "@/components/site-footer";
import { about, hobbies, roles, timeline } from "@/lib/content";
import { site, socialLinks } from "@/lib/site";

export default function Home() {
  const [lead, ...rest] = about;

  return (
    <div className="page">
      <main>
        <section className="shell flex min-h-svh flex-col justify-end pb-[clamp(4rem,12vh,8rem)] pt-28">
          <h1 className="text-[clamp(4.75rem,17vw,15rem)] font-extralight italic leading-[0.82] tracking-[-0.04em]">
            Mike
            <br />
            Karl
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted md:text-xl">
            {roles.slice(0, 2).join(" und ")} aus Grafenau, mit Erfahrung in{" "}
            {roles.slice(2).join(" und ")}.
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Der Himmel hinter dieser Seite ist eine Langzeitbelichtung. Wer
            scrollt, belichtet länger.
          </p>
        </section>

        <section id="about" className="shell py-[clamp(4rem,10vw,8rem)]">
          <h2 className="heading">Über mich</h2>
          <div className="mt-8 max-w-[40rem] space-y-6">
            <p className="lead">{lead}</p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="hobbies" className="shell py-[clamp(4rem,10vw,8rem)]">
          <h2 className="heading">Außerhalb des Terminals</h2>
          <ul className="mt-10 grid max-w-4xl gap-x-10 gap-y-10 sm:grid-cols-3">
            {hobbies.map((hobby) => (
              <li key={hobby.title}>
                <h3 className="text-2xl italic">{hobby.title}</h3>
                <p className="mt-2">{hobby.summary}</p>
                <p className="mt-2 text-[0.9375rem] text-muted">{hobby.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted">
            Fotos zu den Hobbys folgen, sobald sie bereit sind.
          </p>
        </section>

        <section id="projects" className="shell py-[clamp(4rem,10vw,8rem)]">
          <h2 className="heading">Projekte</h2>
          <p className="lead mt-8 max-w-[40rem]">
            Case Studies zu ausgewählten Arbeiten erscheinen hier, sobald sie
            bereit sind.
          </p>
          <p className="mt-6 max-w-[40rem] text-muted">
            Bis dahin liegt der Code auf{" "}
            <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </section>

        <section id="timeline" className="shell py-[clamp(4rem,10vw,8rem)]">
          <h2 className="heading">Werdegang</h2>
          <ol className="mt-10 max-w-[48rem] space-y-10">
            {timeline.map((entry) => (
              <li
                key={entry.year + entry.title}
                className="grid gap-x-8 gap-y-1 md:grid-cols-[8.5rem_1fr]"
              >
                <p className="font-display text-xl italic tabular-nums text-accent md:pt-0.5">
                  {entry.year}
                </p>
                <div>
                  <h3 className="text-2xl">{entry.title}</h3>
                  <p className="mt-2 text-muted">{entry.description}</p>
                  <p className="mt-2 text-sm text-muted">{entry.tags.join(", ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="shell pt-[clamp(4rem,10vw,8rem)]">
          <h2 className="heading">Kontakt</h2>
          <p className="mt-8 max-w-[40rem] text-muted">
            Ich suche den Einstieg als Softwareengineer und bringe gerne
            Kenntnisse für saubere, skalierbare Lösungen in innovative Projekte
            ein. Schreiben Sie mir, wenn das passt.
          </p>
          <p className="mt-8">
            <a
              href={`mailto:${site.email}`}
              className="link font-display text-[clamp(1.5rem,4.6vw,3.25rem)] font-light italic [overflow-wrap:anywhere]"
            >
              {site.email}
            </a>
          </p>
          <ul className="mt-8 flex gap-8">
            {socialLinks
              .filter((link) => link.icon !== "mail")
              .map((link) => (
                <li key={link.label}>
                  <a className="link" href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
