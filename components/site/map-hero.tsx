import { at, MAP_HEIGHT, MAP_WIDTH, terrain } from "@/lib/terrain";

type Side = "left" | "right";

const stations: {
  name: string;
  lines: string[];
  lat: number;
  lon: number;
  side: Side;
  step: number;
}[] = [
  {
    name: "Zwiesel",
    lines: ["Abitur 2020"],
    lat: 49.017,
    lon: 13.233,
    side: "right",
    step: 0,
  },
  {
    name: "Deggendorf",
    lines: ["TH 2020–21"],
    lat: 48.841,
    lon: 12.961,
    side: "left",
    step: 1,
  },
  {
    name: "Passau",
    lines: ["Universität 2021–24", "Ausbildung 2024–26"],
    lat: 48.574,
    lon: 13.461,
    side: "right",
    step: 2,
  },
];

const home = { name: "Grafenau", lat: 48.857, lon: 13.397 };

const places: { name: string; lat: number; lon: number; side: Side }[] = [
  { name: "Regen", lat: 48.972, lon: 13.127, side: "left" },
  { name: "Freyung", lat: 48.808, lon: 13.548, side: "right" },
  { name: "Straubing", lat: 48.881, lon: 12.574, side: "left" },
  { name: "Vilshofen", lat: 48.633, lon: 13.186, side: "left" },
];

const summits = [
  { name: "Großer Arber", height: 1456, lat: 49.1125, lon: 13.136 },
  { name: "Großer Rachel", height: 1453, lat: 48.9795, lon: 13.39 },
  { name: "Lusen", height: 1373, lat: 48.939, lon: 13.507 },
];

const meridians = [12.5, 13, 13.5, 14];
const parallels = [48.5, 49];

function labelProps(x: number, side: Side, gap: number) {
  return side === "right"
    ? { x: x + gap, textAnchor: "start" as const }
    : { x: x - gap, textAnchor: "end" as const };
}

export function MapHero() {
  const homePoint = at(home.lat, home.lon);

  return (
    <svg
      className="map"
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Karte von Niederbayern und dem Bayerischen Wald. Eine rote Route verbindet die Stationen des Werdegangs: Zwiesel, Deggendorf und Passau. Grafenau ist als Standort markiert."
    >
      <defs>
        <filter id="map-soften" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <g filter="url(#map-soften)" aria-hidden="true">
        <path className="map-forest" d={terrain.forest} />
        <path className="map-forest-high" d={terrain.highForest} />
      </g>

      <g className="map-grid" aria-hidden="true">
        {meridians.map((lon) => {
          const { x } = at(49, lon);
          return <path key={lon} d={`M${x} 0V${MAP_HEIGHT}`} />;
        })}
        {parallels.map((lat) => {
          const { y } = at(lat, 13);
          return <path key={lat} d={`M0 ${y}H${MAP_WIDTH}`} />;
        })}
      </g>

      <g aria-hidden="true">
        <path className="map-contour" d={terrain.minor} />
        <path className="map-contour map-contour-major" d={terrain.major} />
        <path className="map-river" d={terrain.inn} />
        <path id="map-danube" className="map-river map-danube" d={terrain.danube} />
        <text className="map-water-label">
          <textPath href="#map-danube" startOffset="13%">
            <tspan dy="-9">Donau</tspan>
          </textPath>
        </text>
        <text className="map-water-label">
          <textPath href="#map-danube" startOffset="80%">
            <tspan dy="-9">Donau</tspan>
          </textPath>
        </text>
      </g>

      <g aria-hidden="true">
        {meridians.slice(1, 3).map((lon) => {
          const { x, y } = at(49, lon);
          return (
            <text key={lon} className="map-grid-label" x={x + 6} y={y - 6}>
              49° N, {String(lon).replace(".", ",")}° O
            </text>
          );
        })}
      </g>

      <g aria-hidden="true">
        {summits.map((summit) => {
          const { x, y } = at(summit.lat, summit.lon);
          return (
            <g key={summit.name}>
              <path
                className="map-summit"
                d={`M${x} ${y - 7}l7 12h-14z`}
              />
              <text className="map-summit-label" x={x + 12} y={y + 2}>
                {summit.name}
                <tspan className="map-summit-height" dx="6">
                  {summit.height}
                </tspan>
              </text>
            </g>
          );
        })}

        {places.map((place) => {
          const { x, y } = at(place.lat, place.lon);
          return (
            <g key={place.name}>
              <circle className="map-place" cx={x} cy={y} r="3.5" />
              <text
                className="map-place-label"
                y={y + 4}
                {...labelProps(x, place.side, 9)}
              >
                {place.name}
              </text>
            </g>
          );
        })}
      </g>

      <path
        className="map-route"
        d={terrain.route}
        pathLength={1}
        aria-hidden="true"
      />

      <g aria-hidden="true">
        {stations.map((station) => {
          const { x, y } = at(station.lat, station.lon);
          const label = labelProps(x, station.side, 14);
          return (
            <g
              key={station.name}
              className="map-station"
              style={{ "--step": station.step } as React.CSSProperties}
            >
              <circle cx={x} cy={y} r="7" />
              <text y={y + 5} {...label}>
                <tspan className="map-station-name">{station.name}</tspan>
                {station.lines.map((line) => (
                  <tspan
                    key={line}
                    className="map-station-note"
                    x={label.x}
                    dy="1.35em"
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        <g className="map-home">
          <circle cx={homePoint.x} cy={homePoint.y} r="11" />
          <circle cx={homePoint.x} cy={homePoint.y} r="4" />
          <text x={homePoint.x + 18} y={homePoint.y + 5}>
            <tspan className="map-station-name">{home.name}</tspan>
            <tspan
              className="map-station-note"
              x={homePoint.x + 18}
              dy="1.35em"
            >
              Standort
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}
