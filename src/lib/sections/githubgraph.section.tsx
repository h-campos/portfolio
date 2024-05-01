import type { ReactElement } from "react";
import { GithubGraphCalendar } from "@/lib/components/github-graph-calendar";

export default function GithubGraphSection(): ReactElement {
  return (
    <section>
      <GithubGraphCalendar username="h-campos" />
    </section>
  );
}