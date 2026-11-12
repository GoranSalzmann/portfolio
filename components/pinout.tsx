import Link from "next/link";
import { cn } from "@/lib/cn";
import { navLinks, site, socialLinks } from "@/lib/site";

interface Pin {
  label: string;
  href?: string;
  external?: boolean;
  note?: string;
}

const PIN_COUNT = 5;

/* Left side: where you can go. Right side: how to reach out. */
const leftPins: Pin[] = navLinks.map((link) => ({
  label: link.label,
  href: link.href,
}));

const rightPins: Pin[] = [
  ...socialLinks.map((link) => ({
    label: link.label,
    href: link.href,
    external: link.icon !== "mail",
  })),
  { label: "GND", note: site.location },
  { label: "NC", note: "nicht belegt" },
];

function PinRow({
  pin,
  number,
  side,
}: {
  pin: Pin;
  number: number;
  side: "left" | "right";
}) {
  const content = (
    <>
      <span className="min-w-0 truncate text-sm font-semibold md:text-base">
        {pin.label}
        {pin.note && (
          <span className="ml-2 hidden font-normal text-muted sm:inline">
            {pin.note}
          </span>
        )}
      </span>
      <span
        className={cn(
          "label grid h-5 w-8 shrink-0 place-items-center border border-ink bg-sheet text-[0.625rem] transition-colors",
          pin.href && "group-hover:bg-accent group-hover:text-on-accent"
        )}
      >
        {number}
      </span>
    </>
  );

  const className = cn(
    "group flex h-12 items-center gap-2",
    side === "left" ? "justify-end text-right" : "flex-row-reverse justify-end",
    pin.href ? "transition-colors hover:text-accent" : "text-muted"
  );

  if (!pin.href) {
    return <li className={className}>{content}</li>;
  }

  return (
    <li>
      {pin.external ? (
        <a
          href={pin.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      ) : (
        <Link href={pin.href} className={className}>
          {content}
        </Link>
      )}
    </li>
  );
}

/** The site's navigation and contact links, drawn as an IC pin diagram. */
export function Pinout({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <div className="grid grid-cols-[1fr_minmax(5.5rem,9rem)_1fr]">
        <ul aria-label="Abschnitte">
          {leftPins.slice(0, PIN_COUNT).map((pin, index) => (
            <PinRow key={pin.label} pin={pin} number={index + 1} side="left" />
          ))}
        </ul>

        <div
          aria-hidden
          className="relative flex flex-col items-center justify-center gap-1 bg-ink text-paper"
        >
          <span className="absolute left-1/2 top-0 h-3 w-6 -translate-x-1/2 rounded-b-full bg-paper" />
          <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-paper/60" />
          <span className="display text-4xl md:text-5xl">MK</span>
          <span className="label text-[0.5625rem] opacity-70">Portfolio</span>
        </div>

        <ul aria-label="Kontakt">
          {rightPins.slice(0, PIN_COUNT).map((pin, index) => (
            <PinRow
              key={pin.label}
              pin={pin}
              number={PIN_COUNT * 2 - index}
              side="right"
            />
          ))}
        </ul>
      </div>
      <figcaption className="label mt-4 text-center text-muted">
        Abb. 1 — Pinbelegung (Draufsicht)
      </figcaption>
    </figure>
  );
}
