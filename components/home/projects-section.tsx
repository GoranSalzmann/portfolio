import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function ProjectsSection() {
  return (
    <Section id="projects" variant="surface">
      <Container>
        <SectionHeader
          label="03 / Ausgewählte Projekte"
          subtitle="Ausgewählte Arbeiten folgen in Kürze."
          className="mb-12"
        />
        <div className="border border-border bg-background px-8 py-16 text-center md:py-24">
          <p className="font-mono text-sm uppercase tracking-[0.1em] text-accent">
            Coming Soon
          </p>
          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Projekte in Vorbereitung
          </h3>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-[60px] bg-accent" />
            <p className="font-mono text-xs uppercase tracking-wider text-muted md:text-sm">
              Bald verfügbar
            </p>
            <div className="h-px w-[60px] bg-accent" />
          </div>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted">
            Case Studies zu ausgewählten Arbeiten erscheinen hier, sobald sie
            bereit sind.
          </p>
        </div>
      </Container>
    </Section>
  );
}
