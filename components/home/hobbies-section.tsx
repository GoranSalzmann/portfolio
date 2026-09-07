import { Bike, Box, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const hobbies = [
  {
    icon: Bike,
    title: "Motorradfahren",
    shortDescription: "Kopf frei bekommen.",
    paragraphs: [
      "Wenn der Schreibtisch zu viel wird, eine Runde auf dem Bike.",
    ],
  },
  {
    icon: Camera,
    title: "Astrofotografie",
    shortDescription: "Nachthimmel fotografieren.",
    paragraphs: [
      "Lange Belichtungen, Tracking, Nachbearbeitung.",
    ],
  },
  {
    icon: Box,
    title: "3D-Printing",
    shortDescription: "Ideen in Kunststoff bringen.",
    paragraphs: [
      "CAD, Slicing, Drucken – vom Modell bis zum fertigen Teil.",
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
          className="mb-8"
        />
        <div className="mb-8 border border-border px-6 py-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
            Coming Soon
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-px w-[40px] bg-accent" />
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Bilder folgen
            </p>
            <div className="h-px w-[40px] bg-accent" />
          </div>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
            Fotos zu den Hobbies erscheinen hier, sobald sie bereit sind.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => (
            <Card key={hobby.title} hover className="space-y-6 p-8">
              <div className="flex h-10 w-10 items-center justify-center border border-border">
                <hobby.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {hobby.title}
              </h3>
              <p className="leading-relaxed text-muted">
                {hobby.shortDescription}
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-muted">
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
