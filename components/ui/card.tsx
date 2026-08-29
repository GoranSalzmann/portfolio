import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover }: CardProps) {
  return (
    <div
      className={cn(
        "space-y-4 border border-warm-grey p-6",
        hover && "transition-colors hover:border-amber/30",
        className
      )}
    >
      {children}
    </div>
  );
}
