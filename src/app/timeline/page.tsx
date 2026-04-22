import { timeline, timelinePage } from "@/data/timeline";

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-deep-space">
      {/* Header */}
      <section className="pt-32 pb-20 px-[5vw] bg-charcoal">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <p className="section-label">{timelinePage.label}</p>
          <h1
            className="font-display font-bold text-text-primary leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            {timelinePage.pageTitle}
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
            {timelinePage.subtitle}
          </p>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="py-20 md:py-32 px-[5vw]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 border-t border-warm-grey pt-12"
            >
              <span className="font-mono text-amber text-xl">{item.year}</span>
              <div className="space-y-4">
                <h2 className="font-display font-semibold text-text-primary text-2xl tracking-tight">
                  {item.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  {timelinePage.detailText}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
