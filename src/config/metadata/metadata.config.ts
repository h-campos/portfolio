import type { Metadata } from "next";

const data = {
  title: "Hugo CAMPOS | Développeur FrontEnd",
  description: [
    "Développeur FrontEnd depuis 4 ans avec une aisance dans l'écosystème Javascript/Typescript,",
    "j'utilise principalement React et Next.js pour la création de mes applications web."
  ].join(" ")
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hcampos.fr"),

  icons: "/favicon.ico",

  title: data.title,
  description: data.description,

  openGraph: {
    title: data.title,
    description: data.description,
    siteName: "Hugo CAMPOS | Portfolio",
    url: "https://hcampos.fr",
    type: "website"
  },

  twitter: {
    title: data.title,
    description: data.description
  }
};