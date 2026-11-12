/* All copy shown on the landing page. Presentation lives in components/. */

export const roles = [
  "Softwareengineer",
  "Anwendungsentwickler",
  "Integration",
  "DevOps",
];

export const keyFacts = [
  { label: "Standort", value: "Grafenau, Germany" },
  { label: "Aktuell", value: "Anwendungsentwickler @ Brummer Logistik" },
  {
    label: "Abschluss",
    value: "FI Anwendungsentwicklung · Ø 1,0 · IHK Ø 90 · Auszeichnung",
  },
  { label: "Ziel", value: "Einstieg als Softwareengineer" },
];

export const about = {
  title: "About",
  paragraphs: [
    "Ich suche den Einstieg als Softwareengineer in einem innovativen Unternehmen – dort, wo saubere, skalierbare Lösungen zählen und moderne Ansätze helfen, Skills stetig zu erweitern. Meine Stärke ist das private Interesse am Entwickeln und Betreiben von IT-Systemen und ein breit gefächertes Fachwissen, von Rechnerarchitektur bis zu Programmier-Patterns.",
    "Durch Erfahrung in verschiedenen Bereichen bin ich auch für Integration, Administration und DevOps-Aufgaben gewappnet. Ich arbeite gerne dort, wo Architekturentscheidungen Wirkung zeigen – von der Systemebene bis zur Anwendung. Wenn das nach dem klingt, was Sie suchen, schreiben Sie mir.",
    "Neben der Arbeit fahre ich Motorrad, fotografiere den Nachthimmel und drucke 3D-Modelle.",
  ],
};

export const hobbies = {
  title: "Hobbies",
  subtitle: "Was ich außerhalb des Terminals mache.",
  items: [
    {
      title: "Motorradfahren",
      shortDescription: "Kopf frei bekommen.",
      paragraphs: [
        "Wenn der Schreibtisch zu viel wird, eine Runde auf dem Bike.",
      ],
    },
    {
      title: "Astrofotografie",
      shortDescription: "Nachthimmel fotografieren.",
      paragraphs: ["Lange Belichtungen, Tracking, Nachbearbeitung."],
    },
    {
      title: "3D-Printing",
      shortDescription: "Ideen in Kunststoff bringen.",
      paragraphs: [
        "CAD, Slicing, Drucken – vom Modell bis zum fertigen Teil.",
      ],
    },
  ],
  note: {
    status: "Coming Soon",
    title: "Bilder folgen",
    text: "Fotos zu den Hobbies erscheinen hier, sobald sie bereit sind.",
  },
};

export const projects = {
  title: "Ausgewählte Projekte",
  subtitle: "Ausgewählte Arbeiten folgen in Kürze.",
  placeholder: {
    status: "Coming Soon",
    title: "Projekte in Vorbereitung",
    hint: "Bald verfügbar",
    text: "Case Studies zu ausgewählten Arbeiten erscheinen hier, sobald sie bereit sind.",
  },
};

export interface CareerEntry {
  /** A single year ("2026") or an inclusive range ("2024-2026"). */
  year: string;
  title: string;
  description: string;
  tags: string[];
}

export const career = {
  title: "Werdegang",
  subtitle: "Von der Ausbildung zum Berufseinstieg als Anwendungsentwickler.",
  entries: [
    {
      year: "2026",
      title: "Anwendungsentwickler @ Brummer Logistik",
      description:
        "Entwicklung einer neuen Lager-Begleitapp – eines der zentralen Systeme eines Speditions- und Logistikbetriebs. Aufgrund der Leistungen in der Ausbildung für die Rolle ausgewählt; Softwarearchitektur von Tag 1 an.",
      tags: ["Software Engineering", "System Architecture", "Logistik"],
    },
    {
      year: "2024-2026",
      title: "Ausbildung FI Anwendungsentwicklung",
      description:
        "Fachinformatiker für Anwendungsentwicklung an der Karl-Peter-Obermeier-Schule Passau. Bestanden in zwei Jahren mit Ø 1,0, IHK-Punkte Ø 90 und Auszeichnung.",
      tags: ["Ausbildung", "Anwendungsentwicklung"],
    },
    {
      year: "2021-2024",
      title: "Informatikstudium",
      description:
        "Studium an der Universität Passau. Abgebrochen im 6. Semester mit damaligem Ø 2,7.",
      tags: ["Informatik", "Universität"],
    },
    {
      year: "2020-2021",
      title: "Informatikstudium",
      description: "Studium an der TH Deggendorf. Abgebrochen im 2. Semester.",
      tags: ["Angewandte Informatik", "Hochschule"],
    },
    {
      year: "2020",
      title: "Abitur",
      description: "Gymnasium Zwiesel. Bestanden mit Ø 2,7.",
      tags: ["Abitur"],
    },
  ] satisfies CareerEntry[],
};

export const contact = {
  title: "Kontakt",
  text: "Ich suche den Einstieg als Softwareengineer und bringe gerne Kenntnisse für saubere, skalierbare Lösungen in innovative Projekte ein. Schreiben Sie mir, wenn das passt.",
  cta: "Kontakt aufnehmen",
};

export const footer = {
  rights: "All rights reserved.",
  colophon: "Built with Next.js & Tailwind CSS",
};
