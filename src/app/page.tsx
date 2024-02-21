import type { ReactElement } from "react";
import AboutSection from "@/lib/sections/about.section";
import { Divider } from "@/lib/components/divider";

export default function Home(): ReactElement {
  return (
    <>
      <AboutSection />
      <Divider className="my-7" />
    </>
  );
}