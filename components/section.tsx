import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

/** A numbered datasheet section: heading in the left rail, content beside it. */
export function Section({
  id,
  number,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-t-2 border-ink md:scroll-mt-14",
        className
      )}
    >
      <div className="grid gap-x-12 gap-y-8 py-12 md:py-20 lg:grid-cols-[15rem_1fr]">
        <header className="space-y-3 lg:sticky lg:top-24 lg:self-start">
          <p className="label text-accent">{number}</p>
          <h2 className="heading text-3xl md:text-4xl">{title}</h2>
          {subtitle && (
            <p className="max-w-[28ch] text-sm leading-relaxed text-muted">
              {subtitle}
            </p>
          )}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {tags.map((tag) => (
        <li key={tag} className="label text-muted">
          {tag}
        </li>
      ))}
    </ul>
  );
}
