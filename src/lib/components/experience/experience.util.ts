import type { ExperienceType } from "@/config/experiences";
import type { ExperienceTypeLabelInfo } from "./experience.type";

export function getLabelInfoByExperienceType(type: ExperienceType): ExperienceTypeLabelInfo {
  switch (type) {
    case "open-source": {
      return { color: "green", text: "open source" };
    }

    case "pro": {
      return { color: "blue", text: "pro" };
    }
  }
}