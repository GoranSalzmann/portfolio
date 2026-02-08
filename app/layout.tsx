import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import Header from "./components/Header";
import Image from "next/image";
import logo from "./logo.png"

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
          <Navbar>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/projects">Projekte</NavItem>
            <NavItem href="/contact">Kontakt</NavItem>
          </Navbar>
          <NavItem href="/">
            <Image alt="logo.png" src={logo} width={70} height={70} />
          </NavItem>
        </Header>
        {children}
        <div className="bg" />
      </body>
    </html>
  );
}
