import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import Header from "./components/Header";
import Image from "next/image";
import logo from "./logo.png"
import Link from "next/link";

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
            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Projekte</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Kontakt</NavItem>
          </Navbar>
          <Link href={"/"}>
            <Image alt="logo.png" className="mx-4" src={logo} width={70} height={70} />
          </Link>
        </Header>
        {children}
        <div className="bg" />
      </body>
    </html>
  );
}
