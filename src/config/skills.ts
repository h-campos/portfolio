export type Skill = {
  title: string;
  /** Logo in /public/skills. */
  logo: string;
  href: string;
};

export const skills: Skill[] = [
  {
    title: "TypeScript",
    logo: "/skills/typescript.svg",
    href: "https://www.typescriptlang.org",
  },
  { title: "React", logo: "/skills/react.png", href: "https://react.dev" },
  { title: "Next.js", logo: "/skills/next-js.svg", href: "https://nextjs.org" },
  {
    title: "TanStack Start",
    logo: "/skills/tanstack.png",
    href: "https://tanstack.com/start",
  },
  {
    title: "Tailwind",
    logo: "/skills/tailwind.svg",
    href: "https://tailwindcss.com",
  },
  {
    title: "Radix",
    logo: "/skills/radix.svg",
    href: "https://www.radix-ui.com",
  },
  { title: "Base UI", logo: "/skills/baseui.png", href: "https://base-ui.com" },
  { title: "Zod", logo: "/skills/zod.svg", href: "https://zod.dev" },
  {
    title: "Fastify",
    logo: "/skills/fastify.png",
    href: "https://fastify.dev",
  },
  { title: "Vitest", logo: "/skills/vitest.svg", href: "https://vitest.dev" },
  {
    title: "Storybook",
    logo: "/skills/storybook.png",
    href: "https://storybook.js.org",
  },
  {
    title: "TanStack Query",
    logo: "/skills/tanstack-query.png",
    href: "https://tanstack.com/query",
  },
  { title: "Day.js", logo: "/skills/dayjs.png", href: "https://day.js.org" },
  { title: "ESLint", logo: "/skills/eslint.png", href: "https://eslint.org" },
  { title: "Linear", logo: "/skills/linear.png", href: "https://linear.app" },
  {
    title: "PostgreSQL",
    logo: "/skills/postgresql.svg",
    href: "https://www.postgresql.org",
  },
];
