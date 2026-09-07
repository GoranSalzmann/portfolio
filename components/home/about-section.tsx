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
          <div className="max-w-3xl space-y-6 leading-relaxed text-text-secondary">
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
              Neben der Arbeit fahre ich Motorrad und fotografiere den
              Nachthimmel.
            </p>
          </div>
          <div>
            <Link
              href="/#hobbies"
              className="group inline-flex items-center gap-2 text-amber transition-colors hover:text-amber-hover"
            >
              <span className="text-link">Mehr über meine Hobbies</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
