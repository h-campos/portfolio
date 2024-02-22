import type { ReactElement } from "react";
import AboutSection from "@/lib/sections/about.section";
import { Divider } from "@/lib/components/ui/divider";
import SkillsSection from "@/lib/sections/skills.section";

export default function Home(): ReactElement {
  return (
    <>
      <AboutSection />
      <Divider className="my-7" />

      <SkillsSection />
      <Divider className="my-7" />
    </>
  );
}