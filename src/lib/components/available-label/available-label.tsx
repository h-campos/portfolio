import type { ReactElement } from "react";
import type { AvailableLabelProps } from "./available-label.type";
import { cn } from "@/lib/utils/clsx";
import { Text } from "@/lib/components/ui/text";

export default function AvailableLabel(props: AvailableLabelProps): ReactElement {
  const { available, className, ...rest } = props;

  return (
    <div
      className={cn(
        className,
        "w-fit flex items-center gap-2 bg-opacity-20 px-3 py-0.5 rounded-full",
        available ? "bg-green-500" : "bg-red-500"
      )}
      {...rest}
    >
      <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", available ? "bg-green-500" : "bg-red-500")} />
      <Text size="sm" className={cn("uppercase text-opacity-80 tracking-wide", available ? "text-green-500" : "text-red-500")}>
        {available ? "Disponible" : "Indisponible"}
      </Text>
    </div>
  );
}