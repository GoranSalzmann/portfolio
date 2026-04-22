import Link from "next/link";
import { projects, projectsPage } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-deep-space">
      {/* Header */}
      <section className="pt-32 pb-20 px-[5vw] bg-charcoal">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <p className="section-label">{projectsPage.pageLabel}</p>
          <h1
            className="font-display font-bold text-text-primary leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            {projectsPage.pageTitle}
          </h1>
          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed">
            {projectsPage.subtitle}
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 md:py-32 px-[5vw]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start border-t border-warm-grey pt-12"
            >
              <div className="border border-warm-grey overflow-hidden group/image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto group-hover/image:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-display font-semibold text-text-primary text-3xl tracking-tight">
                  {project.title}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  {projectsPage.detailText}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-amber hover:text-amber-hover transition-colors group"
                >
                  <span className="text-link">{projectsPage.linkText}</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
