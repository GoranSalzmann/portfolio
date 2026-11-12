import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
