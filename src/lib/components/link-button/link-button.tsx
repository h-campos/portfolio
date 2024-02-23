import type { ReactElement } from "react";
import type { LinkButtonProps } from "./link-button.type";
import Link from "next/link";

export function LinkButton(props: LinkButtonProps): ReactElement {
  const { children, target, ...rest } = props;

  return <Link target={target} className="rounded border border-accent py-1 px-5 text-primary hover:border-primary" {...rest}>{children}</Link>;
}