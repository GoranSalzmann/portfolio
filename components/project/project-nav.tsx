import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface AdjacentProject {
  title: string;
  href: string;
}

interface ProjectNavProps {
  prev: AdjacentProject;
  next: AdjacentProject;
}

export function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <Section variant="surface" className="py-20">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link
          href={prev.href}
          className="inline-flex items-center gap-3 border border-border px-6 py-3 text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowLeft size={16} />
          <div className="text-left">
            <p className="mb-0.5 text-xs text-muted">
              Vorheriges Projekt
            </p>
            <p className="font-display text-sm font-medium">{prev.title}</p>
          </div>
        </Link>

        <Link
          href={next.href}
          className="inline-flex items-center gap-3 border border-border px-6 py-3 text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <div className="text-right">
            <p className="mb-0.5 text-xs text-muted">
              Nächstes Projekt
            </p>
            <p className="font-display text-sm font-medium">{next.title}</p>
          </div>
          <ArrowRight size={16} />
        </Link>
      </Container>
    </Section>
  );
}
