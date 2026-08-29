export const site = {
  name: "Mike Karl",
  location: "Grafenau, Germany",
  email: "karl.mike2002@gmail.com",
  github: "https://github.com/GoranSalzmann",
  linkedin: "https://www.linkedin.com/in/mike-karl-a58925381/",
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Hobbies", href: "/#hobbies" },
  { label: "Projekte", href: "/#projects" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Kontakt", href: "/#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: site.github, icon: "github" as const },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" as const },
];
