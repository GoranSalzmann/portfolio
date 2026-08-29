import { cn } from "@/lib/cn";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return <span className={cn("chip", className)}>{children}</span>;
}

interface ChipListProps {
  items: string[];
  className?: string;
}

export function ChipList({ items, className }: ChipListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </div>
  );
}
