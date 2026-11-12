import { StarTrails } from "@/components/sky/star-trails";
import { coordinates, roles } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  const [first, last] = site.name.split(" ");
  const [primary, secondary, ...more] = roles;

  return (
    <section id="hero" className="hero" aria-label="Intro">
      <StarTrails className="hero-canvas" />
      <span className="pole-label" aria-hidden>
        Polaris
      </span>

      <div className="wrap hero-content">
        <h1 className="hero-name">
          <span>{first}</span>
          <span>{last}</span>
        </h1>
        <div className="hero-intro">
          <p className="hero-roles">
            <strong>{primary}</strong> und <strong>{secondary}</strong> mit
            Blick für {more.join(" und ")}.
          </p>
          <p className="hero-place">
            <span>{site.location}</span>
            <span>
              {coordinates.lat}, {coordinates.lon}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
