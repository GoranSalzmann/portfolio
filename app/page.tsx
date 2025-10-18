import PageSection from "./page-section";

export default function Home() {
  return (
    <main>
      <PageSection title="Hero Section" content="Fullstack / Web / Systementwickler" />
      <PageSection title="Lebenslauf">
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Gym Zwiesel</li>
          <li>Uni Passau</li>
          <li>Berufsschule</li>
        </ul>
      </PageSection>
      <PageSection title="Hobbies" content="Motorradfahren, Astrofotografie" />
      <PageSection title="Skills">
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Programmiersprachen: Web, System, Funktional, Desktop</li>
          <li>Fisi: Virtualisierung, Networking</li>
          <li>Soft Skills: Teamarbeit, Kommunikation</li>
        </ul>
      </PageSection>
      <PageSection title="Privates">
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>E33, LiS, etc.</li>
          <li>Glücklich Vergeben ❤️</li>
        </ul>
      </PageSection>
      <PageSection title="Portfolio">
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Raytracing in a Weekend</li>
          <li>Interpreter Book</li>
          <li>6502 Emu</li>
          <li>Brainfuck RS</li>
          <li>Weitere (Rust Crate Suite, RUDP, Teamspeak, Discord)</li>
        </ul>
      </PageSection>
      <PageSection title="Kontakt" content="Email: example@example.com - LinkedIn: [Your LinkedIn Profile] - GitHub: [Your GitHub Profile]" />
    </main>
  );
}
