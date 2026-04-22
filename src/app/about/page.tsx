import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { values, aboutPage } from "@/data/about";
import { site } from "@/data/site";
import { Icon } from "@/lib/icons";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-deep-space">
      {/* Header */}
      <section className="pt-32 pb-20 px-[5vw] bg-charcoal">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <p className="section-label">{aboutPage.label}</p>
          <h1
            className="font-display font-bold text-text-primary leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            {aboutPage.pageTitle}
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
            {aboutPage.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 px-[5vw]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
          <div className="space-y-8">
            <h2 className="font-display font-semibold text-text-primary text-2xl tracking-tight">
              {aboutPage.philosophyTitle}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {aboutPage.philosophyText[0]}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {aboutPage.philosophyText[1]}
            </p>

            <h2 className="font-display font-semibold text-text-primary text-2xl tracking-tight pt-8">
              {aboutPage.backgroundTitle}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {aboutPage.backgroundText[0]}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {aboutPage.backgroundText[1]}
            </p>

            <div className="pt-4">
              <Link
                href="/hobbies"
                className="inline-flex items-center gap-2 text-amber hover:text-amber-hover transition-colors group"
              >
                <span className="text-link">
                  {aboutPage.linkText}
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border border-warm-grey p-6 space-y-4">
              <h3 className="font-display font-medium text-text-primary">
                {aboutPage.sidebarFocusTitle}
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                {aboutPage.sidebarFocusItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-warm-grey p-6 space-y-4">
              <h3 className="font-display font-medium text-text-primary">
                {aboutPage.sidebarLocationTitle}
              </h3>
              <p className="text-text-secondary text-sm">
                {site.location}
              </p>
            </div>

            <div className="border border-warm-grey p-6 space-y-4">
              <h3 className="font-display font-medium text-text-primary">
                {aboutPage.sidebarHobbiesTitle}
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                {aboutPage.sidebarHobbiesItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="/hobbies"
                className="text-link text-amber text-sm"
              >
                {aboutPage.sidebarHobbiesLink}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 px-[5vw] bg-charcoal">
        <div className="max-w-[1200px] mx-auto">
          <p className="section-label mb-12">{aboutPage.valuesTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value) => (
              <div key={value.title} className="space-y-6">
                <div className="w-10 h-10 flex items-center justify-center border border-warm-grey">
                  <Icon name={value.icon} size={20} className="text-amber" />
                </div>
                  <h3 className="font-display font-semibold text-text-primary text-2xl tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.text}
                  </p>
                  <p className="font-display text-text-primary italic border-l-2 border-amber pl-4">
                    &ldquo;{value.quote}&rdquo;
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
