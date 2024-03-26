import { humanizeDateDiff } from "@/lib/utils/date/difference";
import { dayJS } from "@/lib/utils/day-js";
import type { Experience, ExperienceBase } from "./experiences.type";

export function populateExperience(experienceBase: ExperienceBase[]): Experience[] {
  const populated = experienceBase.map(exp => {
    const dateFormat = {
      start: exp.date.start.format("DD/MM/YYYY"),
      end: exp.date.end ? exp.date.end.format("DD/MM/YYYY") : "présent"
    };

    return {
      ...exp,
      duration: humanizeDateDiff(exp.date.start, exp.date.end ?? dayJS()),
      dateFormat
    };
  });

  return populated;
}