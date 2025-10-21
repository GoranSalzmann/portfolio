import { Section, Card, CardHeader, CardContent, CardFooter, Button, Badge } from "./components";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Section variant="hero" title="Mike Karl" subtitle="Fullstack Developer / Web Developer / System Developer">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="glass" className="float">
            <CardHeader>
              <h3 className="text-xl font-semibold text-white mb-2">About Me</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Passionate developer with expertise in full-stack development,
                system programming, and modern web technologies.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="glass" size="sm">Learn More</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" className="float" style={{ animationDelay: '1s' }}>
            <CardHeader>
              <h3 className="text-xl font-semibold text-white mb-2">Current Focus</h3>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="info">React</Badge>
                <Badge variant="info">TypeScript</Badge>
                <Badge variant="info">Rust</Badge>
                <Badge variant="success">Next.js</Badge>
              </div>
              <p className="text-gray-300 text-sm">
                Building modern web applications with cutting-edge technologies.
              </p>
            </CardContent>
          </Card>

          <Card variant="outlined" className="float" style={{ animationDelay: '2s' }}>
            <CardHeader>
              <h3 className="text-xl font-semibold text-white mb-2">Quick Stats</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-white font-medium">5+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Projects</span>
                  <span className="text-white font-medium">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Languages</span>
                  <span className="text-white font-medium">10+</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Education Section */}
      <Section title="Education" subtitle="My academic journey and professional development">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Gymnasium Zwiesel</h3>
              <p className="text-gray-400 text-sm">High School Education</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Foundation in mathematics, sciences, and critical thinking skills.
              </p>
            </CardContent>
          </Card>

          <Card variant="default">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">University of Passau</h3>
              <p className="text-gray-400 text-sm">Higher Education</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Advanced studies in computer science and software engineering.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Skills & Expertise" subtitle="Technical capabilities and professional skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white mb-3">Programming Languages</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="info">JavaScript</Badge>
                  <Badge variant="info">TypeScript</Badge>
                  <Badge variant="info">Rust</Badge>
                  <Badge variant="info">Python</Badge>
                </div>
                <p className="text-gray-300 text-sm">
                  Web, System, Functional, and Desktop development
                </p>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white mb-3">IT Infrastructure</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="success">Virtualization</Badge>
                  <Badge variant="success">Networking</Badge>
                  <Badge variant="success">Cloud</Badge>
                </div>
                <p className="text-gray-300 text-sm">
                  FISI expertise in virtualization and networking
                </p>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white mb-3">Soft Skills</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="warning">Teamwork</Badge>
                  <Badge variant="warning">Communication</Badge>
                  <Badge variant="warning">Leadership</Badge>
                </div>
                <p className="text-gray-300 text-sm">
                  Strong interpersonal and collaboration skills
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section title="Featured Projects" subtitle="Some of my notable work and contributions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="glass" className="hover:neon-glow">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Raytracing in a Weekend</h3>
              <p className="text-gray-400 text-sm">Graphics Programming</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                A complete raytracing implementation built from scratch,
                demonstrating advanced graphics programming concepts.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="info">Rust</Badge>
                <Badge variant="info">Graphics</Badge>
                <Badge variant="info">Math</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">View Project</Button>
            </CardFooter>
          </Card>

          <Card variant="glass" className="hover:neon-glow">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Interpreter Book</h3>
              <p className="text-gray-400 text-sm">Language Implementation</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                A comprehensive guide to building programming language interpreters,
                covering lexing, parsing, and execution.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="info">Compiler</Badge>
                <Badge variant="info">Education</Badge>
                <Badge variant="info">Documentation</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Read More</Button>
            </CardFooter>
          </Card>

          <Card variant="glass" className="hover:neon-glow">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">6502 Emulator</h3>
              <p className="text-gray-400 text-sm">System Programming</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                A complete emulator for the 6502 microprocessor,
                implementing all instructions and addressing modes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="info">Emulation</Badge>
                <Badge variant="info">Low-level</Badge>
                <Badge variant="info">Hardware</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Try Demo</Button>
            </CardFooter>
          </Card>

          <Card variant="glass" className="hover:neon-glow">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Brainfuck RS</h3>
              <p className="text-gray-400 text-sm">Language Implementation</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                A high-performance Brainfuck interpreter written in Rust,
                showcasing optimization techniques and language design.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="info">Rust</Badge>
                <Badge variant="info">Performance</Badge>
                <Badge variant="info">Optimization</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">View Code</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* Personal Section */}
      <Section title="Personal Life" subtitle="Beyond code and technology">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="default">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Hobbies & Interests</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Motorcycle Riding</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Astrophotography</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Photography</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="default">
            <CardHeader>
              <h3 className="text-lg font-semibold text-white">Personal Status</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">E33, LiS, etc.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full pulse-glow"></div>
                  <span className="text-gray-300">Glücklich Vergeben ❤️</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Get In Touch" subtitle="Let's connect and discuss opportunities">
        <div className="max-w-2xl mx-auto">
          <Card variant="glass" className="text-center">
            <CardContent>
              <p className="text-gray-300 mb-6 text-lg">
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg">
                  Email: example@example.com
                </Button>
                <Button variant="outline" size="lg">
                  LinkedIn Profile
                </Button>
                <Button variant="outline" size="lg">
                  GitHub Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  );
}
