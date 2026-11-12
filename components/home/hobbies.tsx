import { hobbies, hobbiesPhotosNote, hobbiesSubtitle, type HobbyGlyph } from "@/lib/content";

function Glyph({ kind }: { kind: HobbyGlyph }) {
  const common = {
    className: "hobby-glyph",
    viewBox: "0 0 56 56",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    "aria-hidden": true,
  };

  if (kind === "road") {
    // a switchback, seen from above
    return (
      <svg {...common}>
        <path d="M8 50 C 8 36, 46 40, 46 28 S 10 22, 12 8" />
        <path d="M16 50 C 16 40, 52 44, 52 28 S 18 18, 20 8" strokeDasharray="2 4" opacity="0.6" />
      </svg>
    );
  }
  if (kind === "trails") {
    // concentric arcs around a pole
    return (
      <svg {...common}>
        <circle cx="40" cy="16" r="1.6" fill="currentColor" />
        <path d="M40 8 A 8 8 0 0 0 32.6 19" />
        <path d="M40 2 A 14 14 0 0 0 27 22" />
        <path d="M44 -3 A 20 20 0 0 0 21 27" opacity="0.8" />
        <path d="M48 -8 A 27 27 0 0 0 15 33" opacity="0.6" />
        <path d="M52 -13 A 34 34 0 0 0 9 40" opacity="0.4" />
      </svg>
    );
  }
  // print layers building a dome
  return (
    <svg {...common}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const y = 48 - i * 4.5;
        const half = 20 * Math.sqrt(1 - Math.pow(i / 8, 2));
        return <line key={i} x1={28 - half} x2={28 + half} y1={y} y2={y} />;
      })}
      <path d="M24 6 L28 12 L32 6" />
    </svg>
  );
}

export function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="wrap">
        <h2 className="section-title">Hobbies</h2>
        <p className="section-sub">{hobbiesSubtitle}</p>

        <ul className="hobby-list">
          {hobbies.map((hobby) => (
            <li key={hobby.title} className="hobby">
              <Glyph kind={hobby.glyph} />
              <h3 className="hobby-title">{hobby.title}</h3>
              <div className="hobby-text">
                <p>{hobby.shortDescription}</p>
                {hobby.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <p className="photo-note">{hobbiesPhotosNote}</p>
      </div>
    </section>
  );
}
