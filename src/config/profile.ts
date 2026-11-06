export type SocialIcon = "github" | "linkedin" | "malt";

export type Social = {
  label: string;
  href: string;
  handle: string;
  icon: SocialIcon;
};

export const profile = {
  name: "Hugo Campos",
  title: "Développeur frontend",
  /** First year of professional practice, used for the "N ans" figure. */
  sinceYear: 2020,
  location: "Paris",
  email: "hcampospro@gmail.com",
  currentCompany: "Seedext",
  avatar: "/pictures/me.webp",
  siteUrl: "https://hcampos.fr",
  intro:
    "Je conçois et développe des interfaces web en React et TypeScript, en soignant autant l’UI que l’UX, principalement sur des dashboards. En poste chez Seedext, sur un assistant IA de réunion.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/h-campos",
      handle: "h-campos",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hcamposdev",
      handle: "hcamposdev",
      icon: "linkedin",
    },
    {
      label: "Malt",
      href: "https://www.malt.fr/profile/hugocampos",
      handle: "hugocampos",
      icon: "malt",
    },
  ] satisfies Social[],
} as const;
