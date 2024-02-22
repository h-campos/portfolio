import type { ReactElement } from "react";
import type { IconProps } from "./icon.type";
import Image from "next/image";

export default function Icon(props: IconProps): ReactElement {
  const { src, alt, size = 22, ...rest } = props;

  return <Image src={src} alt={alt} height={size} width={size} {...rest} />;
}