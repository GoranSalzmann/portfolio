import Image from "next/image";
import { cn } from "@/lib/cn";

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  hover?: boolean;
  aspect?: "video" | "auto";
  height?: number;
  fill?: boolean;
}

export function ImageFrame({
  src,
  alt,
  className,
  hover = false,
  aspect = "auto",
  height,
  fill,
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-warm-grey",
        aspect === "video" && "aspect-[4/3]",
        className
      )}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-cover",
            hover && "transition-transform duration-500 hover:scale-105"
          )}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={height ?? 675}
          className={cn(
            "h-auto w-full",
            hover && "transition-transform duration-500 hover:scale-105"
          )}
        />
      )}
    </div>
  );
}
