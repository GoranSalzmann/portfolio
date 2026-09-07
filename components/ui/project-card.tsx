import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ChipList } from "@/components/ui/chip";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  caseStudyLabel?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  href,
  caseStudyLabel = "Case Study",
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden border border-border bg-background transition-colors duration-300 hover:border-accent/50",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 flex translate-y-full items-center justify-center bg-background/60 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0">
          <span className="inline-flex translate-y-3 items-center gap-2 text-accent transition-transform delay-100 duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:translate-y-0">
            {caseStudyLabel}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <ChipList items={tags} />
        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </Link>
  );
}
