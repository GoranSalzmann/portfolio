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
              Ich baue Systeme von der Hardware-Ebene bis zur Benutzeroberfläche.
              Meine Arbeit beginnt dort, wo abstrakte Konzepte auf konkrete
              Implementierung treffen. Ein 6502-Emulator, der jeden Taktzyklus
              simuliert. Ein Raytracer, der Lichtstrahl für Lichtstrahl
              berechnet. Ich interessiere mich für die Dinge, die man nicht
              sieht: Speicherverwaltung, Parelellisierung, die stille Effizienz
              guter Architektur.
            </p>
            <p>
              Ich arbeite am liebsten an Projekten, die verbinden:
              Low-Level-Performance mit menschlicher Erfahrung, technische Tiefe
              mit visueller Klarheit. Wenn das nach dem klingt was Sie suchen,
              schreiben Sie mir.
            </p>
            <p>
              Neben dem Code fotografiere ich den Nachthimmel – lange
              Belichtungszeiten, Tracking-Montierungen, das Sammeln von Licht
              über Stunden. Das Prinzip ist ähnlich: Geduld, Präzision, das
              Vertrauen auf einen Prozess, dessen Ergebnis man erst am Ende sieht.
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
