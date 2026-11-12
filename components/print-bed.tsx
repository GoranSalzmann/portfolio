"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { filamentHue } from "@/lib/filament";

const LAYERS = 60;
const LAYER_MM = 0.2;
const PRINT_MS = 6500;

/* Bed space, in units. The bed is centred on the origin. */
const BED_W = 1180;
const BED_D = 640;
const OBJECT_H = 132;
const TILT = 0.52;
const START_ANGLE = -0.3;
const MAX_ANGLE = 0.62;
const LINES = ["MIKE", "KARL"];
const FONT_SIZE = 300;

type Palette = { bed: string; bedEdge: string; grid: string; ink: string; dark: boolean };

function readPalette(): Palette {
  const style = getComputedStyle(document.documentElement);
  const get = (name: string) => style.getPropertyValue(name).trim();
  return {
    bed: get("--bed"),
    bedEdge: get("--bed-edge"),
    grid: get("--bed-grid"),
    ink: get("--ink"),
    dark: document.documentElement.classList.contains("dark"),
  };
}

function roundedRect(ctx: CanvasRenderingContext2D, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.roundRect(-w / 2, -h / 2, w, h, r);
}

export function PrintBed() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(LAYERS);
  const angleRef = useRef(START_ANGLE);
  const frameRef = useRef(0);
  const [layer, setLayer] = useState(LAYERS);
  const [printing, setPrinting] = useState(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    const palette = readPalette();
    const family = getComputedStyle(canvas).fontFamily;
    const angle = angleRef.current;
    const progress = progressRef.current;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    // Fit the rotated bed (at its widest allowed angle) into the canvas.
    const reachX = (BED_W / 2) * Math.cos(MAX_ANGLE) + (BED_D / 2) * Math.sin(MAX_ANGLE);
    const reachY = ((BED_W / 2) * Math.sin(MAX_ANGLE) + (BED_D / 2) * Math.cos(MAX_ANGLE)) * TILT;
    const scale = Math.min(width / (2 * reachX + 40), height / (2 * reachY + OBJECT_H + 110));
    const cx = width / 2;
    const cy = height / 2 + (OBJECT_H * scale) / 2 + 24 * scale;

    const plane = (z: number) =>
      ctx.setTransform(
        dpr * scale * cos,
        dpr * scale * sin * TILT,
        -dpr * scale * sin,
        dpr * scale * cos * TILT,
        dpr * cx,
        dpr * (cy - z * scale),
      );

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Bed: a slab with a grid, like a slicer's build plate.
    for (let z = -18; z < 0; z += 3) {
      plane(z);
      roundedRect(ctx, BED_W, BED_D, 36);
      ctx.fillStyle = palette.bedEdge;
      ctx.fill();
    }
    plane(0);
    roundedRect(ctx, BED_W, BED_D, 36);
    ctx.fillStyle = palette.bed;
    ctx.fill();
    ctx.save();
    ctx.clip();
    ctx.strokeStyle = palette.grid;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let x = -BED_W / 2 + 59; x < BED_W / 2; x += 59) {
      ctx.moveTo(x, -BED_D / 2);
      ctx.lineTo(x, BED_D / 2);
    }
    for (let y = -BED_D / 2 + 58.2; y < BED_D / 2; y += 58.2) {
      ctx.moveTo(-BED_W / 2, y);
      ctx.lineTo(BED_W / 2, y);
    }
    ctx.stroke();
    ctx.restore();

    const text = (z: number) => {
      plane(z);
      ctx.fillText(LINES[0], 0, -FONT_SIZE * 0.47);
      ctx.fillText(LINES[1], 0, FONT_SIZE * 0.47);
    };

    ctx.font = `800 ${FONT_SIZE}px ${family}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // The print itself: one filled outline per layer, stacked upwards.
    const done = Math.min(LAYERS, Math.floor(progress));
    const layerH = OBJECT_H / LAYERS;
    if (done > 0) {
      ctx.fillStyle = palette.dark ? "rgba(0,0,0,0.45)" : "rgba(16,24,43,0.2)";
      ctx.save();
      ctx.filter = "blur(5px)";
      plane(0);
      ctx.translate(16, 12);
      ctx.fillText(LINES[0], 0, -FONT_SIZE * 0.47);
      ctx.fillText(LINES[1], 0, FONT_SIZE * 0.47);
      ctx.restore();
    }
    for (let i = 0; i < done; i++) {
      const hue = filamentHue(i / (LAYERS - 1));
      const top = i === done - 1;
      const light = top ? 0.74 : i % 2 === 0 ? 0.56 : 0.6;
      ctx.fillStyle = `oklch(${light} ${top ? 0.17 : 0.2} ${hue})`;
      text((i + 1) * layerH);
    }

    // Print head. Its path is a function of progress, so scrubbing is stable.
    const parked = progress >= LAYERS;
    const hx = parked ? -BED_W / 2 + 90 : 430 * Math.sin(progress * 0.83);
    const hy = parked ? -BED_D / 2 + 80 : 170 * Math.cos(progress * 1.27);
    const hz = done * layerH + (parked ? 70 : 0);
    const px = cx + (hx * cos - hy * sin) * scale;
    const py = cy + (hx * sin + hy * cos) * TILT * scale - hz * scale;
    const u = Math.max(scale, 0.35) * 1.15;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = palette.ink;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px - 11 * u, py - 20 * u);
    ctx.lineTo(px + 11 * u, py - 20 * u);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(px - 19 * u, py - 62 * u, 38 * u, 40 * u, 5 * u);
    ctx.fill();
    ctx.fillStyle = `oklch(0.68 0.2 ${filamentHue(done / LAYERS)})`;
    ctx.fillRect(px - 2.5 * u, py - 150 * u, 5 * u, 88 * u);
  }, []);

  const stop = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    setPrinting(false);
  }, []);

  const print = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    setPrinting(true);
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / PRINT_MS);
      // Ease out: the last layers settle in slowly.
      const eased = 1 - Math.pow(1 - t, 2.2);
      progressRef.current = eased * LAYERS;
      setLayer(Math.floor(progressRef.current));
      draw();
      if (t < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setPrinting(false);
      }
    };
    frameRef.current = requestAnimationFrame(tick);
  }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;

    const family = getComputedStyle(canvas).fontFamily;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.fonts
      .load(`800 ${FONT_SIZE}px ${family}`, "MIKEARL")
      .catch(() => undefined)
      .then(() => {
        if (cancelled) return;
        if (reduced) draw();
        else print();
      });

    const resize = new ResizeObserver(() => draw());
    resize.observe(canvas);
    const theme = new MutationObserver(() => draw());
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameRef.current);
      resize.disconnect();
      theme.disconnect();
    };
  }, [draw, print]);

  // Drag sideways to turn the bed.
  const dragRef = useRef<{ x: number; angle: number } | null>(null);
  const onPointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = { x: event.clientX, angle: angleRef.current };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const next = drag.angle + (event.clientX - drag.x) * 0.004;
    angleRef.current = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, next));
    if (!printing) draw();
  };
  const onPointerUp = () => {
    dragRef.current = null;
  };

  const onScrub = (event: React.ChangeEvent<HTMLInputElement>) => {
    stop();
    const value = Number(event.target.value);
    progressRef.current = value;
    setLayer(value);
    draw();
  };

  const mm = (layer * LAYER_MM).toLocaleString("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div className="printbed">
      <canvas
        ref={canvasRef}
        className="printbed-canvas"
        aria-hidden="true"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      />
      <div className="printbed-controls">
        <label className="printbed-slider">
          <span className="sr-only">Schicht der Druckvorschau</span>
          <input
            type="range"
            min={0}
            max={LAYERS}
            step={1}
            value={layer}
            onChange={onScrub}
            aria-valuetext={`Schicht ${layer} von ${LAYERS}`}
          />
        </label>
        <p className="printbed-readout" aria-hidden="true">
          <span>
            Schicht <b>{layer}</b> von {LAYERS}
          </span>
          <span>{mm} mm</span>
        </p>
        <button type="button" className="printbed-replay" onClick={print} disabled={printing}>
          {printing ? "Druckt…" : "Neu drucken"}
        </button>
      </div>
    </div>
  );
}
