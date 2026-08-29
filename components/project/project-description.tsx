import { Container } from "@/components/ui/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { Section } from "@/components/ui/section";

interface ProjectDescriptionProps {
  title?: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export function ProjectDescription({
  title = "Das Projekt",
  paragraphs,
  image,
  imageAlt,
}: ProjectDescriptionProps) {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              {title}
            </h2>
            <div className="space-y-6 leading-relaxed text-text-secondary">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ImageFrame src={image} alt={imageAlt} />
        </div>
      </Container>
    </Section>
  );
}
