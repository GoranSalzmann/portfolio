"use client";

import { useEffect, useRef, useState } from "react";
import { timeline, timelineSubtitle } from "@/lib/content";

// Horizontal position of each star inside the middle column (desktop),
// so the career path reads as a constellation, not a ruler.
const OFFSETS = ["62%", "28%", "70%", "34%", "56%"];

export function Timeline() {
  const listRef = useRef<HTMLDivElement>(null);
  const starRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [points, setPoints] = useState<string>("");

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const measure = () => {
      const box = list.getBoundingClientRect();
      const pts = starRefs.current
        .filter((el): el is HTMLSpanElement => el !== null)
        .map((el) => {
          const r = el.getBoundingClientRect();
          return `${(r.left + r.width / 2 - box.left).toFixed(1)},${(
            r.top + r.height / 2 - box.top
          ).toFixed(1)}`;
        });
      setPoints(pts.join(" "));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  const count = timeline.length;

  return (
    <section id="timeline" className="section">
      <div className="wrap">
        <h2 className="section-title">Werdegang</h2>
        <p className="section-sub">{timelineSubtitle}</p>

        <div ref={listRef} className="constellation">
          <svg className="constellation-lines" aria-hidden>
            {points && (
              <polyline
                points={points}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            )}
          </svg>

          <ol>
          {timeline.map((entry, i) => {
            // newer entries burn brighter
            const size = 6 + ((count - 1 - i) / (count - 1)) * 8;
            return (
              <li
                key={`${entry.year}-${entry.title}`}
                className="station"
                data-side={entry.side}
              >
                <div className="station-star-cell">
                  <span
                    ref={(el) => {
                      starRefs.current[i] = el;
                    }}
                    className="star"
                    data-spikes={i === 0}
                    style={
                      {
                        "--size": `${size}px`,
                        "--x": OFFSETS[i % OFFSETS.length],
                        "--tint": i === 0 ? "var(--halpha)" : "var(--oiii)",
                      } as React.CSSProperties
                    }
                  />
                </div>
                <p className="station-year">
                  <time>{entry.year.replace("-", "–")}</time>
                </p>
                <div className="station-body">
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                  <ul className="station-tags" aria-label="Schwerpunkte">
                    {entry.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
          </ol>
        </div>
      </div>
    </section>
  );
}
