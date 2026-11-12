"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const WAVELENGTH = 980;
const STRAIGHT_UNTIL = 700;
const STEP = 16;

type Zone = { top: number; height: number };
type Dims = { width: number; height: number; zones: Zone[] };

/** Horizontal position of the centre line at a given distance down the page. */
function centreLine(width: number) {
  const amplitude = Math.max(0, width / 2 - 18) * 0.78;
  return (y: number) =>
    width / 2 +
    amplitude *
      Math.min(1, y / STRAIGHT_UNTIL) *
      Math.sin((2 * Math.PI * y) / WAVELENGTH);
}

/**
 * The road everything else sits beside: a dashed centre line that winds down
 * the full page, with a rider that follows it as the page scrolls. Sections
 * marked with `data-roadworks` repaint the line in temporary-marking yellow.
 */
export function Road() {
  const laneRef = useRef<HTMLDivElement>(null);
  const riderRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState<Dims>({ width: 0, height: 0, zones: [] });

  useEffect(() => {
    const lane = laneRef.current;
    if (!lane) return;

    const measure = () => {
      const rect = lane.getBoundingClientRect();
      const zones = Array.from(
        document.querySelectorAll<HTMLElement>("[data-roadworks]")
      ).map((el) => {
        const r = el.getBoundingClientRect();
        return { top: r.top - rect.top, height: r.height };
      });
      setDims({ width: rect.width, height: rect.height, zones });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(lane);
    measure();
    return () => observer.disconnect();
  }, []);

  const path = useMemo(() => {
    if (!dims.width || !dims.height) return "";
    const x = centreLine(dims.width);
    let d = `M${x(0).toFixed(1)} 0`;
    for (let y = STEP; y < dims.height + STEP; y += STEP) {
      d += `L${x(y).toFixed(1)} ${y}`;
    }
    return d;
  }, [dims.width, dims.height]);

  useEffect(() => {
    const lane = laneRef.current;
    const rider = riderRef.current;
    if (!lane || !rider || !dims.width) return;

    const x = centreLine(dims.width);
    let frame = 0;

    const place = () => {
      frame = 0;
      const rect = lane.getBoundingClientRect();
      const y = Math.min(
        Math.max(window.innerHeight * 0.62 - rect.top, 0),
        rect.height
      );
      const slope = (x(y + 2) - x(y - 2)) / 4;
      rider.style.transform = `translate3d(${rect.left + x(y)}px, ${
        rect.top + y
      }px, 0) rotate(${-Math.atan(slope)}rad)`;
      rider.style.opacity = "1";
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(place);
    };

    place();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [dims.width, dims.height]);

  return (
    <>
      <div ref={laneRef} className="lane" aria-hidden="true">
        {path && (
          <svg width={dims.width} height={dims.height}>
            <defs>
              <clipPath id="roadworks-zones">
                {dims.zones.map((zone, i) => (
                  <rect
                    key={i}
                    x={0}
                    y={zone.top}
                    width={dims.width}
                    height={zone.height}
                  />
                ))}
              </clipPath>
              <mask id="outside-roadworks">
                <rect width={dims.width} height={dims.height} fill="#fff" />
                {dims.zones.map((zone, i) => (
                  <rect
                    key={i}
                    x={0}
                    y={zone.top}
                    width={dims.width}
                    height={zone.height}
                    fill="#000"
                  />
                ))}
              </mask>
            </defs>
            <path d={path} className="lane-line" mask="url(#outside-roadworks)" />
            <path
              d={path}
              className="lane-line lane-line-temporary"
              clipPath="url(#roadworks-zones)"
            />
          </svg>
        )}
      </div>

      <div ref={riderRef} className="rider" aria-hidden="true">
        <svg viewBox="-24 0 88 176">
          <defs>
            <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffe9a3" stopOpacity="0.55" />
              <stop offset="1" stopColor="#ffe9a3" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M15 80 L25 80 L60 176 L-20 176 Z" fill="url(#beam)" />
          <rect x="16.5" y="1" width="7" height="21" rx="3.5" fill="#0c0e0f" />
          <rect x="17" y="62" width="6" height="21" rx="3" fill="#0c0e0f" />
          <path d="M14.5 9 h11 l-1 16 h-9 z" fill="#17191b" />
          <path
            d="M12 26 C12 19 28 19 28 26 L27 57 C27 64 13 64 13 57 Z"
            fill="#f6be00"
          />
          <path
            d="M4 62 L14 59 H26 L36 62"
            fill="none"
            stroke="#0c0e0f"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 37 L6 60 M30.5 37 L34 60"
            fill="none"
            stroke="#17191b"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <ellipse cx="20" cy="35" rx="12.5" ry="9.5" fill="#17191b" />
          <circle cx="20" cy="45" r="7.5" fill="#f2f1ea" />
          <path
            d="M14.2 48.5 Q20 54 25.8 48.5"
            fill="none"
            stroke="#17191b"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
