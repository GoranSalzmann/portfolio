"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { aboutContent, aboutPage } from "../data/about";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const revealRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 md:py-32 px-[5vw]">
      <div className="max-w-[1200px] mx-auto">
        <div ref={revealRef} className="space-y-8">
          <p className="section-label">{aboutPage.label}</p>
          <div className="max-w-3xl space-y-6 text-text-secondary leading-relaxed">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div>
            <a
              href="#projects"
              onClick={handleProjectsClick}
              className="inline-flex items-center gap-2 text-amber hover:text-amber-hover transition-colors group"
            >
              <span className="text-link">
                {aboutPage.linkText}
              </span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
