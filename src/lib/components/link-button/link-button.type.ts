import type { LinkProps } from "next/link";
import type { ReactNode } from "react";

export type LinkButtonProps = LinkProps & {
  children: ReactNode;
  target?: "_blank" | "_parent" | "_self" | "_top";
};