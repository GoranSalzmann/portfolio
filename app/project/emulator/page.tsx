import type { Metadata } from "next";
import { ProjectSheet } from "@/components/project-sheet";
import { emulator } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${emulator.title} — ${site.name}`,
  description: emulator.metaDescription,
};

export default function EmulatorPage() {
  return <ProjectSheet project={emulator} />;
}
