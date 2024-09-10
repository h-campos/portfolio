import { skills } from "@/config/skills";
import type { ReactElement } from "react";
import { SkillButton } from "../components/skill-button/skill-button";

export const SkillsSection = (): ReactElement => {
  return (
    <section className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <SkillButton key={idx} title={skill.title} logo={skill.logo} link={skill.link} />
      ))}
    </section>
  );
}