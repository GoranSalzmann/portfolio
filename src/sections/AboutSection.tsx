"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { aboutContent, aboutPage } from "../data/about";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const revealRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });

  return (
    <section id="about" className="py-20 md:py-32 px-[5vw]">
      <div className="max-w-[1200px] mx-auto">
        <div ref={revealRef} className="space-y-8">
          <h2 className="section-label">{aboutPage.label}</h2>
          <div className="max-w-3xl space-y-6 text-text-secondary leading-relaxed">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div>
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
      </div>
    </section>
  );
}
