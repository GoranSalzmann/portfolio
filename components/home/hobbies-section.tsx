import { Bike, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const hobbies = [
  {
    icon: Bike,
    title: "Motorradfahren",
    shortDescription: "Freiheit auf zwei Rädern. Der perfekte Ausgleich.",
    paragraphs: [
      "Motorradfahren ist für mich der perfekte Gegenpol zur Arbeit am Rechner. Während Code abstrakt und gedanklich ist, ist Motorradfahren physisch und unmittelbar - Geschwindigkeit, Kurven, die Reaktion des Fahrwerks auf den Asphalt.",
      "Der Wind, der bei offenem Visier frische Luft bringt, das Geräusch wenn man aus der Kurve beschleunigt, das ist meine innere Ruhe. Nur die Straße, das Bike und ich - das Perfekte Rezept um den Kopf frei zu bekommen.",
    ],
  },
  {
    icon: Camera,
    title: "Astrofotografie",
    shortDescription:
      "Licht sammeln über Stunden. Geduld, Präzision, der Moment.",
    paragraphs: [
      "Astrofotografie ist das Sammeln von Licht über Stunden – lange Belichtungszeiten, Tracking-Montierungen, das Warten auf den perfekten Moment, in dem alles zusammenkommt.",
      "Das Prinzip ist ähnlich wie bei guter Software: Stunden der Vorbereitung für den einen Moment, in dem alles funktioniert. Geduld, Präzision, das Vertrauen auf einen Prozess, dessen Ergebnis man erst am Ende sieht.",
    ],
  },
];

export function HobbiesSection() {
  return (
    <Section id="hobbies">
      <Container>
        <SectionHeader
          label="02 / Hobbies"
          subtitle="Was ich außerhalb des Terminals mache."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {hobbies.map((hobby) => (
            <Card key={hobby.title} hover className="space-y-6 p-8">
              <div className="flex h-10 w-10 items-center justify-center border border-warm-grey">
                <hobby.icon size={20} className="text-amber" />
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-text-primary">
                {hobby.title}
              </h3>
              <p className="leading-relaxed text-text-secondary">
                {hobby.shortDescription}
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-text-secondary">
                {hobby.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
