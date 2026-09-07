import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "surface";
  padding?: "default" | "none" | "hero";
}

export function Section({
  id,
  children,
  className,
  variant = "default",
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-[5vw]",
        variant === "surface" && "bg-surface",
        padding === "default" && "py-20 md:py-32",
        padding === "hero" && "pt-32 pb-20",
        padding === "none" && "",
        className
      )}
    >
      {children}
    </section>
  );
}
