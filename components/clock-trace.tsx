const CYCLES = 36;
const WIDTH = 1000;
const HEIGHT = 64;
const HIGH = 6;
const LOW = 58;

// A square wave like a logic analyzer capture of the 6502 phi2 clock.
function clockPath(cycles: number) {
  const period = WIDTH / cycles;
  let d = `M0 ${LOW}`;
  for (let i = 0; i < cycles; i++) {
    const x = i * period;
    d += ` V${HIGH} H${x + period / 2} V${LOW} H${x + period}`;
  }
  return d;
}

export function ClockTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`clock-trace ${className}`}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Taktsignal"
    >
      <path
        pathLength={1}
        d={clockPath(CYCLES)}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
