import ProjectPageLayout from "@/components/ProjectPageLayout";
import { raycasterProject } from "@/data/projects";

export default function ProjectRaycasterPage() {
  return (
    <ProjectPageLayout
      title={raycasterProject.title}
      subtitle={raycasterProject.subtitle}
      tags={raycasterProject.tags}
      year={raycasterProject.year}
      duration={raycasterProject.duration}
      status={raycasterProject.status}
      description={raycasterProject.description}
      image={raycasterProject.image}
      imageAlt={raycasterProject.imageAlt}
      features={raycasterProject.features}
      stats={raycasterProject.stats}
      gallery={raycasterProject.gallery}
      prevProject={raycasterProject.prevProject}
      nextProject={raycasterProject.nextProject}
    />
  );
}
