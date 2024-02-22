import type { ReactElement } from "react";
import { Heading } from "@/lib/components/ui/heading";
import { Text } from "@/lib/components/ui/text";
import Image from "next/image";
import AvailableLabel from "../components/available-label/available-label";

export default function AboutSection(): ReactElement {
  return (
    <div className="flex justify-between gap-16">
      <div className="space-y-5">
        <Heading type="h1" size="3xl" color="primary">CAMPOS Hugo</Heading>

        <Text size="base" color="gray">
          Développeur FrontEnd depuis 4 ans, avec une aisance dans l&apos;écosystème Javascript/Typescript
        </Text>

        <AvailableLabel available />
      </div>

      <div className="relative h-32 w-32 shrink-0 rounded-full hidden sm:block">
        <Image
          src="/pictures/me.webp"
          alt="My profile picture"
          fill
          className="rounded-full border-2"
        />
      </div>
    </div>
  );
}