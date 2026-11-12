import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="wrap flex flex-col justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
