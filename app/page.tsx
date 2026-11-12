import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Hobbies } from "@/components/sections/hobbies";
import { Projects } from "@/components/sections/projects";
import { Timeline } from "@/components/sections/timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Hobbies />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}
