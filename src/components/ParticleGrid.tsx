"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
}

export default function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let time = 0;

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      const spacing = Math.min(w, h) / 35;
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;

      particles = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            x: i * spacing,
            y: j * spacing,
            baseX: i * spacing,
            baseY: j * spacing,
            size: 2 + Math.random() * 1.5,
          });
        }
      }
    };

    const animate = () => {
      time += 0.015;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;
      const radius = 180;

      for (const p of particles) {
        const waveX = Math.sin(p.baseY * 0.008 + time) * 8;
        const waveY = Math.cos(p.baseX * 0.008 + time) * 6;
        let px = p.baseX + waveX;
        let py = p.baseY + waveY;

        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius) {
          const force = (radius - dist) / radius;
          const angle = Math.atan2(dy, dx);
          px += Math.cos(angle) * force * 30;
          py += Math.sin(angle) * force * 30;
        }

        const finalDist = Math.sqrt((px - mouse.x) ** 2 + (py - mouse.y) ** 2);
        const alpha = finalDist < radius ? 0.3 + (1 - finalDist / radius) * 0.5 : 0.25;
        const sizeMult = finalDist < radius ? 1.5 : 1;

        ctx.beginPath();
        ctx.arc(px, py, p.size * sizeMult, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 97, 1, ${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    init();
    animate();
    window.addEventListener("resize", init);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", init);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
