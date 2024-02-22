import type { ReactElement } from "react";
import type { DividerProps } from "./divider.type";
import { cn } from "@/lib/utils/clsx";

export function Divider(props: DividerProps): ReactElement {
  const { className, ...rest } = props;

  return <div className={cn(className, "block bg-accent h-0.5 w-full")} {...rest} />;
}