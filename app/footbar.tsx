"use client";

import Link from "next/link";

export default function FootBar() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub", href: "https://github.com/GoranSalzmann"
    },
    {
      name: "Email", href: "mailto:karl.mike2002@gmail.com"
    }
  ];

  const quickLinks = [
    { name: "Lebenslauf", href: "/cv" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Kontakt", href: "/contact" }
  ];

  return (
    <footer className="bg-stone-900 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                MK
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mike Karl</h3>
                <p className="text-gray-400 text-sm">Web und Systementwickler</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leidenschaftlicher Entwickler, stets auf der Suche nach neuen Möglichkeiten.
            </p>
              <p className="mt-4 bg-gradient-to-r from-yellow-400 to-indigo-600 bg-clip-text text-transparent">
                <i> Always learning, always building.</i>
              </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 group"
                >
                  <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    { /* Icon */ }
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-4 border-t text-sm text-gray-500 flex justify-between">
          <p>&copy; {currentYear} Mike Karl. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
    </footer>
  );
}
