import type { HTMLAttributes, PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren & HTMLAttributes<HTMLHeadingElement> & {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color: "primary" | "gray";
  size: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}