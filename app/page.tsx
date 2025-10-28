import { Section, Card, CardHeader, CardContent, CardFooter, Button, Badge } from "./components";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Section variant="hero" title="Mike Karl" subtitle="Fullstack Web und Systementwickler">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            variant="glass"
            hoverable
          >
            <CardHeader>
              <h3 className="text-xl font-semibold text-white mb-2">Über mich</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex, labore deleniti fuga repellendus maiores rerum, voluptates dicta accusamus nihil quibusdam dolorum dolor illo et corrupti doloremque velit itaque repudiandae!
              </p>
            </CardContent>
          </Card>

          <Card
            variant="default"
            hoverable
          >
            <CardHeader>
              <h3 className="text-xl font-semibold text-white mb-2">Aktuelle Beschäftigung</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere similique iusto beatae minima ea. Explicabo voluptatem itaque unde sequi, aperiam, dicta nulla nobis maiores, debitis aliquam corrupti quam earum dolor!
              </p></CardContent>
          </Card>

          <Card
            variant="outlined"
            hoverable
          >
            <CardHeader>
              <h3 className="text-xl font-semibold text-white mb-2">Erfahrung</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio neque natus quibusdam? Corrupti reprehenderit nisi repellendus facere, reiciendis, rerum, error iusto doloribus asperiores sapiente alias repellat autem? Earum, possimus?
              </p></CardContent>
          </Card>
        </div>
      </Section>

      {/* Education Section */}
      <Section title="Bildung" subtitle="Meine akademische Laufbahn und professionelle Entwicklung">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            variant="default"
          >
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Gymnasium Zwiesel</h3>
              <p className="text-gray-400 text-sm">Weiterführende Schule</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet porro cumque dolores eveniet sunt labore, vitae ipsam consectetur nisi alias odio temporibus! Mollitia nisi, similique eos quam saepe deleniti!
              </p>
            </CardContent>
          </Card>

          <Card
            variant="default"
          >
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Universität Passau</h3>
              <p className="text-gray-400 text-sm">Universität</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, cumque excepturi voluptates qui repellendus omnis animi ab placeat ullam soluta error aspernatur repellat. Repellat, omnis facilis sequi perferendis aliquam expedita?
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Skills Section */}
      <Section variant="feature" title="Erfahrung" subtitle="Technisches Wissen und Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="outlined">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white mb-3">Anwendungsentwicklung</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="blue">JavaScript</Badge>
                  <Badge variant="blue">Rust</Badge>
                  <Badge variant="blue">Java</Badge>
                  <Badge variant="blue">C#</Badge>
                </div>
                <p className="text-gray-300 text-sm">
                  Webentwicklung und Systementwicklung
                </p>
              </div>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white mb-3">Sytemintegration</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="green">Hardware</Badge>
                  <Badge variant="green">Virtualisierung</Badge>
                  <Badge variant="green">Networking</Badge>
                </div>
                <p className="text-gray-300 text-sm">
                  Self-Hosting
                </p>
              </div>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white mb-3">Soft Skills</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="yellow">Projektmanagement</Badge>
                  <Badge variant="yellow">Layer 8  ^^</Badge>
                </div>
                <p className="text-gray-300 text-sm">
                  Erfahrung im professionellen Umgang mit internen und externen Kunden
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section variant="feature" title="Portfolio" subtitle="Einige meiner Projekte (allein und im Team)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            variant="glass"
          >
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Raytracing in a Weekend</h3>
              <p className="text-gray-400 text-sm">Graphics Programming</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Ein Nachbau des Raytracers aus der Buchserie "Raytracing in a Weekend". Portiert von C++ auf Rust.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="blue">Rust</Badge>
                <Badge variant="blue">Graphics</Badge>
                <Badge variant="blue">Math</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">zum Code</Button>
            </CardFooter>
          </Card>

          <Card
            variant="glass"
          >
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">6502 Emulator</h3>
              <p className="text-gray-400 text-sm">System Programming</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Vollständiger Emulator des 6502 Mikroprozessors geschrieben in Rust.
                Alle Instruktionen und Addressierungsmodi auf einzelne Taktzyklen genau simuliert.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="blue">Emulation</Badge>
                <Badge variant="blue">Low-level</Badge>
                <Badge variant="blue">Hardware</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">zum Code</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Personal Section */}
      <Section title="Persönliches" subtitle="Über die Arbeit hinaus">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Hobbies</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Motorradfahren</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Astrofotografie</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Elektrotechnik</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="default">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Persönlicher Status</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Glücklich Vergeben ❤️</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <Section variant="minimal" title="Kontaktieren Sie mich gerne" subtitle="Sehen Sie sich meine Profile an und kontaktieren sie mich. Ich freue mich auf ein Gespräch mit Ihnen." />
    </main>
  );
}
