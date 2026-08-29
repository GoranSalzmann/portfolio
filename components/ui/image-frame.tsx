import Image from "next/image";
import { cn } from "@/lib/cn";

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  hover?: boolean;
  aspect?: "video" | "auto";
  fill?: boolean;
}

export function ImageFrame({
  src,
  alt,
  className,
  hover = false,
  aspect = "auto",
  fill = false,
}: ImageFrameProps) {
  const imageClassName = cn(
    "object-cover",
    hover && "transition-transform duration-500 hover:scale-105"
  );

  if (fill || aspect === "video") {
    return (
      <div
        className={cn(
          "relative overflow-hidden border border-warm-grey",
          aspect === "video" && "aspect-[4/3]",
          className
        )}
      >
        <Image src={src} alt={alt} fill className={imageClassName} sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
    );
  }

  return (
    <div
      className={cn("overflow-hidden border border-warm-grey", className)}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className={cn(imageClassName, "h-auto w-full")}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
