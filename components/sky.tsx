"use client";

import { useEffect, useRef } from "react";

/**
 * The page background: a long exposure of the northern sky.
 * Stars turn around the celestial pole; scrolling lengthens the exposure,
 * so points become trails. 15° of rotation equal one hour of exposure.
 */

const STAR_COUNT = 900;
const INTRO_DEGREES = 5;
const SCROLL_DEGREES = 72;
const INTRO_MS = 2200;

const NIGHT_COLORS = ["#ffffff", "#ffffff", "#cfdcff", "#b9c8ff", "#ffe2b0", "#ffc4a3"];
const DAY_COLORS = ["#0f1838", "#0f1838", "#0f1838", "#2a3cae", "#2a3cae", "#b8456a"];

type Star = { u: number; theta: number; mag: number; color: number };

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeStars(): Star[] {
  const random = mulberry32(4886);
  const stars: Star[] = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      u: Math.sqrt(random()),
      theta: random() * Math.PI * 2,
      // Few bright stars, many faint ones.
      mag: Math.pow(random(), 3.2),
      color: Math.floor(random() * NIGHT_COLORS.length),
    });
  }
  return stars;
}

function formatExposure(degrees: number) {
  const minutes = Math.round((degrees / 15) * 60);
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h} h ${String(m).padStart(2, "0")} min` : `${m} min`;
}

export function Sky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const stars = makeStars();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let intro = reducedMotion.matches ? 1 : 0;
    let introStart: number | null = null;

    const draw = () => {
      frame = 0;
      const dark = document.documentElement.classList.contains("dark");
      const colors = dark ? NIGHT_COLORS : DAY_COLORS;

      const scrollable = document.documentElement.scrollHeight - height;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      const degrees = intro * INTRO_DEGREES + progress * SCROLL_DEGREES;
      const sweep = (degrees * Math.PI) / 180;

      const narrow = width < 768;
      const poleX = width * (narrow ? 0.8 : 0.76);
      const poleY = height * (narrow ? 0.2 : 0.34);
      const reach = Math.hypot(Math.max(poleX, width - poleX), Math.max(poleY, height - poleY));

      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";
      const calm = (dark ? 1 : 0.62) * (narrow ? 0.75 : 1) * (1 - 0.3 * progress);

      for (const star of stars) {
        const r = Math.max(5, star.u * reach);
        const arc = Math.max(sweep, 1 / r);
        ctx.beginPath();
        // Facing north the sky turns counter-clockwise.
        ctx.arc(poleX, poleY, r, star.theta, star.theta - arc, true);
        ctx.strokeStyle = colors[star.color];
        ctx.globalAlpha = (0.28 + 0.72 * star.mag) * calm;
        ctx.lineWidth = 0.9 + 2 * star.mag;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (veilRef.current) {
        const veil = Math.min(1, Math.max(0, (window.scrollY - height * 0.3) / (height * 0.45)));
        veilRef.current.style.opacity = String(veil);
      }
      if (readoutRef.current) {
        readoutRef.current.textContent = formatExposure(degrees);
        // The last stretch of the page is the dark ground in both themes.
        readoutRef.current.parentElement?.classList.toggle(
          "exposure-on-ground",
          scrollable > 0 && scrollable - window.scrollY < 70
        );
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      schedule();
    };

    let introFrame = 0;
    const runIntro = (now: number) => {
      introStart ??= now;
      const t = Math.min(1, (now - introStart) / INTRO_MS);
      intro = 1 - Math.pow(1 - t, 3);
      schedule();
      if (t < 1) introFrame = requestAnimationFrame(runIntro);
    };

    resize();
    if (!reducedMotion.matches) introFrame = requestAnimationFrame(runIntro);

    const themeObserver = new MutationObserver(schedule);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    const sizeObserver = new ResizeObserver(schedule);
    sizeObserver.observe(document.body);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(introFrame);
      themeObserver.disconnect();
      sizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div className="sky">
        <canvas ref={canvasRef} className="h-full w-full" />
        <div ref={veilRef} className="sky-veil" />
      </div>
      <p className="exposure">
        Belichtung <span ref={readoutRef}>0 min</span>
      </p>
    </div>
  );
}
