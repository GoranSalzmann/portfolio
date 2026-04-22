"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { site } from "../data/site";
import { contactContent, contactPage } from "../data/contact";
import { Mail } from "lucide-react";

export default function ContactSection() {
  const revealRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });

  return (
    <section id="contact" className="py-20 md:py-32 px-[5vw]">
      <div className="max-w-[1200px] mx-auto">
        <div ref={revealRef} className="max-w-2xl space-y-8">
          <p className="section-label">{contactPage.label}</p>
          <p className="text-text-secondary leading-relaxed text-lg">
            {contactContent.text}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 px-6 py-3 bg-amber text-deep-space font-display font-medium hover:bg-amber-hover transition-colors"
            >
              <Mail size={18} />
              {contactContent.cta}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-link text-amber font-mono text-sm"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
