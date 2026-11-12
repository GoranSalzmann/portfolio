import type { Metadata } from "next";
import { Martian_Mono, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { site, socialLinks } from "@/lib/site";
import "./globals.css";

const martianMono = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-martian",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Mike Karl — Portfolio",
  description:
    "Mike Karl — Softwareengineer & Anwendungsentwickler aus Grafenau. Portfolio mit Projekten aus Systems Programming, Computer Graphics und Low-Level-Entwicklung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${martianMono.variable} ${newsreader.variable} h-full`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <a
            href="#inhalt"
            className="btn btn-solid sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
          >
            Zum Inhalt springen
          </a>
          <SiteHeader />
          <div id="inhalt" className="flex-1">
            {children}
          </div>
          <footer className="border-t border-rule">
            <div className="wrap code flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-6 text-dim">
              <p>
                © {new Date().getFullYear()} {site.name}
              </p>
              <ul className="flex flex-wrap gap-x-6">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-key"
                      {...(link.icon === "mail"
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
