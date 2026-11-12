import { aboutParagraphs } from "@/lib/content";

export function About() {
  const [lead, ...rest] = aboutParagraphs;
  return (
    <section id="about" className="border-t border-line py-24 md:py-36">
      <div className="wrap grid gap-10 md:grid-cols-[1fr_2.4fr] md:gap-16">
        <h2 className="display text-3xl font-semibold md:sticky md:top-28 md:self-start">
          About
        </h2>
        <div className="max-w-[44rem]">
          <p className="text-[1.65rem] leading-[1.4] sm:text-[2rem]">{lead}</p>
          <div className="mt-10 space-y-6 text-muted">
            {rest.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
