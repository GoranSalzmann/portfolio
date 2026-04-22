import ProjectPageLayout from "@/components/ProjectPageLayout";
import { emulatorProject } from "@/data/projects";

export default function ProjectEmulatorPage() {
  return (
    <ProjectPageLayout
      title={emulatorProject.title}
      subtitle={emulatorProject.subtitle}
      tags={emulatorProject.tags}
      year={emulatorProject.year}
      duration={emulatorProject.duration}
      status={emulatorProject.status}
      description={emulatorProject.description}
      image={emulatorProject.image}
      imageAlt={emulatorProject.imageAlt}
      features={emulatorProject.features}
      stats={emulatorProject.stats}
      gallery={emulatorProject.gallery}
      prevProject={emulatorProject.prevProject}
      nextProject={emulatorProject.nextProject}
    />
  );
}
