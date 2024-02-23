import { experiences } from "@/config/experiences";
import type { ReactElement } from "react";
import { Experience } from "@/lib/components/experience";

export default function ExperiencesSection(): ReactElement {
  return (
    <section className="flex gap-10 flex-col">
      {experiences.map((experience, index) => <Experience key={index} experience={experience} />)}
    </section>
  );
}