export const roles = [
  "Softwareengineer",
  "Anwendungsentwickler",
  "Integration",
  "DevOps",
];

export const about = [
  "Ich suche den Einstieg als Softwareengineer in einem innovativen Unternehmen – dort, wo saubere, skalierbare Lösungen zählen und moderne Ansätze helfen, Skills stetig zu erweitern. Meine Stärke ist das private Interesse am Entwickeln und Betreiben von IT-Systemen und ein breit gefächertes Fachwissen, von Rechnerarchitektur bis zu Programmier-Patterns.",
  "Durch Erfahrung in verschiedenen Bereichen bin ich auch für Integration, Administration und DevOps-Aufgaben gewappnet. Ich arbeite gerne dort, wo Architekturentscheidungen Wirkung zeigen – von der Systemebene bis zur Anwendung. Wenn das nach dem klingt, was Sie suchen, schreiben Sie mir.",
  "Neben der Arbeit fahre ich Motorrad, fotografiere den Nachthimmel und drucke 3D-Modelle.",
];

export const hobbies = [
  {
    title: "Motorradfahren",
    short: "Kopf frei bekommen.",
    text: "Wenn der Schreibtisch zu viel wird, eine Runde auf dem Bike.",
  },
  {
    title: "Astrofotografie",
    short: "Nachthimmel fotografieren.",
    text: "Lange Belichtungen, Tracking, Nachbearbeitung.",
  },
  {
    title: "3D-Printing",
    short: "Ideen in Kunststoff bringen.",
    text: "CAD, Slicing, Drucken – vom Modell bis zum fertigen Teil.",
  },
];

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  tags: string[];
  /** "main" stays on the trunk, "branch" forks off and ends without a merge. */
  lane: "main" | "branch";
};

/** Newest first, like `git log`. */
export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    title: "Anwendungsentwickler @ Brummer Logistik",
    description:
      "Entwicklung einer neuen Lager-Begleitapp – eines der zentralen Systeme eines Speditions- und Logistikbetriebs. Aufgrund der Leistungen in der Ausbildung für die Rolle ausgewählt; Softwarearchitektur von Tag 1 an.",
    tags: ["Software Engineering", "System Architecture", "Logistik"],
    lane: "main",
  },
  {
    year: "2024–2026",
    title: "Ausbildung FI Anwendungsentwicklung",
    description:
      "Fachinformatiker für Anwendungsentwicklung an der Karl-Peter-Obermeier-Schule Passau. Bestanden in zwei Jahren mit Ø 1,0, IHK-Punkte Ø 90 und Auszeichnung.",
    tags: ["Ausbildung", "Anwendungsentwicklung"],
    lane: "main",
  },
  {
    year: "2021–2024",
    title: "Informatikstudium",
    description:
      "Studium an der Universität Passau. Abgebrochen im 6. Semester mit damaligem Ø 2,7.",
    tags: ["Informatik", "Universität"],
    lane: "branch",
  },
  {
    year: "2020–2021",
    title: "Informatikstudium",
    description: "Studium an der TH Deggendorf. Abgebrochen im 2. Semester.",
    tags: ["Angewandte Informatik", "Hochschule"],
    lane: "branch",
  },
  {
    year: "2020",
    title: "Abitur",
    description: "Gymnasium Zwiesel. Bestanden mit Ø 2,7.",
    tags: ["Abitur"],
    lane: "main",
  },
];

export const contactText =
  "Ich suche den Einstieg als Softwareengineer und bringe gerne Kenntnisse für saubere, skalierbare Lösungen in innovative Projekte ein. Schreiben Sie mir, wenn das passt.";

export const emulator = {
  title: "6502 Emulator",
  subtitle: "Cycle-accurate CPU-Simulation in C++",
  tags: ["C++", "6502 Assembly", "Systems Programming", "Emulation"],
  meta: [
    { label: "Jahr", value: "2023" },
    { label: "Dauer", value: "6 Monate" },
    { label: "Status", value: "Abgeschlossen" },
  ],
  paragraphs: [
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
};
