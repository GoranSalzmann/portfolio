/**
 * The end of the page: dawn over the spruce ridge of the Bavarian Forest.
 * The silhouette is generated from a fixed seed so server and client agree.
 */

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

const WIDTH = 1600;
const HEIGHT = 240;
const n = (value: number) => value.toFixed(1);

function ridge(x: number) {
  return 168 + 26 * Math.sin(x / 240 + 0.6) + 11 * Math.sin(x / 67 + 2);
}

function spruce(x: number, base: number, h: number, w: number) {
  const tiers = 5;
  let left = "";
  let right = "";
  for (let i = 0; i < tiers; i++) {
    const y = base - (h * i) / tiers;
    const yNext = base - (h * (i + 0.9)) / tiers;
    const span = w * (1 - i / tiers);
    const tuck = span * 0.55;
    left += `L${n(x - span)} ${n(y)}L${n(x - tuck)} ${n(yNext)}`;
    right = `L${n(x + tuck)} ${n(yNext)}L${n(x + span)} ${n(y)}` + right;
  }
  return `M${n(x)} ${n(base + 8)}${left}L${n(x)} ${n(base - h)}${right}Z`;
}

function buildTreeline() {
  const random = mulberry32(1340);
  let ground = `M0 ${HEIGHT}`;
  for (let x = 0; x <= WIDTH; x += 20) ground += `L${x} ${n(ridge(x))}`;
  ground += `L${WIDTH} ${HEIGHT}Z`;

  let trees = "";
  for (let x = -10; x < WIDTH + 10; x += 7 + random() * 17) {
    const h = 26 + Math.pow(random(), 1.6) * 92;
    trees += spruce(x, ridge(x), h, h * (0.17 + random() * 0.07));
  }
  return ground + trees;
}

const treeline = buildTreeline();

export function Horizon() {
  return (
    <div className="horizon" aria-hidden="true">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMax slice"
        className="block h-[clamp(9rem,22vw,15rem)] w-full"
      >
        <path d={treeline} fill="var(--ground)" />
      </svg>
    </div>
  );
}
