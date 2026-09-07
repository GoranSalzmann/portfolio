import { cn } from "@/lib/cn";

interface Stat {
  label: string;
  value: string;
}

interface StatGridProps {
  stats: Stat[];
  className?: string;
}

export function StatGrid({ stats, className }: StatGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4",
        className
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2 text-center">
          <p className="font-display text-2xl font-bold text-accent md:text-3xl">
            {stat.value}
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
