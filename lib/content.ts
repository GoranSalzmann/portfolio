export const roles = [
  "Softwareengineer",
  "Anwendungsentwickler",
  "Integration",
  "DevOps",
];

export const coordinates = {
  lat: "48° 51′ N",
  lon: "13° 24′ O",
};

export const about = {
  lead: "Ich suche den Einstieg als Softwareengineer in einem innovativen Unternehmen – dort, wo saubere, skalierbare Lösungen zählen und moderne Ansätze helfen, Skills stetig zu erweitern.",
  paragraphs: [
    "Meine Stärke ist das private Interesse am Entwickeln und Betreiben von IT-Systemen und ein breit gefächertes Fachwissen, von Rechnerarchitektur bis zu Programmier-Patterns.",
    "Durch Erfahrung in verschiedenen Bereichen bin ich auch für Integration, Administration und DevOps-Aufgaben gewappnet. Ich arbeite gerne dort, wo Architekturentscheidungen Wirkung zeigen – von der Systemebene bis zur Anwendung. Wenn das nach dem klingt, was Sie suchen, schreiben Sie mir.",
  ],
  aside:
    "Neben der Arbeit fahre ich Motorrad, fotografiere den Nachthimmel und drucke 3D-Modelle.",
};

export type HobbyGlyph = "road" | "trails" | "layers";

export const hobbies: {
  glyph: HobbyGlyph;
  title: string;
  shortDescription: string;
  paragraphs: string[];
}[] = [
  {
    glyph: "road",
    title: "Motorradfahren",
    shortDescription: "Kopf frei bekommen.",
    paragraphs: ["Wenn der Schreibtisch zu viel wird, eine Runde auf dem Bike."],
  },
  {
    glyph: "trails",
    title: "Astrofotografie",
    shortDescription: "Nachthimmel fotografieren.",
    paragraphs: ["Lange Belichtungen, Tracking, Nachbearbeitung."],
  },
  {
    glyph: "layers",
    title: "3D-Printing",
    shortDescription: "Ideen in Kunststoff bringen.",
    paragraphs: ["CAD, Slicing, Drucken – vom Modell bis zum fertigen Teil."],
  },
];

export const hobbiesSubtitle = "Was ich außerhalb des Terminals mache.";
export const hobbiesPhotosNote =
  "Fotos zu den Hobbies erscheinen hier, sobald sie bereit sind.";

export const projects = {
  subtitle: "Ausgewählte Arbeiten folgen in Kürze.",
  title: "Projekte in Vorbereitung",
  description:
    "Case Studies zu ausgewählten Arbeiten erscheinen hier, sobald sie bereit sind.",
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  tags: string[];
  side: "left" | "right";
};

export const timelineSubtitle =
  "Von der Ausbildung zum Berufseinstieg als Anwendungsentwickler.";

export const timeline: TimelineEntry[] = [
  {
    year: "2026",
    title: "Anwendungsentwickler @ Brummer Logistik",
    description:
      "Entwicklung einer neuen Lager-Begleitapp – eines der zentralen Systeme eines Speditions- und Logistikbetriebs. Aufgrund der Leistungen in der Ausbildung für die Rolle ausgewählt; Softwarearchitektur von Tag 1 an.",
    tags: ["Software Engineering", "System Architecture", "Logistik"],
    side: "left",
  },
  {
    year: "2024-2026",
    title: "Ausbildung FI Anwendungsentwicklung",
    description:
      "Fachinformatiker für Anwendungsentwicklung an der Karl-Peter-Obermeier-Schule Passau. Bestanden in zwei Jahren mit Ø 1,0, IHK-Punkte Ø 90 und Auszeichnung.",
    tags: ["Ausbildung", "Anwendungsentwicklung"],
    side: "right",
  },
  {
    year: "2021-2024",
    title: "Informatikstudium",
    description:
      "Studium an der Universität Passau. Abgebrochen im 6. Semester mit damaligem Ø 2,7.",
    tags: ["Informatik", "Universität"],
    side: "left",
  },
  {
    year: "2020-2021",
    title: "Informatikstudium",
    description: "Studium an der TH Deggendorf. Abgebrochen im 2. Semester.",
    tags: ["Angewandte Informatik", "Hochschule"],
    side: "right",
  },
  {
    year: "2020",
    title: "Abitur",
    description: "Gymnasium Zwiesel. Bestanden mit Ø 2,7.",
    tags: ["Abitur"],
    side: "left",
  },
];

export const contact = {
  text: "Ich suche den Einstieg als Softwareengineer und bringe gerne Kenntnisse für saubere, skalierbare Lösungen in innovative Projekte ein. Schreiben Sie mir, wenn das passt.",
};
