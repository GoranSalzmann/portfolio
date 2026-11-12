import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui-icons";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-bg-deep py-24 md:py-36">
      <div className="wrap">
        <h2 className="display text-3xl font-semibold">Kontakt</h2>
        <p className="mt-8 max-w-xl text-xl">
          Ich suche den Einstieg als Softwareengineer und bringe gerne Kenntnisse für saubere,
          skalierbare Lösungen in innovative Projekte ein. Schreiben Sie mir, wenn das passt.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="display mt-12 block break-all font-semibold underline decoration-star decoration-[0.08em] underline-offset-[0.14em] transition-colors hover:text-accent motion-reduce:transition-none"
          style={{ fontSize: "clamp(1.5rem, 5.4vw, 4.75rem)", lineHeight: 1.05 }}
        >
          {site.email}
        </a>
        <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
          <li>
            <a href={site.github} className="inline-flex items-center gap-2 hover:text-accent">
              <GithubIcon /> GitHub
            </a>
          </li>
          <li>
            <a href={site.linkedin} className="inline-flex items-center gap-2 hover:text-accent">
              <LinkedInIcon /> LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-accent">
              <Mail size={18} /> Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
