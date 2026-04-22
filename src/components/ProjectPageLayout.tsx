"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projectLayout } from "../data/projects";

interface GalleryItem {
  src: string;
  alt: string;
}

interface Stat {
  label: string;
  value: string;
}

interface Feature {
  title: string;
  description: string;
}

interface AdjacentProject {
  title: string;
  link: string;
}

interface ProjectPageLayoutProps {
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  duration: string;
  status: string;
  description: string[];
  image: string;
  imageAlt: string;
  features: Feature[];
  stats: Stat[];
  gallery: GalleryItem[];
  prevProject: AdjacentProject;
  nextProject: AdjacentProject;
}

export default function ProjectPageLayout({
  title,
  subtitle,
  tags,
  year,
  duration,
  status,
  description,
  image,
  imageAlt,
  features,
  stats,
  gallery,
  prevProject,
  nextProject,
}: ProjectPageLayoutProps) {
  const router = useRouter();
  const heroRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, start: "top 90%" });
  const descRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });
  const techRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });
  const galleryRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <main className="min-h-screen bg-deep-space">
      {/* Hero */}
      <section className="pt-32 pb-20 px-[5vw] bg-charcoal">
        <div ref={heroRef} className="max-w-[1200px] mx-auto space-y-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-link text-amber hover:opacity-80 transition-opacity cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>{projectLayout.backLabel}</span>
          </button>

          <div className="space-y-4">
            <h1
              className="font-display font-bold text-text-primary leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              {title}
            </h1>
            <p className="font-display font-medium text-amber text-xl md:text-2xl">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="font-mono text-text-secondary text-sm flex flex-wrap gap-x-6 gap-y-2">
            <span>{projectLayout.yearLabel}: {year}</span>
            <span>|</span>
            <span>{projectLayout.durationLabel}: {duration}</span>
            <span>|</span>
            <span>{projectLayout.statusLabel}: {status}</span>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 md:py-32 px-[5vw]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
          <div ref={descRef} className="space-y-8">
            <h2 className="font-display font-semibold text-text-primary text-3xl md:text-4xl tracking-tight">
              {projectLayout.descriptionTitle}
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              {description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="border border-warm-grey overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 md:py-32 px-[5vw] bg-charcoal">
        <div ref={techRef} className="max-w-[800px] mx-auto space-y-12">
          <h2 className="font-display font-semibold text-text-primary text-3xl md:text-4xl tracking-tight">
            {projectLayout.techTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-warm-grey p-6 space-y-4"
              >
                <h3 className="font-display font-medium text-text-primary text-lg">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-warm-grey">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <p className="font-display font-bold text-text-primary text-2xl md:text-3xl text-amber">
                  {stat.value}
                </p>
                <p className="text-text-secondary text-xs font-mono uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 px-[5vw]">
        <div ref={galleryRef} className="max-w-[1200px] mx-auto space-y-12">
          <h2 className="font-display font-semibold text-text-primary text-3xl md:text-4xl tracking-tight">
            {projectLayout.galleryTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div
                key={item.src}
                className="border border-warm-grey overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="py-20 px-[5vw] bg-charcoal">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href={prevProject.link}
            replace
            className="inline-flex items-center gap-3 px-6 py-3 border border-warm-grey text-text-primary hover:border-amber hover:text-amber transition-colors"
          >
            <ArrowLeft size={16} />
            <div className="text-left">
              <p className="text-text-secondary text-xs mb-0.5">{projectLayout.prevProjectLabel}</p>
              <p className="font-display font-medium text-sm">{prevProject.title}</p>
            </div>
          </Link>

          <Link
            href={nextProject.link}
            replace
            className="inline-flex items-center gap-3 px-6 py-3 border border-warm-grey text-text-primary hover:border-amber hover:text-amber transition-colors"
          >
            <div className="text-right">
              <p className="text-text-secondary text-xs mb-0.5">{projectLayout.nextProjectLabel}</p>
              <p className="font-display font-medium text-sm">{nextProject.title}</p>
            </div>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
