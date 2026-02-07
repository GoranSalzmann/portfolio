import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Mike Karl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg">
        <div className="bg1" />
        <div className="bg2" />
        {children}
      </body>
    </html>
  );
}
