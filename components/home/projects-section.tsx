import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

const projects = [
  {
    title: "6502 Emulator",
    description:
      "Cycle-accurate CPU-Simulation in C++ mit eigenem Assembler-Parser.",
    image: "/assets/emulator-screenshot.svg",
    tags: ["C++", "6502 Assembly", "Systems Programming"],
    href: "/project/emulator",
  },
  {
    title: "Software Raytracer",
    description:
      "Monte-Carlo-Pfad-Tracing-Renderer in C. Multithreading, BVH-Beschleunigung, sanfte Schatten.",
    image: "/assets/raytracer-render.svg",
    tags: ["C", "Computer Graphics", "Multithreading"],
    href: "/project/raytracer",
  },
  {
    title: "Raycasting Engine",
    description:
      "Wolfenstein-3D-Style-Renderer mit DDA-Algorithmus und Textur-Mapping.",
    image: "/assets/raycaster-screenshot.svg",
    tags: ["C++", "Game Dev", "Algorithms"],
    href: "/project/raycaster",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" variant="charcoal">
      <Container>
        <SectionHeader
          label="03 / Ausgewählte Projekte"
          subtitle="Systeme, die ich aus der Transistor-Ebene heraus gebaut habe."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
