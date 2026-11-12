import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section, TagList } from "@/components/section";
import { projectRoutes, type Project } from "@/lib/projects";

function publicFileExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src));
}

/** A project case study laid out as its own datasheet. */
export function ProjectSheet({ project }: { project: Project }) {
  const images = project.images.filter((image) => publicFileExists(image.src));
  const neighbours = [
    { label: "Vorheriges Projekt", link: project.prev, Icon: ArrowLeft },
    { label: "Nächstes Projekt", link: project.next, Icon: ArrowRight },
  ].filter((item) => item.link && projectRoutes.includes(item.link.href));

  const meta = [
    { label: "Jahr", value: project.year },
    { label: "Dauer", value: project.duration },
    { label: "Status", value: project.status },
  ];

  return (
    <main className="mx-auto max-w-[1240px] px-5 md:px-8">
      <section className="pb-12 pt-8 md:pb-20 md:pt-12">
        <Link
          href="/#projects"
          className="label inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={14} aria-hidden />
          Zurück
        </Link>

        <h1 className="display mt-8 text-[clamp(3.75rem,14vw,11rem)]">
          {project.title}
        </h1>
        <p className="heading mt-6 text-2xl text-accent md:text-3xl">
          {project.subtitle}
        </p>
        <div className="mt-6">
          <TagList tags={project.tags} />
        </div>

        <dl className="mt-10 grid grid-cols-3 border-y-2 border-ink">
          {meta.map((item) => (
            <div
              key={item.label}
              className="border-r border-hair px-3 py-4 first:pl-0 last:border-r-0"
            >
              <dt className="label text-muted">{item.label}</dt>
              <dd className="heading mt-1 text-lg md:text-xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section number="1" title="Das Projekt">
        <div className="space-y-6">
          {project.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 32)}
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

      <Section number="2" title="Technische Umsetzung">
        <ol className="border-t border-ink">
          {project.features.map((feature, index) => (
            <li
              key={feature.title}
              className="grid gap-x-8 gap-y-2 border-b border-hair py-6 md:grid-cols-[3rem_16rem_1fr]"
            >
              <span className="label pt-1.5 text-accent">2.{index + 1}</span>
              <h3 className="heading text-xl">{feature.title}</h3>
              <p className="leading-relaxed text-muted">
                {feature.description}
              </p>
            </li>
          ))}
        </ol>

        <dl className="mt-12 grid grid-cols-2 border-t-2 border-ink md:grid-cols-4">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse justify-end gap-2 border-b border-hair py-5 pr-4 md:border-r md:px-4 md:first:pl-0 md:last:border-r-0"
            >
              <dt className="label text-muted">{stat.label}</dt>
              <dd className="display text-5xl text-accent md:text-6xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {images.length > 0 && (
        <Section number="3" title="Screenshots">
          <div className="grid gap-6 md:grid-cols-3">
            {images.map((image, index) => (
              <figure key={image.src}>
                <div className="relative aspect-[4/3] border border-ink bg-sheet">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="label mt-3 text-muted">
                  Abb. {index + 1} — {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      {neighbours.length > 0 && (
        <nav
          aria-label="Weitere Projekte"
          className="flex flex-wrap justify-between gap-4 border-t-2 border-ink py-10"
        >
          {neighbours.map(({ label, link, Icon }) => (
            <Link
              key={link!.href}
              href={link!.href}
              className="inline-flex items-center gap-3 border border-ink px-5 py-3 transition-colors hover:bg-ink hover:text-paper"
            >
              <Icon size={16} aria-hidden />
              <span>
                <span className="label block opacity-70">{label}</span>
                <span className="font-semibold">{link!.title}</span>
              </span>
            </Link>
          ))}
        </nav>
      )}
    </main>
  );
}
