import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { Hobbies } from "@/components/home/hobbies";
import { Projects } from "@/components/home/projects";
import { Timeline } from "@/components/home/timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Hobbies />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}
