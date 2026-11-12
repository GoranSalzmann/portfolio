export function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-bg-deep py-24 md:py-36">
      <div className="wrap grid items-center gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <h2 className="display text-3xl font-semibold">Ausgewählte Projekte</h2>
          <p className="display mt-10 text-4xl font-semibold leading-[1.05] sm:text-5xl">
            Projekte in Vorbereitung
          </p>
          <p className="mt-6 max-w-md text-muted">
            Ausgewählte Arbeiten folgen in Kürze. Case Studies erscheinen hier, sobald sie bereit
            sind.
          </p>
        </div>

        <svg viewBox="-110 -110 220 220" className="mx-auto w-full max-w-md text-fg" aria-hidden>
          <g fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.5">
            <circle r="104" />
            <circle r="78" strokeDasharray="1 4" />
            <circle r="52" />
            <circle r="26" strokeDasharray="1 4" />
            <line x1="-104" x2="104" />
            <line y1="-104" y2="104" />
          </g>
          <g className="spin-slow">
            <g fill="currentColor" opacity="0.7">
              <circle cx="40" cy="-60" r="1.8" />
              <circle cx="-70" cy="-30" r="1.3" />
              <circle cx="-30" cy="64" r="1.6" />
              <circle cx="82" cy="34" r="1.2" />
            </g>
            <path d="M40 -60 L82 34 L-30 64 L-70 -30" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.5" />
          </g>
          <g className="spin-slow-rev" fill="var(--star)">
            <path d="M0 -12 L2.6 -2.6 L12 0 L2.6 2.6 L0 12 L-2.6 2.6 L-12 0 L-2.6 -2.6 Z" />
          </g>
        </svg>
      </div>
    </section>
  );
}
