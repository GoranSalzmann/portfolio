import { coordinates } from "@/lib/content";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          {site.location}, {coordinates.lat} {coordinates.lon}
        </p>
      </div>
    </footer>
  );
}
