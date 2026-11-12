/** German place-name sign (Ortstafel): where the ride starts. */
export function TownSign({ town, district }: { town: string; district: string }) {
  return (
    <div className="sign">
      <div className="sign-face">
        <p className="sign-town">{town}</p>
        <p className="sign-district">{district}</p>
      </div>
    </div>
  );
}

/**
 * Town-exit sign: the next destination on top, the place being left struck
 * through underneath.
 */
export function ExitSign({ next, leaving }: { next: string; leaving: string }) {
  return (
    <div
      className="sign sign-exit"
      role="img"
      aria-label={`Ortsausgangsschild: nächstes Ziel ${next}, ${leaving} endet hier`}
    >
      <div className="sign-face" aria-hidden="true">
        <p className="sign-next">{next}</p>
        <p className="sign-leaving">{leaving}</p>
      </div>
    </div>
  );
}

/** Red and white roadworks barrier. */
export function Barrier() {
  return <div className="barrier" aria-hidden="true" />;
}

/** Dead-end sign for the 404 page. */
export function DeadEndSign() {
  return (
    <svg
      className="dead-end"
      viewBox="0 0 120 120"
      role="img"
      aria-label="Verkehrszeichen Sackgasse"
    >
      <rect x="2" y="2" width="116" height="116" rx="10" fill="#f2f1ea" />
      <rect x="7" y="7" width="106" height="106" rx="6" fill="#1d5ea8" />
      <rect x="50" y="42" width="20" height="60" fill="#f2f1ea" />
      <rect x="30" y="22" width="60" height="20" fill="#c8201c" />
    </svg>
  );
}
