import type { HTMLAttributes } from "react";
import type { LabelColor } from "@/lib/components/label";
import type { Experience } from "@/config/experiences";

export type ExperienceProps = HTMLAttributes<HTMLDivElement> & {
  experience: Experience;
};

export type ExperienceTypeLabelInfo = {
  text: string;
  color: LabelColor;
}