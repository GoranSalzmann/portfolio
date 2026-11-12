import Link from "next/link";
import { Colophon, Masthead } from "@/components/chrome";

export default function NotFound() {
  return (
    <>
      <Masthead />
      <main className="not-found">
        <h1>Seite nicht gefunden</h1>
        <p>Die angeforderte Route existiert nicht oder wurde verschoben.</p>
        <Link href="/">Zur Startseite</Link>
      </main>
      <Colophon />
    </>
  );
}
