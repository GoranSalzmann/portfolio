import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { emulator } from "@/lib/content";

export const metadata: Metadata = {
  title: "6502 Emulator — Mike Karl",
  description:
    "Cycle-accurate CPU-Simulation in C++ mit eigenem Assembler-Parser.",
};

export default function EmulatorPage() {
  const [lead, ...rest] = emulator.paragraphs;

  return (
    <div className="page">
      <main>
        <section className="shell flex min-h-[80svh] flex-col justify-end pb-[clamp(3rem,8vh,6rem)] pt-28">
          <p>
            <Link href="/#projects" className="nav-link">
              Zurück zu den Projekten
            </Link>
          </p>
          <h1 className="mt-6 text-[clamp(3.25rem,11vw,9rem)] font-extralight italic leading-[0.9] tracking-[-0.035em]">
            {emulator.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">{emulator.subtitle}</p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {emulator.meta.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-muted">{item.label}</dt>
                <dd className="font-display text-xl italic">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted">{emulator.tags.join(", ")}</p>
        </section>

        <section className="shell py-[clamp(4rem,10vw,8rem)]">
          <h2 className="heading">Das Projekt</h2>
          <div className="mt-8 max-w-[40rem] space-y-6">
            <p className="lead">{lead}</p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="shell pt-[clamp(4rem,10vw,8rem)]">
          <h2 className="heading">Technische Umsetzung</h2>
          <ul className="mt-10 max-w-[40rem] space-y-8">
            {emulator.features.map((feature) => (
              <li key={feature.title}>
                <h3 className="text-2xl">{feature.title}</h3>
                <p className="mt-2 text-muted">{feature.description}</p>
              </li>
            ))}
          </ul>
          <dl className="mt-14 grid max-w-[40rem] grid-cols-2 gap-x-10 gap-y-8">
            {emulator.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-5xl font-light italic tabular-nums text-accent">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
