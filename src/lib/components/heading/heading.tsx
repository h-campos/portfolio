import type { HeadingProps } from "./heading.type";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils/clsx";

export default function Heading(props: HeadingProps): ReactElement | null {
  const { type = "h3", color = "primary", size = "lg", children, className, ...rest } = props;

  const style = cn(
    className,
    {
      "text-primay": color === "primary",
      "text-gray": color === "gray",

      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-lg": size === "lg",
      "text-xl": size === "xl",
      "text-2xl": size === "2xl",
      "text-3xl": size === "3xl",
      "text-4xl": size === "4xl",
      "text-5xl": size === "5xl"
    }
  );

  if (type === "h1") return <h1 className={style} {...rest}>{children}</h1>;

  if (type === "h2") return <h2 className={style} {...rest}>{children}</h2>;

  if (type === "h3") return <h3 className={style} {...rest}>{children}</h3>;

  if (type === "h4") return <h4 className={style} {...rest}>{children}</h4>;

  if (type === "h5") return <h5 className={style} {...rest}>{children}</h5>;

  if (type === "h6") return <h6 className={style} {...rest}>{children}</h6>;

  return null;
}