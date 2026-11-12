/**
 * Builds the hero map: a stylised relief of Lower Bavaria and the Bavarian
 * Forest. Towns, summits and rivers sit at their real positions; the contour
 * lines come from a synthetic height field shaped around them.
 *
 * Everything here is deterministic and runs once at build time.
 */

const UNITS_PER_KM = 10;
const WEST_KM = -95;
const NORTH_KM = 38;
const WIDTH_KM = 160;
const HEIGHT_KM = 90;

export const MAP_WIDTH = WIDTH_KM * UNITS_PER_KM;
export const MAP_HEIGHT = HEIGHT_KM * UNITS_PER_KM;

const ORIGIN = { lat: 48.857, lon: 13.397 }; // Grafenau
const KM_PER_DEG_LAT = 111.2;
const KM_PER_DEG_LON = 73.25;

type Km = { e: number; n: number };
export type Point = { x: number; y: number };

function km(lat: number, lon: number): Km {
  return {
    e: (lon - ORIGIN.lon) * KM_PER_DEG_LON,
    n: (lat - ORIGIN.lat) * KM_PER_DEG_LAT,
  };
}

function toPoint({ e, n }: Km): Point {
  return {
    x: Math.round((e - WEST_KM) * UNITS_PER_KM),
    y: Math.round((NORTH_KM - n) * UNITS_PER_KM),
  };
}

export function at(lat: number, lon: number): Point {
  return toPoint(km(lat, lon));
}

const DANUBE: [number, number][] = [
  [49.02, 12.05],
  [48.99, 12.4],
  [48.885, 12.575],
  [48.905, 12.69],
  [48.825, 12.955],
  [48.765, 13.025],
  [48.68, 13.115],
  [48.635, 13.19],
  [48.574, 13.465],
  [48.555, 13.64],
  [48.52, 13.705],
  [48.43, 13.87],
  [48.37, 14.02],
  [48.33, 14.3],
];

const INN: [number, number][] = [
  [48.36, 13.38],
  [48.455, 13.435],
  [48.574, 13.465],
];

const ROUTE: [number, number][] = [
  [49.017, 13.233], // Zwiesel
  [48.972, 13.127], // Regen
  [48.9, 13.04],
  [48.841, 12.961], // Deggendorf
  [48.805, 13.07],
  [48.75, 13.2],
  [48.685, 13.33],
  [48.574, 13.461], // Passau
];

const SUMMITS = [
  { lat: 49.1125, lon: 13.136, rise: 560, spread: 4.5 }, // Großer Arber
  { lat: 48.9795, lon: 13.39, rise: 540, spread: 4 }, // Großer Rachel
  { lat: 48.939, lon: 13.507, rise: 470, spread: 3.5 }, // Lusen
  { lat: 49.085, lon: 13.28, rise: 350, spread: 3.5 }, // Falkenstein
  { lat: 48.777, lon: 13.803, rise: 430, spread: 4.5 }, // Dreisessel
  { lat: 48.867, lon: 13.03, rise: 520, spread: 4.5 }, // Einödriegel
  { lat: 48.817, lon: 13.217, rise: 380, spread: 4 }, // Brotjacklriegel
].map((s) => ({ ...km(s.lat, s.lon), rise: s.rise, spread: s.spread }));

const danubeKm = DANUBE.map(([lat, lon]) => km(lat, lon));

