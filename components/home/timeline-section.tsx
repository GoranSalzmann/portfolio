import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";

const timelineItems: TimelineEntry[] = [
  {
    year: "2025",
    title: "Ausbildung zum Fachinformatiker",
    description:
      "Ausbildung zum Fachinformatiker für Anwendungsentwicklung. Der strukturierte Einstieg in professionelle Softwareentwicklung.",
    tags: ["Software Engineering", "System Architecture"],
    side: "right",
  },
  {
    year: "2024",
    title: "Raytracer-Projekt",
    description:
      "Entwicklung eines Software-Raytracers in C von Grund auf. Monte-Carlo-Pfad-Tracing, BVH-Beschleunigung, Multithreading.",
    tags: ["C", "Computer Graphics", "Algorithms"],
    side: "left",
  },
  {
    year: "2023",
    title: "6502 Emulator",
    description:
      "Cycle-accurater 6502-Emulator in C++ mit eigenem Assembler-Parser. Das Projekt, das mein Verständnis von CPU-Architektur verändert hat.",
    tags: ["C++", "Emulation", "Low-Level"],
    side: "right",
  },
  {
    year: "2022",
    title: "Erste Berufserfahrung",
    description:
      "Praktikum und erste Projekte in der Webentwicklung. HTML, CSS, JavaScript – und das Verlangen, tiefer zu gehen.",
    tags: ["Web Development", "JavaScript"],
    side: "left",
  },
  {
    year: "2021",
    title: "Raycasting Engine",
    description:
      "Wolfenstein-3D-Style-Raycaster mit DDA-Algorithmus und Textur-Mapping. Einführung in Echtzeit-Computergrafik.",
    tags: ["C++", "Game Dev", "Graphics"],
    side: "right",
  },
  {
    year: "2020",
    title: "Beginn der Programmierreise",
    description:
      "Erste Schritte in C und C++. Das Gefühl, endlich zu verstehen, was unter der Haube passiert.",
    tags: ["C", "C++", "Learning"],
    side: "left",
  },
];

export function TimelineSection() {
  return (
    <Section id="timeline" variant="charcoal">
      <Container>
        <SectionHeader
          label="04 / Werdegang"
          subtitle='Vom ersten "Hello World" bis zur professionellen Softwareentwicklung.'
          className="mb-16"
        />
        <Timeline items={timelineItems} />
      </Container>
    </Section>
  );
}
