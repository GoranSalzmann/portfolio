import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  title?: string;
  images: GalleryImage[];
}

export function ProjectGallery({
  title = "Galerie",
  images,
}: ProjectGalleryProps) {
  return (
    <Section>
      <Container className="space-y-12">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {images.map((image) => (
            <ImageFrame
              key={image.src}
              src={image.src}
              alt={image.alt}
              hover
              height={192}
              className="[&_img]:h-48 [&_img]:object-cover"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
