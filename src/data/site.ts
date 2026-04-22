export const site = {
  name: "Mike Karl",
  location: "Grafenau, Germany",
  email: "karl.mike2002@gmail.com",
  github: "https://github.com/GoranSalzmann",
  linkedin: "https://www.linkedin.com/in/mike-karl-a58925381/",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Hobbies", href: "/hobbies" },
  { label: "Projekte", href: "/projects" },
  { label: "Timeline", href: "/timeline" },
  { label: "Kontakt", href: "/contact" },
];

export const socialLinks = [
  { label: "GitHub", href: site.github, icon: "GithubIcon" },
  { label: "LinkedIn", href: site.linkedin, icon: "LinkedInIcon" },
  { label: "Email", href: `mailto:${site.email}`, icon: "Mail" },
];

export const footerContent = {
  copyright: (year: number, name: string) =>
    `\u00A9 ${year} ${name}. All rights reserved.`,
  builtWith: "Built with Next.js, React & Tailwind CSS",
};

export const heroContent = {
  subtitle: [
    "Systementwickler",
    "Creative Technologist",
    "Low-Level Enthusiast",
    "Graphics Programmer",
  ],
  nameFirst: "MIKE",
  nameLast: "KARL",
};
