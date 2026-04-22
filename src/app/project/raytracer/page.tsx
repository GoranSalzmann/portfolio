import ProjectPageLayout from "@/components/ProjectPageLayout";
import { raytracerProject } from "@/data/projects";

export default function ProjectRaytracerPage() {
  return (
    <ProjectPageLayout
      title={raytracerProject.title}
      subtitle={raytracerProject.subtitle}
      tags={raytracerProject.tags}
      year={raytracerProject.year}
      duration={raytracerProject.duration}
      status={raytracerProject.status}
      description={raytracerProject.description}
      image={raytracerProject.image}
      imageAlt={raytracerProject.imageAlt}
      features={raytracerProject.features}
      stats={raytracerProject.stats}
      gallery={raytracerProject.gallery}
      prevProject={raytracerProject.prevProject}
      nextProject={raytracerProject.nextProject}
    />
  );
}
