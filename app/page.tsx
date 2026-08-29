import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { HobbiesSection } from "@/components/home/hobbies-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TimelineSection } from "@/components/home/timeline-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HobbiesSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}
