import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";
import FootBar from "./footbar";

export const metadata: Metadata = {
  title: "Welcome - Mike Karl",
  description: "Personal website of Mike Karl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-stone-950`}
      >
        <Navbar />
        {children}
        <FootBar />
      </body>
    </html>
  );
}
