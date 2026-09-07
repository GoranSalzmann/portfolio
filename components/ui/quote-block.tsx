import { cn } from "@/lib/cn";

interface QuoteBlockProps {
  quote: string;
  author?: string;
  className?: string;
}

export function QuoteBlock({ quote, author, className }: QuoteBlockProps) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-accent py-2 pl-6 text-muted italic",
        className
      )}
    >
      <p className="leading-relaxed">&ldquo;{quote}&rdquo;</p>
      {author && (
        <footer className="mt-3 font-mono text-sm not-italic text-accent">
          {author}
        </footer>
      )}
    </blockquote>
  );
}
