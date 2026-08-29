import Link from "next/link";
import { cn } from "@/lib/cn";

interface TextLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}

export function TextLink({ children, href, className, external }: TextLinkProps) {
  const classes = cn("text-link", className);

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
