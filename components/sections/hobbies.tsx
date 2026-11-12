import { hobbies, type HobbyKind } from "@/lib/content";

function Glyph({ kind }: { kind: HobbyKind }) {
  const common = {
    viewBox: "0 0 160 100",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "h-24 w-40 shrink-0 text-accent",
  };
  if (kind === "bike") {
    const spokes = [0, 45, 90, 135].map((a) => (
      <line key={a} x1="0" y1="-20" x2="0" y2="20" transform={`rotate(${a})`} strokeWidth="1.2" />
    ));
    return (
      <svg {...common}>
        <g transform="translate(36 66)">
          <g className="wheel">
            <circle r="24" />
            {spokes}
          </g>
        </g>
        <g transform="translate(124 66)">
          <g className="wheel">
            <circle r="24" />
            {spokes}
          </g>
        </g>
        <path d="M36 66 L62 36 H92 L124 66 M62 36 L78 66 H100 M92 36 L84 24 H100" />
      </svg>
    );
  }
  if (kind === "astro") {
    return (
      <svg {...common}>
        <path className="trail" d="M20 88 A90 90 0 0 1 80 12" />
        <path className="trail" d="M36 92 A80 80 0 0 1 90 22" />
        <path className="trail" d="M54 94 A70 70 0 0 1 104 36" />
        <circle cx="132" cy="28" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="114" cy="62" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="146" cy="76" r="1.6" fill="currentColor" stroke="none" />
        <path d="M80 12 v-6 M77 9 h6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <g className="layer layer-0">
        <rect x="40" y="78" width="80" height="10" rx="2" />
      </g>
      <g className="layer layer-1">
        <rect x="46" y="66" width="68" height="10" rx="2" />
      </g>
      <g className="layer layer-2">
        <rect x="52" y="54" width="56" height="10" rx="2" />
      </g>
      <g className="layer layer-3">
        <rect x="58" y="42" width="44" height="10" rx="2" />
      </g>
    </svg>
  );
}

export function Hobbies() {
  return (
    <section id="hobbies" className="border-t border-line py-24 md:py-36">
      <div className="wrap">
        <div className="mb-14 grid gap-4 md:grid-cols-[1fr_2.4fr] md:gap-16">
          <h2 className="display text-3xl font-semibold">Hobbies</h2>
          <p className="max-w-xl text-muted">
            Was ich außerhalb des Terminals mache. Bilder folgen, sobald sie bereit sind.
          </p>
        </div>

        <ul className="border-t border-line">
          {hobbies.map((hobby) => (
            <li
              key={hobby.title}
              className="hobby flex flex-col items-start justify-between gap-6 border-b border-line py-10 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="display text-4xl font-semibold sm:text-6xl">{hobby.title}</h3>
                <p className="mt-4 text-xl">{hobby.shortDescription}</p>
                {hobby.paragraphs.map((p) => (
                  <p key={p.slice(0, 20)} className="mt-1 text-muted">
                    {p}
                  </p>
                ))}
              </div>
              <Glyph kind={hobby.kind} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
