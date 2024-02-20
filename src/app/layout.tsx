import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}