import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-[5vw] py-8">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="font-mono text-sm text-muted">
          Built with Next.js & Tailwind CSS
        </p>
      </Container>
    </footer>
  );
}
