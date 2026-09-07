import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  className?: string;
}

export function FeatureGrid({ features, className }: FeatureGridProps) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-8 md:grid-cols-3", className)}
    >
      {features.map((feature) => (
        <Card key={feature.title} className="space-y-4">
          <h3 className="font-display text-lg font-medium text-foreground">
            {feature.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {feature.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