function smoothstep(a: number, b: number, v: number) {
  const t = Math.min(1, Math.max(0, (v - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

/** Signed distance to the Danube in km, positive on the north-east bank. */
function danubeDistance(e: number, n: number) {
  let best = Infinity;
  let sign = 1;
  for (let i = 0; i < danubeKm.length - 1; i++) {
    const a = danubeKm[i];
    const b = danubeKm[i + 1];
    const dx = b.e - a.e;
    const dy = b.n - a.n;
    const t = Math.min(
      1,
      Math.max(0, ((e - a.e) * dx + (n - a.n) * dy) / (dx * dx + dy * dy))
    );
    const px = e - (a.e + t * dx);
    const py = n - (a.n + t * dy);
    const d = Math.hypot(px, py);
    if (d < best) {
      best = d;
      sign = dx * (n - a.n) - dy * (e - a.e) >= 0 ? 1 : -1;
    }
  }
  return best * sign;
}

function hash(ix: number, iy: number) {
  let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ 0x5bd1e995;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

function valueNoise(x: number, y: number) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const top = hash(ix, iy) * (1 - ux) + hash(ix + 1, iy) * ux;
  const bottom = hash(ix, iy + 1) * (1 - ux) + hash(ix + 1, iy + 1) * ux;
  return top * (1 - uy) + bottom * uy;
}

function fbm(x: number, y: number) {
  let sum = 0;
  let amplitude = 0.5;
  let frequency = 1;
  for (let octave = 0; octave < 4; octave++) {
    sum += amplitude * valueNoise(x * frequency, y * frequency);
    amplitude *= 0.5;
    frequency *= 2.03;
  }
  return sum / 0.9375 - 0.5;
}

function elevation(e: number, n: number) {
  const s = danubeDistance(e, n);
  let h =
    s >= 0
      ? 315 + 560 * smoothstep(1, 30, s) - 150 * smoothstep(36, 62, s)
      : 325 + 100 * smoothstep(0, 22, -s);
  for (const summit of SUMMITS) {
    const d2 = (e - summit.e) ** 2 + (n - summit.n) ** 2;
    h += summit.rise * Math.exp(-d2 / (2 * summit.spread ** 2));
  }
  const roughness = 70 + 190 * smoothstep(0, 26, s);
  h += fbm(e / 13 + 40, n / 13 + 40) * roughness;
  return h;
}

/* ------------------------------------------------------------------ */
/* Contours: marching squares, chained into polylines, then smoothed.  */
/* ------------------------------------------------------------------ */

const NX = WIDTH_KM + 1;
const NY = HEIGHT_KM + 1;

// Which cell edges each marching-squares case connects.
// Edges: 0 top, 1 right, 2 bottom, 3 left.
const CASES: number[][][] = [
  [],
  [[3, 2]],
  [[2, 1]],
  [[3, 1]],
  [[0, 1]],
  [
    [0, 3],
    [2, 1],
  ],
  [[0, 2]],
  [[0, 3]],
  [[0, 3]],
  [[0, 2]],
  [
    [0, 1],
    [3, 2],
  ],
  [[0, 1]],
  [[3, 1]],
  [[2, 1]],
  [[3, 2]],
  [],
];

function contourPath(grid: Float32Array, level: number) {
  const points = new Map<number, Point>();
  const links = new Map<number, number[]>();
  const segments: [number, number][] = [];

  const value = (i: number, j: number) => grid[j * NX + i];
  const edgeId = (i: number, j: number, vertical: boolean) =>
    (j * NX + i) * 2 + (vertical ? 1 : 0);

  const edgePoint = (i: number, j: number, edge: number) => {
    // Resolve the cell edge to its two grid corners.
    const [ai, aj, bi, bj, id] =
      edge === 0
        ? [i, j, i + 1, j, edgeId(i, j, false)]
        : edge === 1
          ? [i + 1, j, i + 1, j + 1, edgeId(i + 1, j, true)]
          : edge === 2
            ? [i, j + 1, i + 1, j + 1, edgeId(i, j + 1, false)]
            : [i, j, i, j + 1, edgeId(i, j, true)];
    if (!points.has(id)) {
      const va = value(ai, aj);
      const vb = value(bi, bj);
      const t = (level - va) / (vb - va);
      points.set(id, {
        x: Math.round((ai + (bi - ai) * t) * UNITS_PER_KM),
        y: Math.round((aj + (bj - aj) * t) * UNITS_PER_KM),
      });
    }
    return id;
  };

  for (let j = 0; j < NY - 1; j++) {
    for (let i = 0; i < NX - 1; i++) {
      const index =
        (value(i, j) > level ? 8 : 0) |
        (value(i + 1, j) > level ? 4 : 0) |
        (value(i + 1, j + 1) > level ? 2 : 0) |
        (value(i, j + 1) > level ? 1 : 0);
      for (const [from, to] of CASES[index]) {
        const a = edgePoint(i, j, from);
        const b = edgePoint(i, j, to);
        const segment = segments.push([a, b]) - 1;
        for (const id of [a, b]) {
          const list = links.get(id);
          if (list) list.push(segment);
          else links.set(id, [segment]);
        }
      }
    }
  }

  const used = new Uint8Array(segments.length);
  const walk = (start: number, chain: number[]) => {
    let current = start;
    for (;;) {
      const next = links.get(current)?.find((s) => !used[s]);
      if (next === undefined) return;
      used[next] = 1;
      const [a, b] = segments[next];
      current = a === current ? b : a;
      chain.push(current);
    }
  };

  let d = "";
  for (let s = 0; s < segments.length; s++) {
    if (used[s]) continue;
    used[s] = 1;
    const forward = [segments[s][1]];
    walk(segments[s][1], forward);
    const backward = [segments[s][0]];
    walk(segments[s][0], backward);
    const chain = backward.reverse().concat(forward);
    if (chain.length < 5) continue;

    const line = chain.map((id) => points.get(id)!);
    let cx = line[0].x;
    let cy = line[0].y;
    d += `M${cx} ${cy}`;
    for (let k = 1; k < line.length - 1; k++) {
      const p = line[k];
      const q = line[k + 1];
      const mx = Math.round((p.x + q.x) / 2);
      const my = Math.round((p.y + q.y) / 2);
      d += `q${p.x - cx} ${p.y - cy} ${mx - cx} ${my - cy}`;
      cx = mx;
      cy = my;
    }
    const last = line[line.length - 1];
    d += `l${last.x - cx} ${last.y - cy}`;
  }
  return d;
}

/** Row-run rectangles covering every cell above `level`; blurred when drawn. */
function areaPath(grid: Float32Array, level: number) {
  let d = "";
  for (let j = 0; j < NY - 1; j++) {
    let runStart = -1;
    for (let i = 0; i <= NX - 1; i++) {
      const inside = i < NX - 1 && grid[j * NX + i] > level;
      if (inside && runStart < 0) runStart = i;
      if (!inside && runStart >= 0) {
        d += `M${runStart * UNITS_PER_KM} ${j * UNITS_PER_KM}h${
          (i - runStart) * UNITS_PER_KM
        }v${UNITS_PER_KM}h${-(i - runStart) * UNITS_PER_KM}z`;
        runStart = -1;
      }
    }
  }
  return d;
}

/** Catmull-Rom spline through the points, as a cubic Bézier path. */
function splinePath(coords: [number, number][]) {
  const p = coords.map(([lat, lon]) => at(lat, lon));
  let d = `M${p[0].x} ${p[0].y}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[Math.max(0, i - 1)];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[Math.min(p.length - 1, i + 2)];
    const c1x = Math.round(p1.x + (p2.x - p0.x) / 6);
    const c1y = Math.round(p1.y + (p2.y - p0.y) / 6);
    const c2x = Math.round(p2.x - (p3.x - p1.x) / 6);
    const c2y = Math.round(p2.y - (p3.y - p1.y) / 6);
    d += `C${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`;
  }
  return d;
}

function build() {
  const grid = new Float32Array(NX * NY);
  for (let j = 0; j < NY; j++) {
    for (let i = 0; i < NX; i++) {
      grid[j * NX + i] = elevation(WEST_KM + i, NORTH_KM - j);
    }
  }

  let minor = "";
  let major = "";
  for (let level = 400; level <= 1400; level += 100) {
    if (level % 500 === 0) major += contourPath(grid, level);
    else minor += contourPath(grid, level);
  }

  return {
    minor,
    major,
    forest: areaPath(grid, 560),
    highForest: areaPath(grid, 900),
    danube: splinePath(DANUBE),
    inn: splinePath(INN),
    route: splinePath(ROUTE),
  };
}

export const terrain = build();
