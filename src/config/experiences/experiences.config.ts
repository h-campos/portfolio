/* eslint-disable max-len */
import { date } from "@/lib/utils/date/parser";
import type { ExperienceBase } from "./experiences.type";
import { populateExperience } from "./experiences.util";

export const experienceBase: ExperienceBase[] = [
  // {
  //   type: "pro",
  //   date: {
  //     start: date(25, 6, 2024),
  //     end: null
  //   },
  //   company: "SEEDEXT",
  //   title: "Développeur Fullstack",
  //   link: "https://seedext.com",
  //   description: [
  //     "Développement de nouvelles features pour la solution",
  //     "Maintenance et résolution de bugs",
  //     "Review de code sur Github",
  //     "Travail en collaboration avec l'ensemble de l'équipe de développement"
  //   ],
  //   skills: ["React", "NextJS", "TailwindCSS", "Typescript", "ShadcnUI", "Fastify", "Playwright", "Vitest", "Storybook", "Github Actions"]
  // },
  {
    type: "pro",
    date: {
      start: date(15, 3, 2024),
      end: date(24, 6, 2024)
    },
    company: "SHOTGUN!",
    title: "Software Engineer",
    link: "https://shotgun.live",
    description: [
      "Développement de nouvelles features sur les solutions existantes",
      "Gestion et maintenance des projets existants",
      "Travail en collaboration avec l'ensemble de l'équipe de développement",
      "Résolution de bugs remontés par les équipes du support"
    ],
    skills: ["React", "Next", "TailwindCSS", "Typescript", "GraphQL", "ApolloClient", "AntDesign", "Supabase", "Vercel"]
  },
  {
    type: "pro",
    date: {
      start: date(10, 6, 2023),
      end: null
    },
    company: "LCDS EVENEMENTS",
    title: "Développeur full-stack",
    link: "https://github.com/LCDS-EVENEMENTS",
    description: [
      "Développement d'une application web de gestion de bénévoles",
      "Développement du site web de l'association",
      "Mise en place de la billetterie du festival",
      "Développement du système de planning pour les bénévoles via NextJS et Typescript",
      "Travail en collaboration avec le web designer du site web",
      "Mise en place de test end-to-end avec Playwright",
      "Mise en place de test unitaire avec Vitest"
    ],
    skills: ["React", "Next", "TailwindCSS", "Typescript", "Zod", "ShadcnUI", "Supabase", "PostgreSQL", "DayJS", "Zustand", "TanStack Query", "Server Actions"]
  },
  {
    type: "open-source",
    date: {
      start: date(1, 8, 2023),
      end: date(31, 11, 2023)
    },
    company: "LOL GAME",
    title: "Développeur full-stack",
    link: "https://github.com/Sakoutecher/lol-game",
    description: [
      "Développement d'un jeu en ligne de connaissance sur le jeu League of Legends",
      "Mise en place d'un système d'authentification Discord via Supabase",
      "Développement des différents mini jeux disponible",
      "Mise en place de différents système anti triche sur les différents jeux",
      "Développement du système du report de bug ou d'amélioration",
      "Réinitialisation du status des mini jeux tous les soirs à 00h00"
    ],
    skills: ["React", "Next", "TailwindCSS", "Typescript", "Zod", "ShadcnUI", "Supabase", "PostgreSQL", "DayJS", "Zustand", "TanStack Query"]
  },
  {
    type: "pro",
    date: {
      start: date(1, 9, 2022),
      end: date(31, 8, 2023)
    },
    company: "Eliott Consulting",
    title: "Développeur frontend",
    link: "https://www.eliott.consulting/",
    description: [
      "Développement du frontend de l'application web de remplissage de constat amiable",
      "Mise en place de Socket.io pour la communication en temps réel entre les utilisateurs",
      "Création de composants réutilisables (design system via Storybook) pour l'application web",
      "Proposition de design pour l'application web",
      "Mise en place de tests end-to-end avec Playwright",
      "Mise en place de tests unitaires avec Vitest",
      "Accompagnement autour du développeur backend de l'application web",
      "Développement d'une interface de chat pour un chat bot avec de l'IA"
    ],
    skills: ["Typescript", "Styled Components", "React", "Socket.io", "Framer Motion", "Storybook", "Playwright", "Vitest"]
  },
  {
    type: "pro",
    date: {
      start: date(1, 3, 2021),
      end: date(31, 4, 2021)
    },
    company: "AMS Tecnagri",
    title: "Développeur full-stack",
    link: null,
    description: [
      "Développement de l'intranet de l'entreprise avec Joomla",
      "Mise en place des pages existantes sur l'intranet précédent",
      "Création de nouvelles pages pour l'intranet",
      "Développement d'un planning permettant de suivre les différentes livraison",
      "Réaménagement de l'architecture de l'application web",
      "Fix de bugs présents sur les pages existantes",
      "Proposition de système de monitoring de tâches automatisées"
    ],
    skills: ["Typescript", "HTML", "SASS", "PHP", "MySQL", "Joomla", "LDAP", "Figma"]
  },
  {
    type: "pro",
    date: {
      start: date(1, 5, 2020),
      end: date(31, 6, 2020)
    },
    company: "Billaud Segeba",
    title: "Développeur frontend",
    link: null,
    description: [
      "Développement d'une application web pour estimer des véhicules en agricole",
      "Refont graphique de l'application web",
      "Réaménagement de l'architecture de l'application web",
      "Fix de bugs présents sur les pages existantes",
      "Proposition de système de monitoring de tâches automatisées"
    ],
    skills: ["HTML", "SASS", "PHP", "MySQL", "Microsoft Server", "Figma", "Javascript"]
  }
];

export const experiences = populateExperience(experienceBase);