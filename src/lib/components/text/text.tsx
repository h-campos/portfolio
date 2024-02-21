import type { ReactElement } from "react";
import type { TextProps } from "./text.type";
import { cn } from "@/lib/utils/clsx";

export default function Text(props: TextProps): ReactElement | null {
  const { type = "p", color = "primary", size = "base", weight = "normal", align = "left", children, className, ...rest } = props;

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
      "text-5xl": size === "5xl",

      "font-normal": weight === "normal",
      "font-medium": weight === "medium",
      "font-semibold": weight === "semibold",
      "font-bold": weight === "bold",

      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right"
    }
  );

  if (type === "p") return <p className={style} {...rest}>{children}</p>;

  if (type === "span") return <span className={style} {...rest}>{children}</span>;

  return null;
}