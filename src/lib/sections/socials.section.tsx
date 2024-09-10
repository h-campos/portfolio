import type { ReactElement } from "react";
import { LinkButton } from "@/lib/components/link-button";

export const SocialsSection = (): ReactElement => {
  return (
    <section className="flex flex-wrap gap-2">
      <LinkButton href="https://github.com/Sakoutecher" target="_blank">Github</LinkButton>
      <LinkButton href="https://www.linkedin.com/in/hcamposdev" target="_blank">Linkedin</LinkButton>
      <LinkButton href="https://www.malt.fr/profile/hugocampos" target="_blank">Malt</LinkButton>
      <LinkButton href="mailto:hcampospro@gmail.com" target="_blank">Email</LinkButton>
    </section>
  );
}