import { hobbies, hobbiesPage } from "@/data/hobbies";
import { Icon } from "@/lib/icons";

export default function HobbiesPage() {
  return (
    <main className="min-h-screen bg-deep-space">
      {/* Header */}
      <section className="pt-32 pb-20 px-[5vw] bg-charcoal">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <p className="section-label">{hobbiesPage.label}</p>
          <h1
            className="font-display font-bold text-text-primary leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            {hobbiesPage.pageTitle}
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
            {hobbiesPage.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Hobbies Content */}
      <section className="py-20 md:py-32 px-[5vw]">
        <div className="max-w-[1200px] mx-auto space-y-24">
          {hobbies.map((hobby, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={hobby.id}
                className={`grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start ${
                  isEven ? "" : "lg:grid-cols-[2fr_1fr]"
                }`}
              >
                <div className={`space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="w-12 h-12 flex items-center justify-center border border-warm-grey">
                    <Icon name={hobby.icon} size={24} className="text-amber" />
                  </div>
                  <h2 className="font-display font-semibold text-text-primary text-3xl tracking-tight">
                    {hobby.title}
                  </h2>
                </div>
                <div className={`space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  {hobby.description.map((paragraph, i) => (
                    <p key={i} className="text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-[5vw] bg-charcoal">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <p className="font-display text-text-primary text-2xl md:text-3xl italic leading-relaxed">
            &ldquo;{hobbiesPage.quote}&rdquo;
          </p>
          <p className="text-text-secondary text-sm font-mono">
            {hobbiesPage.quoteAuthor}
          </p>
        </div>
      </section>
    </main>
  );
}
