import { cn } from "@/lib/cn";

interface TwoColumnProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  ratio?: "2-1" | "3-2";
  className?: string;
}

export function TwoColumn({
  children,
  sidebar,
  ratio = "2-1",
  className,
}: TwoColumnProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-start gap-16 lg:grid-cols-[var(--cols)]",
        ratio === "2-1" && "[--cols:2fr_1fr]",
        ratio === "3-2" && "[--cols:3fr_2fr]",
        className
      )}
    >
      <div>{children}</div>
      <div>{sidebar}</div>
    </div>
  );
}
