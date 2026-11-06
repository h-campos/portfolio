import type { ReactNode } from "react";
import { profile } from "#/config/profile";
import { skills } from "#/config/skills";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="mt-14 mb-4.5 text-[26px] font-bold tracking-[-0.02em] text-foreground">
      {children}
    </h2>
  );
};

export const Stack = () => {
  return (
    <section id="stack" className="scroll-mt-20">
      <Heading>Stack</Heading>

      <ul className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li key={skill.title}>
            <a
              href={skill.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-line py-0.75 pr-2.5 pl-2 text-xs text-soft transition-colors hover:border-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <img src={skill.logo} alt="" width={14} height={14} className="size-3.5 rounded-[3px] object-contain" />
              {skill.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const footerLink = "text-foreground underline decoration-line underline-offset-[3px] hover:decoration-foreground";

export const SiteFooter = () => {
  return (
    <footer className="mt-12 flex flex-wrap gap-3.5 border-t border-line2 pt-4.5 text-[13px]">
      {profile.socials.map((social) => (
        <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className={footerLink}>
          {social.label}
        </a>
      ))}

      <a href={`mailto:${profile.email}`} className={footerLink}>Mail</a>
    </footer>
  );
};
