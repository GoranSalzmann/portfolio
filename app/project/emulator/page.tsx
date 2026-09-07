import type { Metadata } from "next";
import { ProjectDescription } from "@/components/project/project-description";
import { ProjectFeatures } from "@/components/project/project-features";
import { ProjectGallery } from "@/components/project/project-gallery";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectNav } from "@/components/project/project-nav";

export const metadata: Metadata = {
  title: "6502 Emulator — Mike Karl",
  description:
    "Cycle-accurate CPU-Simulation in C++ mit eigenem Assembler-Parser.",
};

export default function EmulatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <ProjectHero
        title="6502 Emulator"
        subtitle="Cycle-accurate CPU-Simulation in C++"
        tags={[
          "C++",
          "6502 Assembly",
          "Systems Programming",
          "Emulation",
        ]}
        year="2023"
        duration="6 Monate"
        status="Abgeschlossen"
      />

      <ProjectDescription
        paragraphs={[
          "Der MOS 6502 ist der Chip, der die Home-Computer-Revolution antrieb: Apple II, Commodore 64, Nintendo Entertainment System. Er hat 3510 Transistoren. Jeder einzelne zählt.",
          "Mein Emulator simuliert jeden Taktzyklus des 6502 mit Cycle-Accuracy – das bedeutet, dass die Timing-Korrektheit bis auf einen Takt genau stimmt. Das ist entscheidend für Systeme, die auf präzise Hardware-Timing angewiesen sind, wie der C64 mit seinem VIC-II-Grafikchip.",
          "Der Emulator enthält einen eigenen Assembler-Parser, der 6502-Assembly-Syntax in Maschinencode übersetzt. Keine externen Abhängigkeiten – nur C++, Standardbibliotheken und das Verständnis der Architektur.",
        ]}
        image="/assets/emulator-screenshot.svg"
        imageAlt="6502 Emulator Terminal"
      />

      <ProjectFeatures
        features={[
          {
            title: "Cycle-Accurate Simulation",
            description:
              "Jeder Befehl wird mit korrektem Takt-Verbrauch simuliert. Seiten-Effekte, Page-Crossing-Penalties, genaue Adressierungsmodi.",
          },
          {
            title: "Assembler-Parser",
            description:
              "Eigener zweipassiger Assembler mit Label-Auflösung, Expression-Evaluation und Fehlerberichterstattung.",
          },
          {
            title: "Speichersystem",
            description:
              "64KB Adressraum mit korrekter Memory-Mapping-Logik. RAM, ROM und Memory-Mapped I/O.",
          },
        ]}
        stats={[
          { label: "Transistoren simuliert", value: "3,510" },
          { label: "Implementierte Befehle", value: "56" },
          { label: "Adressierungsmodi", value: "13" },
          { label: "Taktzyklen getestet", value: "1M+" },
        ]}
      />

      <ProjectGallery
        images={[
          {
            src: "/assets/emulator-screenshot.svg",
            alt: "6502 Emulator Terminal",
          },
          {
            src: "/assets/emulator-display.svg",
            alt: "Assembler Code",
          },
          {
            src: "/assets/debugger-view.svg",
            alt: "Debugger Register State",
          },
        ]}
      />

      <ProjectNav
        prev={{
          title: "Raycasting Engine",
          href: "/project/raycaster",
        }}
        next={{
          title: "Software Raytracer",
          href: "/project/raytracer",
        }}
      />
    </main>
  );
}
