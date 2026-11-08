import type { ReactNode } from "react";
import { expertises } from "#/config/expertises";
import { profile } from "#/config/profile";
import { skills } from "#/config/skills";

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="mt-14 mb-4.5 text-[26px] font-bold tracking-[-0.02em] text-foreground">
      {children}
    </h2>
  );
};

export const Expertise = () => {
  return (
    <section
      id="savoir-faire"
      className="scroll-mt-20 animate-in fade-in fill-mode-both duration-[420ms] delay-[200ms] motion-safe:slide-in-from-bottom-2"
    >
      <Heading>Ce que je sais faire</Heading>

      <ul className="grid gap-3 sm:grid-cols-2">
        {expertises.map(({ title, icon: Icon, description }) => (
          <li key={title} className="dashed-card p-4">
            <Icon aria-hidden="true" className="size-5 text-(--accent-ink)" strokeWidth={1.75} />

            <h3 className="mt-3 mb-1.5 text-[15px] font-bold text-foreground">{title}</h3>

            <p className="text-[13.5px] text-muted-foreground">{description}</p>
          </li>
        ))}
      </ul>
    </section>
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
