import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <div className="space-y-8">
          <h2 className="section-label">01 / About</h2>
          <div className="max-w-3xl space-y-6 leading-relaxed text-muted">
            <p>
              Ich suche den Einstieg als Softwareengineer in einem innovativen
              Unternehmen – dort, wo saubere, skalierbare Lösungen zählen und
              moderne Ansätze helfen, Skills stetig zu erweitern. Meine Stärke
              ist das private Interesse am Entwickeln und Betreiben von
              IT-Systemen und ein breit gefächertes Fachwissen, von
              Rechnerarchitektur bis zu Programmier-Patterns.
            </p>
            <p>
              Durch Erfahrung in verschiedenen Bereichen bin ich auch für
              Integration, Administration und DevOps-Aufgaben gewappnet. Ich
              arbeite gerne dort, wo Architekturentscheidungen Wirkung zeigen –
              von der Systemebene bis zur Anwendung. Wenn das nach dem klingt,
              was Sie suchen, schreiben Sie mir.
            </p>
            <p>
              Neben der Arbeit fahre ich Motorrad, fotografiere den Nachthimmel
              und drucke 3D-Modelle.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
