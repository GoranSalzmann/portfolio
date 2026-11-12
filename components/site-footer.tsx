import { footer } from "@/lib/content";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink">
      <div className="label mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-6 text-muted md:flex-row md:justify-between md:px-8">
        <p>
          © {year} {site.name}. {footer.rights}
        </p>
        <p>{footer.colophon}</p>
      </div>
    </footer>
  );
}
