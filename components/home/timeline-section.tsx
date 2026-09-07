import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";

const timelineItems: TimelineEntry[] = [
  {
    year: "2026",
    title: "Anwendungsentwickler @ Brummer Logistik",
    description:
      "Entwicklung einer neuen Lager-Begleitapp – eines der zentralen Systeme eines Speditions- und Logistikbetriebs. Aufgrund der Leistungen in der Ausbildung für die Rolle ausgewählt; Softwarearchitektur und wichtige Entscheidungen von Tag 1 an.",
    tags: ["Software Engineering", "System Architecture", "Logistik"],
    side: "right",
  },
  {
    year: "2026",
    title: "Ausbildung FI Anwendungsentwicklung",
    description:
      "Fachinformatiker für Anwendungsentwicklung an der Karl-Peter-Obermeier-Schule Passau. Bestanden in zwei Jahren mit Ø 1,0, IHK-Punkte Ø 90 und Auszeichnung.",
    tags: ["Ausbildung", "Anwendungsentwicklung"],
    side: "left",
  },
  {
    year: "2024",
    title: "Informatikstudium",
    description:
      "Studium an der TH Deggendorf und der Universität Passau. Abgebrochen im 6. Semester mit damaligem Ø 2,7.",
    tags: ["Informatik", "Hochschule"],
    side: "right",
  },
  {
    year: "2020",
    title: "Abitur",
    description: "Gymnasium Zwiesel. Bestanden mit Ø 2,7.",
    tags: ["Abitur"],
    side: "left",
  },
];

export function TimelineSection() {
  return (
    <Section id="timeline" variant="charcoal">
      <Container>
        <SectionHeader
          label="04 / Werdegang"
          subtitle="Von der Ausbildung zum Berufseinstieg als Anwendungsentwickler."
          className="mb-16"
        />
        <Timeline items={timelineItems} />
      </Container>
    </Section>
  );
}
