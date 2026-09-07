import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <Section id="contact">
      <Container>
        <div className="max-w-2xl space-y-8">
          <h2 className="section-label">05 / Kontakt</h2>
          <p className="text-lg leading-relaxed text-text-secondary">
            Ich suche den Einstieg als Softwareengineer und bringe gerne
            Kenntnisse für saubere, skalierbare Lösungen in innovative
            Projekte ein. Schreiben Sie mir, wenn das passt.
          </p>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Button href={`mailto:${site.email}`}>
              <Mail size={18} />
              Kontakt aufnehmen
            </Button>
            <TextLink
              href={`mailto:${site.email}`}
              className="font-mono text-sm"
            >
              {site.email}
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
