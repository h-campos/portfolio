import type { Metadata, Viewport } from "next";
import "./globals.css";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils/clsx";

export const metadata: Metadata = {
  title: "Hugo CAMPOS | Développeur FrontEnd",
  description: "Développeur FrontEnd depuis 4 ans, avec une aisance dans l'écosystème Javascript/Typescript"
};

export const viewport: Viewport = {
  themeColor: "#1c1917"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="fr">
      <body
        className={cn(
          "min-h-screen bg-background scroll-smooth",
          "py-12 sm:py-16 px-8 sm:px-20 md:px-32 lg:px-60 xl:px-80",
          "text-primary font-spaceGrotesk"
        )}>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}