import type { LucideIcon } from "lucide-react";
import { BotIcon, ComponentIcon, LayoutDashboardIcon, ShieldCheckIcon } from "lucide-react";

export type Expertise = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const expertises: Expertise[] = [
  {
    title: "UI & UX produit",
    icon: LayoutDashboardIcon,
    description: "Des dashboards clairs, soignés au pixel près et pensés pour l’usage réel.",
  },
  {
    title: "Design system",
    icon: ComponentIcon,
    description: "Des composants réutilisables qui gardent toute l’équipe cohérente.",
  },
  {
    title: "Qualité & tests",
    icon: ShieldCheckIcon,
    description: "Des tests et une CI qui permettent de livrer souvent, sereinement.",
  },
  {
    title: "Lead & travail agentique",
    icon: BotIcon,
    description: "Cadrer, relire, accompagner et aller vite avec l’IA sans baisser le niveau.",
  },
];
