export const timelinePage = {
  label: "04 / Werdegang",
  subtitle:
    'Vom ersten "Hello World" bis zur professionellen Softwareentwicklung.',
  pageTitle: "Stationen",
  detailText:
    "Dieser Abschnitt wird bald um eine detailliertere Reflexion erweitert – welche konkreten Fähigkeiten ich aufgebaut habe, welche Projekte daraus entstanden sind und wie dieser Zeitraum meinen Weg als Entwickler geprägt hat.",
};

export const timeline = [
  {
    year: "2025",
    title: "Ausbildung zum Fachinformatiker",
    description:
      "Ausbildung zum Fachinformatiker für Anwendungsentwicklung. Der strukturierte Einstieg in professionelle Softwareentwicklung.",
    tags: ["Software Engineering", "System Architecture"],
    side: "right" as const,
  },
  {
    year: "2024",
    title: "Raytracer-Projekt",
    description:
      "Entwicklung eines Software-Raytracers in C von Grund auf. Monte-Carlo-Pfad-Tracing, BVH-Beschleunigung, Multithreading.",
    tags: ["C", "Computer Graphics", "Algorithms"],
    side: "left" as const,
  },
  {
    year: "2023",
    title: "6502 Emulator",
    description:
      "Cycle-accurater 6502-Emulator in C++ mit eigenem Assembler-Parser. Das Projekt, das mein Verständnis von CPU-Architektur verändert hat.",
    tags: ["C++", "Emulation", "Low-Level"],
    side: "right" as const,
  },
  {
    year: "2022",
    title: "Erste Berufserfahrung",
    description:
      "Praktikum und erste Projekte in der Webentwicklung. HTML, CSS, JavaScript – und das Verlangen, tiefer zu gehen.",
    tags: ["Web Development", "JavaScript"],
    side: "left" as const,
  },
  {
    year: "2021",
    title: "Raycasting Engine",
    description:
      "Wolfenstein-3D-Style-Raycaster mit DDA-Algorithmus und Textur-Mapping. Einführung in Echtzeit-Computergrafik.",
    tags: ["C++", "Game Dev", "Graphics"],
    side: "right" as const,
  },
  {
    year: "2020",
    title: "Beginn der Programmierreise",
    description:
      "Erste Schritte in C und C++. Das Gefühl, endlich zu verstehen, was unter der Haube passiert.",
    tags: ["C", "C++", "Learning"],
    side: "left" as const,
  },
];
