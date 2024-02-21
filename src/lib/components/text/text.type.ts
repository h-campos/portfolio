import type { HTMLAttributes, PropsWithChildren } from "react";

export type TextProps = PropsWithChildren & HTMLAttributes<HTMLParagraphElement & HTMLSpanElement> & {
  type: "p" | "span";
  color: "primary" | "gray";
  size: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight: "normal" | "medium" | "semibold" | "bold";
  align: "left" | "center" | "right";
}