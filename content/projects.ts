export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  duration: string;
  status: string;
  description: string[];
  features: { title: string; description: string }[];
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "emulator",
    title: "6502 Emulator",
    subtitle: "Cycle-accurate CPU-Simulation in C++",
    tags: ["C++", "6502 Assembly", "Systems Programming", "Emulation"],
    year: "2023",
    duration: "6 Monate",
    status: "Abgeschlossen",
    description: [
      "Der MOS 6502 ist der Chip, der die Home-Computer-Revolution antrieb: Apple II, Commodore 64, Nintendo Entertainment System. Er hat 3510 Transistoren. Jeder einzelne zählt.",
      "Mein Emulator simuliert jeden Taktzyklus des 6502 mit Cycle-Accuracy – das bedeutet, dass die Timing-Korrektheit bis auf einen Takt genau stimmt. Das ist entscheidend für Systeme, die auf präzise Hardware-Timing angewiesen sind, wie der C64 mit seinem VIC-II-Grafikchip.",
      "Der Emulator enthält einen eigenen Assembler-Parser, der 6502-Assembly-Syntax in Maschinencode übersetzt. Keine externen Abhängigkeiten – nur C++, Standardbibliotheken und das Verständnis der Architektur.",
    ],
    features: [
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
    ],
    stats: [
      { label: "Transistoren simuliert", value: "3,510" },
      { label: "Implementierte Befehle", value: "56" },
      { label: "Adressierungsmodi", value: "13" },
      { label: "Taktzyklen getestet", value: "1M+" },
    ],
  },
];
