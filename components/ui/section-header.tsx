import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  label?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {label && <h2 className="section-label">{label}</h2>}
      {title && (
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="max-w-xl text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
