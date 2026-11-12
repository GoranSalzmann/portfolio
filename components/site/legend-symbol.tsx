const symbols = {
  // A road, drawn the way a map draws one: cased, with a bend.
  road: (
    <>
      <path className="symbol-casing" d="M4 38C16 38 14 22 24 22S34 8 44 8" />
      <path className="symbol-fill" d="M4 38C16 38 14 22 24 22S34 8 44 8" />
    </>
  ),
  // The star marks a viewpoint.
  star: (
    <path
      className="symbol-solid"
      d="M24 5l4.6 13.2 14 .3-11.2 8.4 4.1 13.4L24 32.3l-11.5 8 4.1-13.4L5.4 18.5l14-.3z"
    />
  ),
  // Stacked print layers, which are contour lines of an object.
  layers: (
    <>
      <path className="symbol-line" d="M6 36h36" />
      <path className="symbol-line" d="M9 30h30" />
      <path className="symbol-line" d="M13 24h22" />
      <path className="symbol-line" d="M16 18h16" />
      <path className="symbol-line" d="M20 12h8" />
    </>
  ),
};

export function LegendSymbol({ name }: { name: keyof typeof symbols }) {
  return (
    <svg className="symbol" viewBox="0 0 48 48" aria-hidden="true">
      {symbols[name]}
    </svg>
  );
}
