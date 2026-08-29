import { Container } from "@/components/ui/container";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { Section } from "@/components/ui/section";
import { StatGrid } from "@/components/ui/stat-grid";

interface Feature {
  title: string;
  description: string;
}

interface Stat {
  label: string;
  value: string;
}

interface ProjectFeaturesProps {
  title?: string;
  features: Feature[];
  stats: Stat[];
}

export function ProjectFeatures({
  title = "Technische Umsetzung",
  features,
  stats,
}: ProjectFeaturesProps) {
  return (
    <Section variant="charcoal">
      <Container className="max-w-[800px] space-y-12">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          {title}
        </h2>
        <FeatureGrid features={features} />
        <StatGrid stats={stats} />
      </Container>
    </Section>
  );
}
