import { ByteWord } from "@/components/byte-word";
import { CopyButton } from "@/components/copy-button";
import { GitLog } from "@/components/git-log";
import { about, contactText, hobbies, roles, timeline } from "@/lib/content";
import { site } from "@/lib/site";

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-rule py-20 md:py-28">
      <div className="wrap grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="heading">{title}</h2>
          {subtitle && (
            <p className="mt-3 max-w-[30ch] italic text-dim">{subtitle}</p>
          )}
        </div>
        <div className="min-w-0 lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <section className="wrap pb-20 pt-12 md:pb-28 md:pt-20">
        <h1 className="sr-only">{site.name}</h1>
        <ByteWord
          text={site.name.toUpperCase()}
          identifier="name"
          hint="Jedes Zeichen ist ein Byte. Kippen Sie ein Bit."
          smallColumns={4}
        />
        <div className="mt-14 flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
          <p className="max-w-[34ch] text-2xl leading-snug md:text-[1.75rem]">
            Softwareengineer und Anwendungsentwickler aus{" "}
            {site.location.split(",")[0]}. Zuhause zwischen Systemebene und
            Anwendung.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn btn-solid">
              Kontakt aufnehmen
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="max-w-[62ch] space-y-6">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <pre className="code mt-12 overflow-x-auto rounded-[3px] bg-raised p-5 md:p-6">
          <code>
            <span className="tok-key">const</span> mike = {"{\n"}
            {"  "}ort: <span className="tok-str">&quot;{site.location}&quot;</span>
            {",\n"}
            {"  "}rollen: [{"\n"}
            {roles.map((role) => (
              <span key={role}>
                {"    "}
                <span className="tok-str">&quot;{role}&quot;</span>
                {",\n"}
              </span>
            ))}
            {"  "}],{"\n"}
            {"  "}sucht:{" "}
            <span className="tok-str">
              &quot;Einstieg als Softwareengineer&quot;
            </span>
            {",\n"}
            {"};"}
          </code>
        </pre>
      </Section>

      <Section
        id="hobbies"
        title="Hobbies"
        subtitle="Was ich außerhalb des Terminals mache."
      >
        <ul className="grid gap-x-10 gap-y-10 md:grid-cols-3">
          {hobbies.map((hobby) => (
            <li key={hobby.title} className="border-t-2 border-ink pt-4">
              <h3 className="font-mono text-lg font-bold [font-stretch:75%]">
                {hobby.title}
              </h3>
              <p className="mt-2 text-xl italic leading-snug">{hobby.short}</p>
              <p className="mt-3 text-dim">{hobby.text}</p>
            </li>
          ))}
        </ul>
        <p className="code tok-dim mt-10">
          {"// "}Fotos zu den Hobbies erscheinen hier, sobald sie bereit sind.
        </p>
      </Section>

      <Section
        id="projects"
        title="Projekte"
        subtitle="Ausgewählte Arbeiten folgen in Kürze."
      >
        <pre className="code overflow-x-auto rounded-[3px] bg-raised p-5 md:p-6">
          <code>
            <span className="tok-dim">$</span> ls projekte/{"\n"}
            <span className="tok-dim">total</span>{" "}
            <span className="tok-num">0</span>
          </code>
        </pre>
        <p className="mt-6 max-w-[62ch]">
          Projekte in Vorbereitung. Case Studies zu ausgewählten Arbeiten
          erscheinen hier, sobald sie bereit sind. Bis dahin liegt der Code auf{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          .
        </p>
      </Section>

      <Section
        id="timeline"
        title="Werdegang"
        subtitle="Von der Ausbildung zum Berufseinstieg als Anwendungsentwickler."
      >
        <GitLog entries={timeline} />
      </Section>

      <Section id="contact" title="Kontakt">
        <p className="max-w-[62ch]">{contactText}</p>
        <div className="mt-10 [container-type:inline-size]">
          <a
            href={`mailto:${site.email}`}
            className="font-mono font-bold text-key underline decoration-2 underline-offset-[0.2em] [font-size:min(5.4cqw,2.75rem)] [font-stretch:75%] hover:text-ink"
          >
            {site.email}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-solid">
            E-Mail schreiben
          </a>
          <CopyButton value={site.email} label="Adresse kopieren" />
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LinkedIn
          </a>
        </div>
      </Section>
    </main>
  );
}
