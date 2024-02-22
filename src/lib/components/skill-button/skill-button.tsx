import type { ReactElement } from "react";
import type { SkillButtonProps } from "./skill-button.type";
import Link from "next/link";
import { Text } from "@/lib/components/ui/text/text";
import Icon from "@/lib/components/ui/icon/icon";

export default function SkillButton(props: SkillButtonProps): ReactElement {
  const { title, logo, link } = props;

  return (
    <Link href={link} target="_blank">
      <span className="flex items-center gap-2 w-fit rounded border border-accent py-1 px-2 hover:border-primary">
        <Icon src={logo} alt={title} />
        <Text>{title}</Text>
      </span>
    </Link>
  );
}