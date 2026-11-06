import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import { AsciiField } from "#/components/ascii-field";
import { Hero } from "#/components/hero";
import { SiteFooter, Stack } from "#/components/sections";
import { SiteHeader } from "#/components/site-header";
import { Timeline } from "#/components/timeline";

const routeApi = getRouteApi("/");

const Home = () => {
  const { now } = routeApi.useLoaderData();

  return (
    <div className="relative pb-24">
      <div className="halftone" aria-hidden="true" />

      <AsciiField />

      <SiteHeader />

      <main>
        <Hero now={now} />

        <Timeline now={now} />

        <div className="mx-auto max-w-175 px-6">
          <Stack />

          <SiteFooter />
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute("/")({
  loader: () => ({ now: new Date().toISOString() }),
  component: Home,
});
