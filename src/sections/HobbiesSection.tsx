"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { hobbies, hobbiesPage } from "../data/hobbies";
import { Icon } from "@/lib/icons";

export default function HobbiesSection() {
  const revealRef = useScrollReveal<HTMLDivElement>({ stagger: 0.2 });

  return (
    <section id="hobbies" className="py-20 md:py-32 px-[5vw]">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="section-label">{hobbiesPage.label}</h2>
          <p className="text-text-secondary max-w-xl">
            {hobbiesPage.sectionSubtitle}
          </p>
        </div>
        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="border border-warm-grey p-8 space-y-6 group hover:border-amber/30 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-warm-grey">
                <Icon name={hobby.icon} size={20} className="text-amber" />
              </div>
                <h3 className="font-display font-semibold text-text-primary text-2xl tracking-tight">
                  {hobby.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {hobby.shortDescription}
                </p>
                <Link
                  href="/hobbies"
                  className="inline-flex items-center gap-2 text-amber hover:text-amber-hover transition-colors group/link"
                >
                  <span className="text-link">{hobbiesPage.linkText}</span>
                  <ArrowRight
                    size={18}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
