import type { ReactElement } from "react";
import type { LabelProps } from "./label.type";
import { Text } from "@/lib/components/ui/text";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils/clsx";

export function Label(props: LabelProps): ReactElement {
  const { text, color, link } = props;

  const Tag = link ? "a" : "span";

  return (
    <Tag href={link} target="_blank" rel="noreferrer">
      <Text
        size="sm"
        className={cn(
          "rounded uppercase px-1 py-0.5",

          {
            "flex gap-1 items-center hover:brightness-110": link,

            "bg-blue-400 text-primary": color === "blue",
            "bg-emerald-600 text-primary": color === "green"
          }
        )}
      >
        <span>{text}</span>

        {link && <ExternalLinkIcon className="text-primary w-4 h-4" />}
      </Text>
    </Tag>
  );
}