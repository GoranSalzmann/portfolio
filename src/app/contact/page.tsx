import { site } from "@/data/site";
import { contactContent, contactPage } from "@/data/contact";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-deep-space">
      {/* Header */}
      <section className="pt-32 pb-20 px-[5vw] bg-charcoal">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <p className="section-label">{contactPage.label}</p>
          <h1
            className="font-display font-bold text-text-primary leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            {contactContent.heading}
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
            {contactPage.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 px-[5vw]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
          <div className="space-y-8">
            <h2 className="font-display font-semibold text-text-primary text-2xl tracking-tight">
              {contactPage.contentTitle}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {contactContent.text}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {contactPage.contentPlaceholder1}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {contactPage.contentPlaceholder2}
            </p>

            <div className="pt-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 px-6 py-3 bg-amber text-deep-space font-display font-medium hover:bg-amber-hover transition-colors"
              >
                <Mail size={18} />
                {contactContent.cta}
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border border-warm-grey p-6 space-y-4">
              <h3 className="font-display font-medium text-text-primary">
                {contactPage.sidebarEmailTitle}
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="text-link text-amber font-mono text-sm"
              >
                {site.email}
              </a>
            </div>

            <div className="border border-warm-grey p-6 space-y-4">
              <h3 className="font-display font-medium text-text-primary">
                {contactPage.sidebarSocialTitle}
              </h3>
              <div className="space-y-2 text-sm">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-text-secondary hover:text-amber transition-colors"
                >
                  {contactPage.sidebarSocialGithub}
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-text-secondary hover:text-amber transition-colors"
                >
                  {contactPage.sidebarSocialLinkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
