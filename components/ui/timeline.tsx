import { ChipList } from "@/components/ui/chip";
import { cn } from "@/lib/cn";

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  tags: string[];
  side: "left" | "right";
}

interface TimelineProps {
  items: TimelineEntry[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute bottom-0 left-4 top-0 w-px bg-warm-grey md:left-1/2 md:-translate-x-px" />

      <div className="space-y-12">
        {items.map((item) => (
          <TimelineItem key={`${item.year}-${item.title}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item }: { item: TimelineEntry }) {
  const isLeft = item.side === "left";

  return (
    <div className="relative flex items-start md:items-center">
      <div className="absolute left-4 z-10 mt-2 h-3 w-3 -translate-x-1/2 border-2 border-deep-space bg-amber md:left-1/2 md:mt-0" />

      <div
        className={cn(
          "pl-12 md:w-1/2 md:pl-0",
          isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
        )}
      >
        <div className="space-y-3">
          <span className="font-mono text-sm text-amber">{item.year}</span>
          <h3 className="font-display text-xl font-semibold tracking-tight text-text-primary">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary">
            {item.description}
          </p>
          <ChipList
            items={item.tags}
            className={isLeft ? "md:justify-end" : undefined}
          />
        </div>
      </div>
    </div>
  );
}
