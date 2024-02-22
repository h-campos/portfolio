import type { HTMLAttributes } from "react";

export type AvailableLabelProps = HTMLAttributes<HTMLDivElement> & {
  available?: boolean;
  className?: string;
}