"use client";

import { useEffect, useRef } from "react";

/**
 * A long exposure of the sky above Grafenau: stars wheel around the
 * celestial pole and leave arcs, a line of Bavarian Forest firs on the
 * horizon. The exposure "develops" once on load, then holds still.
 */

type Star = { r: number; a: number; w: number; o: number; tint: 0 | 1 | 2 };
type Tree = { x: number; base: number; h: number; hw: number };

const SWEEP = Math.PI * 0.27; // ~3.2 h of earth rotation
const DURATION = 4200;
const SEED = 485113;

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

function readVar(style: CSSStyleDeclaration, name: string) {
  return style.getPropertyValue(name).trim();
}

export function StarTrails({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let poleX = 0;
    let poleY = 0;
    let stars: Star[] = [];
    let trees: Tree[] = [];
    let progress = reduceMotion ? 1 : 0;
    let raf = 0;
    let start = 0;

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const narrow = width < 768;
      poleX = width * (narrow ? 0.78 : 0.74);
      poleY = height * (narrow ? 0.16 : 0.2);

      const maxR = Math.hypot(
        Math.max(poleX, width - poleX),
        Math.max(poleY, height - poleY)
      );
      const rand = mulberry32(SEED);
      const count = Math.round(Math.min(560, Math.max(180, (width * height) / 2400)));
      stars = [];
      for (let i = 0; i < count; i++) {
        const r = Math.sqrt(rand()) * maxR;
        const brightness = Math.pow(rand(), 3.2);
        const t = rand();
        if (r < 5) continue;
        stars.push({
          r,
          a: rand() * Math.PI * 2,
          w: 0.35 + brightness * 1.7,
          o: 0.1 + brightness * 0.8,
          tint: t < 0.07 ? 1 : t < 0.13 ? 2 : 0,
        });
      }

      const treeRand = mulberry32(SEED + 7);
      const unit = Math.min(height, 900);
      trees = [];
      let x = -20;
      while (x < width + 20) {
        const ridge =
          height -
          unit * 0.045 -
          Math.sin((x / width) * Math.PI * 1.25 + 0.5) * unit * 0.03 -
          Math.sin((x / width) * Math.PI * 4.1 + 1.7) * unit * 0.008;
        const h = unit * (0.045 + treeRand() * 0.085);
        const hw = h * (0.17 + treeRand() * 0.08);
        trees.push({ x, base: ridge, h, hw });
        x += hw * (0.45 + treeRand() * 0.75);
      }
    };

    const draw = () => {
      const style = getComputedStyle(canvas);
      const base = readVar(style, "--trail-rgb");
      const warm = readVar(style, "--trail-warm-rgb");
      const cool = readVar(style, "--trail-cool-rgb");
      const strength = parseFloat(readVar(style, "--trail-strength")) || 1;
      const ground = readVar(getComputedStyle(document.documentElement), "--sky");
      const glow = readVar(style, "--glow");

      ctx.clearRect(0, 0, width, height);

      const eased = 1 - Math.pow(1 - progress, 3);
      const sweep = Math.max(0.002, SWEEP * eased);

      ctx.lineCap = "round";
      for (const s of stars) {
        const rgb = s.tint === 1 ? warm : s.tint === 2 ? cool : base;
        ctx.strokeStyle = `rgb(${rgb} / ${Math.min(1, s.o * strength)})`;
        ctx.lineWidth = s.w;
        ctx.beginPath();
        ctx.arc(poleX, poleY, s.r, s.a, s.a + sweep);
        ctx.stroke();
      }

      // Polaris sits just off the true pole and barely moves.
      ctx.fillStyle = `rgb(${base} / 0.95)`;
      ctx.beginPath();
      ctx.arc(poleX, poleY, 2.1, 0, Math.PI * 2);
      ctx.fill();

      // airglow above the ridge
      const glowTop = height * 0.55;
      const gradient = ctx.createLinearGradient(0, glowTop, 0, height);
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(1, glow);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, glowTop, width, height - glowTop);

      // forest silhouette
      ctx.fillStyle = ground;
      ctx.beginPath();
      ctx.moveTo(-20, height);
      for (const t of trees) ctx.lineTo(t.x, t.base + 2);
      ctx.lineTo(width + 20, height);
      ctx.closePath();
      for (const t of trees) {
        const tiers = 6;
        ctx.moveTo(t.x - t.hw, t.base + 2);
        for (let i = 0; i < tiers; i++) {
          const k = i / tiers;
          ctx.lineTo(t.x - t.hw * (1 - k), t.base - t.h * k);
          ctx.lineTo(t.x - t.hw * (1 - k) * 0.38, t.base - t.h * (k + 0.55 / tiers));
        }
        ctx.lineTo(t.x, t.base - t.h);
        for (let i = tiers - 1; i >= 0; i--) {
          const k = i / tiers;
          ctx.lineTo(t.x + t.hw * (1 - k) * 0.38, t.base - t.h * (k + 0.55 / tiers));
          ctx.lineTo(t.x + t.hw * (1 - k), t.base - t.h * k);
        }
        ctx.closePath();
      }
      ctx.fill("nonzero");
    };

    const tick = (now: number) => {
      if (!start) start = now;
      progress = Math.min(1, (now - start) / DURATION);
      draw();
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    layout();
    draw();
    if (progress < 1) raf = requestAnimationFrame(tick);

    const resizeObserver = new ResizeObserver(() => {
      layout();
      draw();
    });
    resizeObserver.observe(canvas);

    const themeObserver = new MutationObserver(draw);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
