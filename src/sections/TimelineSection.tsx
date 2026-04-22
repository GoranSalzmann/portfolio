"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { timeline, timelinePage } from "../data/timeline";

export default function TimelineSection() {
  const revealRef = useScrollReveal<HTMLDivElement>({ stagger: 0.12 });

  return (
    <section id="timeline" className="py-20 md:py-32 px-[5vw] bg-charcoal">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-4 mb-16">
          <p className="section-label">{timelinePage.label}</p>
          <p className="text-text-secondary max-w-xl">
            {timelinePage.subtitle}
          </p>
        </div>

        <div ref={revealRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-warm-grey md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item) => {
              const isLeft = item.side === "left";
              return (
                <div
                  key={item.year}
                  className="relative flex items-start md:items-center"
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-amber border-2 border-deep-space -translate-x-1/2 mt-2 md:mt-0 z-10" />

                  {/* Content */}
                  <div
                    className={`pl-12 md:pl-0 md:w-1/2 ${
                      isLeft
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="space-y-3">
                      <span className="font-mono text-amber text-sm">
                        {item.year}
                      </span>
                      <h3 className="font-display font-semibold text-text-primary text-xl tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {item.tags.map((tag) => (
                          <span key={tag} className="chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
