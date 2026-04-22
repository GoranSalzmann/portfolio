export const projects = [
  {
    id: "emulator",
    title: "6502 Emulator",
    description:
      "Cycle-accurate CPU-Simulation in C++ mit eigenem Assembler-Parser.",
    image: "/assets/emulator-screenshot.jpg",
    tags: ["C++", "6502 Assembly", "Systems Programming"],
    link: "/project/emulator",
  },
  {
    id: "raytracer",
    title: "Software Raytracer",
    description:
      "Monte-Carlo-Pfad-Tracing-Renderer in C. Multithreading, BVH-Beschleunigung, sanfte Schatten.",
    image: "/assets/raytracer-render.jpg",
    tags: ["C", "Computer Graphics", "Multithreading"],
    link: "/project/raytracer",
  },
  {
    id: "raycaster",
    title: "Raycasting Engine",
    description:
      "Wolfenstein-3D-Style-Renderer mit DDA-Algorithmus und Textur-Mapping.",
    image: "/assets/raycaster-screenshot.jpg",
    tags: ["C++", "Game Dev", "Algorithms"],
    link: "/project/raycaster",
  },
];

export const emulatorProject = {
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
  image: "/assets/emulator-screenshot.jpg",
  imageAlt: "6502 Emulator Terminal",
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
  gallery: [
    { src: "/assets/emulator-screenshot.jpg", alt: "6502 Emulator Terminal" },
    { src: "/assets/emulator-display.jpg", alt: "Assembler Code" },
    { src: "/assets/debugger-view.jpg", alt: "Debugger Register State" },
  ],
  prevProject: {
    title: "Raycasting Engine",
    link: "/project/raycaster",
  },
  nextProject: {
    title: "Software Raytracer",
    link: "/project/raytracer",
  },
};

export const raytracerProject = {
  title: "Software Raytracer",
  subtitle: "Monte-Carlo-Pfad-Tracing in C",
  tags: ["C", "Computer Graphics", "Multithreading"],
  year: "2024",
  duration: "8 Monate",
  status: "Abgeschlossen",
  description: [
    "Dieser Raytracer berechnet Licht. Nicht approximiert, nicht geschätzt – simuliert. Jeder Pixel ist das Ergebnis von Millionen Lichtstrahlen, die durch eine Szene bouncen, sich brechen und absorbieren.",
    "Geschrieben in C von Grund auf. Keine Grafik-Bibliotheken, keine Hardware-Beschleunigung. Nur Mathematik, Speicher und so viele CPU-Kerne, wie das System hergibt.",
    "Das Projekt war eine Reise in die Computergrafik: von Vektor-Mathematik über Bounding Volume Hierarchies bis hin zur Farbwissenschaft von ACES-Tonemapping.",
  ],
  image: "/assets/raytracer-render.jpg",
  imageAlt: "Raytracer Render Output",
  features: [
    {
      title: "Monte-Carlo-Pfad-Tracing",
      description:
        "Rekursive Lichtstrahl-Simulation mit Russian Roulette-Terminierung. Diffuse, spiegelnde und transparente Materialien.",
    },
    {
      title: "BVH-Beschleunigung",
      description:
        "Bounding Volume Hierarchy mit SAH-Heuristik für schnelle Ray-Schnitt-Tests. Rendert komplexe Szenen in Sekunden statt Stunden.",
    },
    {
      title: "Multithreading",
      description:
        "Thread-Pool mit Work-Stealing-Scheduling. Nahezu lineare Skalierung mit Kernanzahl.",
    },
  ],
  stats: [
    { label: "Strahlen pro Pixel", value: "1M+" },
    { label: "CPU-Kerne genutzt", value: "8" },
    { label: "Externe Bibliotheken", value: "0" },
    { label: "Rendern komplexer Szene", value: "<2s" },
  ],
  gallery: [
    { src: "/assets/raytracer-render.jpg", alt: "Raytracer Render Output" },
    { src: "/assets/raytracer-cornell.jpg", alt: "Cornell Box Render" },
    { src: "/assets/raytracer-metal.jpg", alt: "Metallic Scene Render" },
  ],
  prevProject: {
    title: "6502 Emulator",
    link: "/project/emulator",
  },
  nextProject: {
    title: "Raycasting Engine",
    link: "/project/raycaster",
  },
};

export const projectLayout = {
  backLabel: "Zurück",
  yearLabel: "Jahr",
  durationLabel: "Dauer",
  statusLabel: "Status",
  descriptionTitle: "Das Projekt",
  techTitle: "Technische Umsetzung",
  galleryTitle: "Galerie",
  prevProjectLabel: "Vorheriges Projekt",
  nextProjectLabel: "Nächstes Projekt",
};

export const projectsPage = {
  sectionLabel: "03 / Ausgewählte Projekte",
  pageLabel: "03 / Projekte",
  pageTitle: "Ausgewählte Projekte",
  subtitle:
    "Systeme, die ich aus der Transistor-Ebene heraus gebaut habe.",
  caseStudyLabel: "Case Study",
  detailText:
    "Dieser Abschnitt wird bald eine detailliertere Beschreibung des Projekts enthalten – Motivation, Herausforderungen, Lernerfahrungen und technische Tiefenblicke, die über die Kurzbeschreibung auf der Startseite hinausgehen.",
  linkText: "Zur Case Study",
};

export const raycasterProject = {
  title: "Raycasting Engine",
  subtitle: "Wolfenstein-3D-Style-Renderer mit DDA-Algorithmus",
  tags: ["C++", "Game Dev", "Algorithms"],
  year: "2021",
  duration: "3 Monate",
  status: "Abgeschlossen",
  description: [
    "Eine Einführung in Echtzeit-Computergrafik: ein Wolfenstein-3D-Style-Raycaster, der mit dem DDA-Algorithmus Wände findet und mit Texturen füllt.",
    "Geschrieben in C++ ohne externe Grafik-Engines. Alles von der Bildschirmmaschine bis zum Pixel-Buffer selbst implementiert.",
    "Das Projekt lehrte mich die Grundlagen der Rasterisierung, der Performance-Optimierung in Spiel-Loops und die Bedeutung fester Zeitschritte in Echtzeit-Systemen.",
  ],
  image: "/assets/raycaster-screenshot.jpg",
  imageAlt: "Raycasting Engine Screenshot",
  features: [
    {
      title: "DDA-Algorithmus",
      description:
        "Digital Differential Analysis für präzise Wand-Schnitt-Berechnung auf einem 2D-Gitter. Schnell, deterministisch und elegant.",
    },
    {
      title: "Textur-Mapping",
      description:
        "Korrekte perspektivische Textur-Koordinaten für jede Säule. Keine Verzerrung, keine Nahtstellen.",
    },
    {
      title: "Echtzeit-Performance",
      description:
        "60 FPS auf moderner Hardware. Das Fundament für ein Verständnis von Frame-Timing und vsync.",
    },
  ],
  stats: [
    { label: "FPS Ziel", value: "60" },
    { label: "Texturauflösung", value: "64px" },
    { label: "Sichtweite", value: "∞" },
    { label: "Abhängigkeiten", value: "0" },
  ],
  gallery: [
    { src: "/assets/raycaster-screenshot.jpg", alt: "Raycaster Screenshot" },
  ],
  prevProject: {
    title: "Software Raytracer",
    link: "/project/raytracer",
  },
  nextProject: {
    title: "6502 Emulator",
    link: "/project/emulator",
  },
};
