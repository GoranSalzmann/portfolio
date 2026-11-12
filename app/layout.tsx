import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Libre_Caslon_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import "./globals.css";

const barlow = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const caslon = Libre_Caslon_Text({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-caslon",
});

export const metadata: Metadata = {
  title: "Mike Karl — Portfolio",
  description:
    "Mike Karl — Softwareengineer & Anwendungsentwickler aus Grafenau. Portfolio mit Projekten aus Systems Programming, Computer Graphics und Low-Level-Entwicklung.",
  icons: {
    icon: "/favicon.svg",
  },
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
      className={`${barlow.variable} ${barlowCondensed.variable} ${caslon.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
