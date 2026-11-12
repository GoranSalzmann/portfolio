import { ArrowUpRight } from "lucide-react";
import { CareerDiagram } from "@/components/career-diagram";
import { Pinout } from "@/components/pinout";
import { Section } from "@/components/section";
import {
  about,
  career,
  contact,
  hobbies,
  keyFacts,
  projects,
  roles,
} from "@/lib/content";
import { site, socialLinks } from "@/lib/site";

export default function Home() {
  const [firstName, lastName] = site.name.split(" ");

  return (
    <main className="mx-auto max-w-[1240px] px-5 md:px-8">
      {/* Cover sheet */}
      <section className="pb-12 pt-8 md:pb-20 md:pt-12">
        <div className="label flex justify-between text-muted">
          <span>Datenblatt · Portfolio</span>
          <span>{site.location}</span>
        </div>

        <div className="mt-8 grid items-end gap-x-12 gap-y-12 lg:grid-cols-[1fr_minmax(0,30rem)]">
          <h1 className="display text-[min(46vw,13rem)] lg:text-[clamp(9rem,17vw,15rem)]">
            {firstName}
            <br />
            <span className="text-accent">{lastName}</span>
          </h1>
          <Pinout className="lg:pb-4" />
        </div>

        <ul className="mt-12 grid grid-cols-2 border-y-2 border-ink md:grid-cols-4">
          {roles.map((role, index) => (
            <li
              key={role}
              className="border-hair px-3 py-4 max-md:odd:border-r max-md:odd:pl-0 max-md:[&:nth-child(-n+2)]:border-b md:border-r md:last:border-r-0 md:first:pl-0"
            >
              <span className="label block text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="heading mt-1 block text-[0.9375rem] sm:text-lg md:text-xl">
                {role}
              </span>
            </li>
          ))}
        </ul>

        <dl className="mt-10 grid gap-x-12 md:grid-cols-2">
          {keyFacts.map((fact) => (
            <div
              key={fact.label}
              className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-hair py-3"
            >
              <dt className="label pt-1 text-muted">{fact.label}</dt>
              <dd className="font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section id="about" number="1" title={about.title}>
        <div className="space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 24)}
              className={
                index === 0
                  ? "max-w-[38ch] text-2xl font-medium leading-snug md:text-[1.75rem]"
                  : "prose-sheet text-muted"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section
        id="hobbies"
        number="2"
        title={hobbies.title}
        subtitle={hobbies.subtitle}
      >
        <ul className="grid border-t border-ink md:grid-cols-3">
          {hobbies.items.map((hobby, index) => (
            <li
              key={hobby.title}
              className="space-y-3 border-b border-hair py-6 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <p className="label text-accent">2.{index + 1}</p>
              <h3 className="heading text-2xl">{hobby.title}</h3>
              <p className="font-medium">{hobby.shortDescription}</p>
              {hobby.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-sm leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </li>
          ))}
        </ul>
        <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm text-muted">
          <span className="label text-accent">{hobbies.note.status}</span>
          <span>
            <strong className="font-semibold text-ink">
              {hobbies.note.title}.
            </strong>{" "}
            {hobbies.note.text}
          </span>
        </p>
      </Section>

      <Section
        id="projects"
        number="3"
        title={projects.title}
        subtitle={projects.subtitle}
      >
        <div className="hatch border border-ink p-3 md:p-4">
          <div className="space-y-3 bg-paper px-6 py-12 md:px-10 md:py-16">
            <p className="label text-accent">
              {projects.placeholder.status} · {projects.placeholder.hint}
            </p>
            <h3 className="heading text-3xl md:text-4xl">
              {projects.placeholder.title}
            </h3>
            <p className="prose-sheet text-muted">
              {projects.placeholder.text}
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="timeline"
        number="4"
        title={career.title}
        subtitle={career.subtitle}
      >
        <CareerDiagram entries={career.entries} />
      </Section>

      <Section id="contact" number="5" title={contact.title}>
        <p className="prose-sheet text-muted">{contact.text}</p>
        <a
          href={`mailto:${site.email}`}
          aria-label={`${contact.cta}: ${site.email}`}
          className="heading mt-8 block break-all text-[clamp(1.75rem,5.5vw,4rem)] underline decoration-accent decoration-2 underline-offset-[0.15em] transition-colors hover:text-accent"
        >
          {site.email}
        </a>
        <ul className="mt-10 flex flex-wrap gap-3">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-semibold text-on-accent transition-opacity hover:opacity-85"
            >
              {contact.cta}
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </li>
          {socialLinks
            .filter((link) => link.icon !== "mail")
            .map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ink px-5 py-3 font-semibold transition-colors hover:bg-ink hover:text-paper"
                >
                  {link.label}
                  <ArrowUpRight size={18} aria-hidden />
                </a>
              </li>
            ))}
        </ul>
      </Section>
    </main>
  );
}
