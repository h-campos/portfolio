import type { ReactElement } from "react";
import type { ExperienceProps } from "./experience.type";
import { Text } from "@/lib/components/ui/text";
import { Label } from "@/lib/components/label";
import { getLabelInfoByExperienceType } from "./experience.util";

export function Experience(props: ExperienceProps): ReactElement {
  const { experience, ...rest } = props;

  const experienceTypeLabel = getLabelInfoByExperienceType(experience.type);

  return (
    <div {...rest}>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex flex-wrap items-center gap-2">
          <Text size="lg" className="uppercase">{experience.company}</Text>

          <Label color={experienceTypeLabel.color} text={experienceTypeLabel.text} link={experience.link ?? undefined} />
        </div>

        <Text color="gray">
          {experience.dateFormat.start} - {experience.dateFormat.end} ({experience.duration})
        </Text>
      </div>

      <Text className="mb-1">{experience.title}</Text>

      {experience.description.map(line => <Text key={line} color="gray" size="sm" className="ml-1">● {line}</Text>)}

      <Text size="sm" color="gray" className="mt-1">
        <span className="text-white">Technologies :</span> {experience.skills.join(" • ")}
      </Text>
    </div>
  );
}