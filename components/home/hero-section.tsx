"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { ParticleGrid } from "@/components/effects/particle-grid";
import { site } from "@/lib/site";

const subtitles = [
  "Softwareengineer",
  "Anwendungsentwickler",
  "Integration",
  "DevOps",
];

function subscribeReducedMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return true;
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

function SubtitleFlipper() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % subtitles.length);
        setAnimating(false);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  if (reducedMotion) {
    return <span>{subtitles[0]}</span>;
  }

  return (
    <div className="relative grid h-[1.5em] place-items-center overflow-hidden">
      <span
        key={current}
        className={animating ? "subtitle-flip-exit" : "subtitle-flip-enter"}
      >
        {subtitles[current]}
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ParticleGrid />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(232,97,1,0.08) 0%, transparent 60%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, #0F0E0C 100%)",
        }}
      />

      <div className="relative z-10 px-6 text-center">
        <div className="mb-6 overflow-hidden font-mono text-sm uppercase tracking-[0.1em] text-amber md:text-base">
          <SubtitleFlipper />
        </div>
        <h1
          className="font-display font-bold leading-[0.9] tracking-tight text-text-primary"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
        >
          MIKE
          <br />
          KARL
        </h1>
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="h-px w-[60px] bg-amber" />
          <p className="font-mono text-xs tracking-wider text-text-secondary md:text-sm">
            {site.location}
          </p>
        </div>
      </div>
    </section>
  );
}
