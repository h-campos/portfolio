import type { Viewport } from "next";
import "./globals.css";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils/clsx";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

export { metadata } from "@/config/metadata/metadata.config";

export const viewport: Viewport = {
  themeColor: "#1c1917"
};

//TODO: Do e2e test and unit test and storybook for scalability

const spaceGrotesk = localFont({ src: "../../public/fonts/space-grotesk.ttf" });

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
          "py-12 sm:py-16 px-8 sm:px-20 md:px-32 lg:px-60 xl:px-80 2xl:px-[30rem]",
          "text-primary",
          spaceGrotesk.className
        )}>
        <main className="">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}