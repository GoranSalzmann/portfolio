import { cn } from "@/lib/cn";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "code-block border border-border bg-surface p-5 text-left md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
