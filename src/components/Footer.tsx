import { site, footerContent } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-warm-grey py-8 px-[5vw]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          {footerContent.copyright(new Date().getFullYear(), site.name)}
        </p>
        <p className="text-sm text-text-secondary font-mono">
          {footerContent.builtWith}
        </p>
      </div>
    </footer>
  );
}
