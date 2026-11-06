import type { ReactNode } from "react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { themeInitScript } from "#/components/theme-toggle";
import { profile } from "#/config/profile";

import appCss from "../styles.css?url";

const title = `${profile.name} — ${profile.title}`;
const description = "Développeur frontend React et TypeScript, spécialisé dans les interfaces et l’UI/UX de dashboards. En poste chez Seedext, sur un assistant IA de réunion.";

const RootDocument = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        {/* Static, first-party script: sets the theme class before paint to avoid a flash. */}
        {/* eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        <HeadContent />
      </head>

      <body>
        {children}

        <TanStackDevtools config={{ position: "bottom-right" }} plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]} />

        <Scripts />
      </body>
    </html>
  );
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "theme-color", content: "#000a0d" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: profile.siteUrl },
      { property: "og:site_name", content: `${profile.name} | Portfolio` },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: profile.siteUrl },
    ],
  }),
  shellComponent: RootDocument,
});
