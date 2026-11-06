export type ExperienceKind = "pro" | "benevolat" | "open-source";

/** A role held within one company, for promotions or role changes. Newest first. */
export type Position = {
  role: string;
  /** ISO date (YYYY-MM-DD). */
  start: string;
  /** ISO date, or null while ongoing. */
  end: string | null;
};

export type Experience = {
  id: string;
  company: string;
  /** Current or last role, used when there is no `positions` list. */
  role: string;
  kind: ExperienceKind;
  start: string;
  end: string | null;
  /** Successive roles inside the company, newest first. Overrides `role` in the card. */
  positions?: Position[];
  url: string | null;
  logo: string;
  tagline: string;
  bullets: string[];
  stack: string[];
  color: string;
};

export const kindLabel: Record<ExperienceKind, string | null> = {
  "pro": null,
  "benevolat": "Bénévolat",
  "open-source": "Open source",
};

export const experiences: Experience[] = [
  {
    id: "seedext",
    company: "Seedext",
    role: "Lead Frontend Developer",
    kind: "pro",
    start: "2024-06-22",
    end: null,
    positions: [
      { role: "Lead Frontend Developer", start: "2026-02-01", end: null },
      { role: "Développeur fullstack", start: "2024-06-22", end: "2026-01-31" },
    ],
    url: "https://seedext.com",
    logo: "/companies/seedext.png",
    tagline: "Assistant IA de réunion : transcription, comptes-rendus et recherche dans les échanges.",
    bullets: [
      "Développement de nouvelles features sur la plateforme, du front Next.js à l’API Fastify",
      "Tests Playwright et Vitest, Storybook pour le design system",
      "Review de code sur GitHub et CI avec GitHub Actions, en collaboration avec toute l’équipe",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Fastify",
      "Playwright",
      "Vitest",
      "Storybook",
      "GitHub Actions",
    ],
    color: "#1a6cff",
  },
  {
    id: "shotgun",
    company: "Shotgun",
    role: "Software engineer",
    kind: "pro",
    start: "2024-03-19",
    end: "2024-06-24",
    url: "https://shotgun.live",
    logo: "/companies/shotgun.png",
    tagline: "Billetterie et découverte d’événements pour la scène musicale.",
    bullets: [
      "Nouvelles features sur les produits existants",
      "Maintenance des projets et résolution des bugs remontés par le support",
      "Stack GraphQL et Apollo, Supabase, déploiement Vercel",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Ant Design",
      "Supabase",
      "Vercel",
    ],
    color: "#c084fc",
  },
  {
    id: "lcds",
    company: "LCDS Événements",
    role: "Développeur fullstack",
    kind: "benevolat",
    start: "2023-06-10",
    end: null,
    url: "https://cuicuitedays.fr",
    logo: "/companies/lcds.png",
    tagline:
      "Cuicuite Days : le site du festival, sa billetterie et l’application de gestion des bénévoles.",
    bullets: [
      "Application web de gestion et de planning des bénévoles, en Next.js et TypeScript",
      "Site vitrine du festival avec le web designer, mise en place de la billetterie",
      "Tests end-to-end Playwright et unitaires Vitest",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Zod",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "Zustand",
      "TanStack Query",
      "Server Actions",
    ],
    color: "#ff7a3d",
  },
  {
    id: "eliott",
    company: "Eliott Consulting",
    role: "Développeur frontend",
    kind: "pro",
    start: "2022-09-01",
    end: "2023-08-31",
    url: "https://www.eliott.consulting/",
    logo: "/companies/eliott.png",
    tagline:
      "Application de constat amiable en ligne, remplie à deux en temps réel.",
    bullets: [
      "Frontend de l’application, communication temps réel entre utilisateurs via Socket.io",
      "Design system en Storybook, propositions de design, accompagnement du développeur backend",
      "Interface de chat pour un assistant IA, tests Playwright et Vitest",
    ],
    stack: [
      "React",
      "TypeScript",
      "Styled Components",
      "Socket.io",
      "Framer Motion",
      "Storybook",
      "Playwright",
      "Vitest",
    ],
    color: "#f97316",
  },
  {
    id: "ams",
    company: "AMS Tecnagri",
    role: "Développeur fullstack",
    kind: "pro",
    start: "2021-03-01",
    end: "2021-04-30",
    url: null,
    logo: "/companies/ams.png",
    tagline:
      "Intranet et planning de suivi des livraisons pour l’agro-industrie.",
    bullets: [
      "Refonte de l’intranet sous Joomla et de son architecture, reprise des pages existantes",
      "Planning de suivi des livraisons",
      "Proposition d’un monitoring des tâches automatisées",
    ],
    stack: [
      "TypeScript",
      "HTML",
      "SASS",
      "PHP",
      "MySQL",
      "Joomla",
      "LDAP",
      "Figma",
    ],
    color: "#f28c28",
  },
  {
    id: "billaud",
    company: "Billaud Segeba",
    role: "Développeur frontend",
    kind: "pro",
    start: "2020-05-01",
    end: "2020-06-30",
    url: null,
    logo: "/companies/billaud.png",
    tagline: "Application web d’estimation de matériel agricole d’occasion.",
    bullets: [
      "Refonte graphique de l’application d’estimation",
      "Réorganisation de l’architecture et corrections sur les pages existantes",
      "Proposition d’un monitoring des tâches automatisées",
    ],
    stack: [
      "JavaScript",
      "HTML",
      "SASS",
      "PHP",
      "MySQL",
      "Microsoft Server",
      "Figma",
    ],
    color: "#2eb872",
  },
];
