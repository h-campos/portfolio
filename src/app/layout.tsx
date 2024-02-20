import type { Metadata } from "next";
import "./globals.css";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  title: "Hugo CAMPOS | Développeur FrontEnd",
  description: "Développeur FrontEnd depuis 4 ans, avec une aisance dans l'écosystème Javascript/Typescript"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-background scroll-smooth py-16 px-16">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}