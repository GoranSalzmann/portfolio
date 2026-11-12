import { timelineItems } from "@/lib/content";

function Star({ lit }: { lit: boolean }) {
  return (
    <svg viewBox="-12 -12 24 24" className="h-6 w-6" aria-hidden>
      {lit && <circle r="11" fill="var(--star)" opacity="0.25" />}
      <path
        d="M0 -10 L2.4 -2.4 L10 0 L2.4 2.4 L0 10 L-2.4 2.4 L-10 0 L-2.4 -2.4 Z"
        fill={lit ? "var(--star)" : "var(--bg)"}
        stroke={lit ? "var(--star)" : "currentColor"}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="border-t border-line py-24 md:py-36">
      <div className="wrap">
        <div className="mb-16 grid gap-4 md:grid-cols-[1fr_2.4fr] md:gap-16">
          <h2 className="display text-3xl font-semibold">Werdegang</h2>
          <p className="max-w-xl text-muted">
            Von der Ausbildung zum Berufseinstieg als Anwendungsentwickler.
          </p>
        </div>

        <ol>
          {timelineItems.map((item, i) => {
            const last = i === timelineItems.length - 1;
            return (
              <li
                key={item.year + item.title}
                className="grid grid-cols-[2rem_1fr] gap-x-5 md:grid-cols-[14rem_2rem_1fr] md:gap-x-8"
              >
                <p className="display col-span-2 col-start-1 pb-2 pl-[3.25rem] text-2xl font-semibold tabular-nums md:col-span-1 md:pl-0 md:text-right md:text-4xl md:leading-none md:pt-1">
                  {item.year}
                </p>
                <div className="relative row-span-2 row-start-1 flex justify-center md:row-span-1 md:col-start-2">
                  <div className="relative z-10 pt-1 text-fg">
                    <Star lit={i === 0} />
                  </div>
                  {!last && (
                    <span className="absolute bottom-0 top-8 w-px bg-line" aria-hidden />
                  )}
                </div>
                <div className="col-start-2 pb-14 md:col-start-3 md:row-start-1">
                  <h3 className="display text-2xl font-semibold leading-tight md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-muted">{item.description}</p>
                  <p className="mt-3 text-sm italic text-muted">{item.tags.join(", ")}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
