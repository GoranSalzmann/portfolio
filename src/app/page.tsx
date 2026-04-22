import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import HobbiesSection from "@/sections/HobbiesSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TimelineSection from "@/sections/TimelineSection";
import ContactSection from "@/sections/ContactSection";

export default function HomePage() {
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
