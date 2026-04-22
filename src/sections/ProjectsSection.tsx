"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects, projectsPage } from "../data/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const revealRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });

  return (
    <section id="projects" className="py-20 md:py-32 px-[5vw] bg-charcoal">
      <div className="max-w-[1200px] mx-auto">
        <div ref={revealRef} className="space-y-12">
          <div className="space-y-4">
            <h2 className="section-label">{projectsPage.sectionLabel}</h2>
            <p className="text-text-secondary max-w-xl">
              {projectsPage.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group block border border-warm-grey bg-deep-space overflow-hidden hover:border-amber/50 transition-colors duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-deep-space/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 text-amber translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] delay-100">
                      {projectsPage.caseStudyLabel}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold text-text-primary text-xl tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
