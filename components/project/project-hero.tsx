import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ChipList } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  duration: string;
  status: string;
  backHref?: string;
}

export function ProjectHero({
  title,
  subtitle,
  tags,
  year,
  duration,
  status,
  backHref = "/#projects",
}: ProjectHeroProps) {
  return (
    <Section variant="surface" padding="hero">
      <Container>
        <div className="space-y-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-link text-accent transition-opacity hover:opacity-80"
          >
            <ArrowLeft size={16} />
            <span>Zurück</span>
          </Link>

          <div className="space-y-4">
            <h1
              className="font-display font-bold leading-[0.9] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              {title}
            </h1>
            <p className="font-display text-xl font-medium text-accent md:text-2xl">
              {subtitle}
            </p>
          </div>

          <ChipList items={tags} />

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
            <span>Jahr: {year}</span>
            <span>|</span>
            <span>Dauer: {duration}</span>
            <span>|</span>
            <span>Status: {status}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
