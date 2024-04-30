import type { ReactElement } from "react";
import AboutSection from "@/lib/sections/about.section";
import { Divider } from "@/lib/components/ui/divider";
import SkillsSection from "@/lib/sections/skills.section";
import SocialsSection from "@/lib/sections/socials.section";
import ExperiencesSection from "@/lib/sections/experiences.section";

//TODO: add github contributions graph

export default function Home(): ReactElement {
  return (
    <>
      <AboutSection />
      <Divider className="my-7" />

      <SkillsSection />
      <Divider className="my-7" />

      <ExperiencesSection />
      <Divider className="my-7" />

      <SocialsSection />
    </>
  );
}