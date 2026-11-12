import { Horizon } from "@/components/horizon";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer>
      <Horizon />
      <div className="ground">
        <div className="shell flex flex-wrap justify-between gap-x-8 gap-y-1 pb-14 pt-4 text-sm">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
