import { contact } from "@/lib/content";
import { site, socialLinks } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-sub" style={{ maxWidth: "52ch" }}>
          {contact.text}
        </p>
        <a className="contact-mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <ul className="contact-links">
          {socialLinks
            .filter((link) => link.icon !== "mail")
            .map((link) => (
              <li key={link.label}>
                <a
                  className="link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
