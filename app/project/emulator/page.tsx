import type { Metadata } from "next";
import Link from "next/link";
import { emulator } from "@/lib/content";

export const metadata: Metadata = {
  title: "6502 Emulator — Mike Karl",
  description:
    "Cycle-accurate CPU-Simulation in C++ mit eigenem Assembler-Parser.",
};

export default function EmulatorPage() {
  return (
    <main>
      <section className="wrap pb-16 pt-12 md:pb-24 md:pt-20">
        <Link href="/#projects" className="link code">
          Zurück zu den Projekten
        </Link>
        <h1 className="mt-8 font-mono font-extrabold leading-[0.95] tracking-tight [font-size:clamp(2.75rem,9vw,7.5rem)]">
          {emulator.title}
        </h1>
        <p className="mt-6 text-2xl italic leading-snug md:text-[1.75rem]">
          {emulator.subtitle}
        </p>
        <dl className="code mt-10 flex flex-wrap gap-x-10 gap-y-3">
          {emulator.meta.map((item) => (
            <div key={item.label} className="flex gap-3">
              <dt className="tok-dim">{item.label}</dt>
              <dd className="tok-num">{item.value}</dd>
            </div>
          ))}
        </dl>
        <ul className="code tok-dim mt-3 flex flex-wrap gap-x-5">
          {emulator.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>

      <section className="border-t border-rule py-16 md:py-24">
        <div className="wrap grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="max-w-[62ch] space-y-6 lg:col-span-7">
            {emulator.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <table className="code h-fit w-full lg:col-span-5">
            <caption className="sr-only">Kennzahlen</caption>
            <tbody>
              {emulator.stats.map((stat) => (
                <tr key={stat.label} className="border-b border-rule">
                  <th scope="row" className="py-3 pr-4 text-left font-normal">
                    {stat.label}
                  </th>
                  <td className="tok-num py-3 text-right text-base font-bold">
                    {stat.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-rule py-16 md:py-24">
        <ul className="wrap grid gap-x-10 gap-y-10 md:grid-cols-3">
          {emulator.features.map((feature) => (
            <li key={feature.title} className="border-t-2 border-ink pt-4">
              <h2 className="font-mono text-lg font-bold [font-stretch:75%]">
                {feature.title}
              </h2>
              <p className="mt-3">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
