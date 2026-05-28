export interface TimelineEvent {
  id: number;
  period: string;
  title: string;
  description: string;
}

export const journey: TimelineEvent[] = [
  {
    id: 1,
    period: "2019 — 2023",
    title: "Soporte Técnico Independiente",
    description: "Mantenimiento preventivo y diagnóstico de fallas en sistemas Windows/Linux para particulares."
  },
  {
    id: 2,
    period: "2020 — 2026",
    title: "Escuela Técnica EPET 20",
    description: "Formación como Técnico en Programación con foco en lógica, C++ y entornos Linux."
  },
  {
    id: 3,
    period: "2025",
    title: "Publicación en AUR",
    description: "Desarrollo y empaquetado de herramientas de monitoreo bajo estándares de la comunidad Arch."
  },
  {
    id: 4,
    period: "Presente",
    title: "HomeLab & Infraestructura",
    description: "Administración activa de servidores personales y automatización mediante Docker."
  }
];
