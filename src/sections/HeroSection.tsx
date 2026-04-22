"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleGrid from "../components/ParticleGrid";
import { heroContent, site } from "../data/site";

const subtitles = heroContent.subtitle;

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;
    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "40% top",
          scrub: true,
        },
      });

      gsap.to(content, {
        opacity: 0,
        scale: 0.95,
        y: -50,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Particle grid background */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <ParticleGrid />
      </div>

      {/* Amber radial gradient from top */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(232,97,1,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Bottom fade to deep space */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, #0F0E0C 100%)",
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6"
      >
        <div className="font-mono text-amber text-sm md:text-base tracking-[0.1em] uppercase mb-6 overflow-hidden">
          <SubtitleFlipper />
        </div>
        <h1
          className="font-display font-bold text-text-primary leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
        >
          {heroContent.nameFirst}
          <br />
          {heroContent.nameLast}
        </h1>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-[60px] h-px bg-amber" />
          <p className="font-mono text-text-secondary text-xs md:text-sm tracking-wider">
            {site.location}
          </p>
        </div>
      </div>
    </section>
  );
}

function SubtitleFlipper() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLSpanElement>(".subtitle-item");
    if (items.length <= 1) return;

    gsap.set(items, { yPercent: 100, opacity: 0 });
    gsap.set(items[0], { yPercent: 0, opacity: 1 });

    let current = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    const duration = 0.5;
    const hold = 2500;

    const showNext = () => {
      const next = (current + 1) % items.length;

      gsap.to(items[current], {
        yPercent: -100,
        opacity: 0,
        duration,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        items[next],
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration, ease: "power2.inOut" }
      );

      current = next;
      timeoutId = setTimeout(showNext, hold);
    };

    timeoutId = setTimeout(showNext, hold);

    return () => {
      clearTimeout(timeoutId);
      gsap.killTweensOf(items);
    };
  }, []);

  return (
    <div ref={containerRef} className="grid place-items-center">
      {subtitles.map((text, i) => (
        <span
          key={text}
          className="subtitle-item col-start-1 row-start-1 whitespace-nowrap"
          aria-hidden={i !== 0}
        >
          {text}
        </span>
      ))}
    </div>
  );
}
