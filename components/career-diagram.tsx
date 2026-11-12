import { TagList } from "@/components/section";
import type { CareerEntry } from "@/lib/content";

function parseSpan(year: string): [number, number] {
  const [start, end = start] = year.split("-").map(Number);
  return [start, end];
}

/**
 * The career as a timing diagram: every entry gets a signal bar on a shared
 * year axis, so overlaps and hand-overs between stations are visible.
 */
export function CareerDiagram({ entries }: { entries: CareerEntry[] }) {
  const spans = entries.map((entry) => parseSpan(entry.year));
  const first = Math.min(...spans.map(([start]) => start));
  const last = Math.max(...spans.map(([, end]) => end));
  const years = Array.from({ length: last - first + 1 }, (_, i) => first + i);
  const axisStyle = { "--years": years.length } as React.CSSProperties;

  return (
    <div style={axisStyle}>
      <div
        aria-hidden
        className="label sticky top-24 z-10 grid border-b border-ink bg-paper py-2 text-muted md:top-14"
        style={{ gridTemplateColumns: `repeat(${years.length}, 1fr)` }}
      >
        {years.map((year) => (
          <span key={year}>
            <span className="sm:hidden">’{String(year).slice(2)}</span>
            <span className="hidden sm:inline">{year}</span>
          </span>
        ))}
      </div>

      <ol>
        {entries.map((entry, index) => {
          const [start, end] = spans[index];
          return (
            <li
              key={`${entry.year}-${entry.title}`}
              className="border-b border-hair pb-8"
            >
              <div aria-hidden className="track h-9 pt-3">
                <div
                  className="grid h-full"
                  style={{
                    gridTemplateColumns: `repeat(${years.length}, 1fr)`,
                  }}
                >
                  <div
                    className="track-bar bg-accent"
                    style={{
                      gridColumn: `${start - first + 1} / ${end - first + 2}`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-x-8 gap-y-2 md:grid-cols-[7rem_1fr]">
                <p className="label pt-1.5 text-accent">
                  {entry.year.replace("-", " – ")}
                </p>
                <div className="space-y-3">
                  <h3 className="heading text-2xl">{entry.title}</h3>
                  <p className="prose-sheet text-muted">{entry.description}</p>
                  <TagList tags={entry.tags} />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
