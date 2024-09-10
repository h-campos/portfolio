import { Heading } from "@/lib/components/ui/heading";
import { Text } from "@/lib/components/ui/text";
import Image from "next/image";
import type { ReactElement } from "react";
import { dayJS } from "../utils/day-js";

export const AboutSection = (): ReactElement => {
  const since = dayJS(new Date()).diff("2018-25-01", "year")

  return (
    <section className="flex justify-between gap-16">
      <div className="space-y-5">
        <Heading type="h1" size="3xl" color="primary">CAMPOS Hugo</Heading>

        <Text size="base" color="gray">
          Développeur FullStack depuis {since} ans, spécialisé dans l'écosystème Typescript
        </Text>
      </div>

      <div className="relative h-32 w-32 shrink-0 rounded-full hidden sm:block">
        <Image
          src="/pictures/me.webp"
          alt="My profile picture"
          fill
          className="rounded-full border-2 object-cover"
          sizes="100px"
        />
      </div>
    </section>
  );
}