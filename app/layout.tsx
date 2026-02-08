import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import Header from "./components/Header";

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
      <body>
        <Header>
          <NavItem href="/">
            Logo
          </NavItem>
          <Navbar>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/projects">Projekte</NavItem>
            <NavItem href="/contact">Kontakt</NavItem>
          </Navbar>
        </Header>
        {children}
        <div className="bg" />
      </body>
    </html>
  );
}
