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
        "border-l-2 border-amber py-2 pl-6 text-text-secondary italic",
        className
      )}
    >
      <p className="leading-relaxed">&ldquo;{quote}&rdquo;</p>
      {author && (
        <footer className="mt-3 font-mono text-sm not-italic text-amber">
          {author}
        </footer>
      )}
    </blockquote>
  );
}
