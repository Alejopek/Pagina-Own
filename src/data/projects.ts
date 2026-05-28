export interface Project {
  id: number;
  title: string;
  desc: string;
  stack: string[];
  image: string;
  links: {
    demo?: string;
    demoLabel?: string;
    code?: string;
    liveLabel?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "System Monitoring Dashboard",
    desc: "Herramienta de monitoreo en Node.js publicada en el AUR bajo estándares de la comunidad Arch. Recolección de métricas en tiempo real.",
    stack: ["Node.js", "Arch Linux", "Bash"],
    image: "/assets/projects/sys-dashboard.png",
    links: {
      demo: "https://aur.archlinux.org/packages/sys-dashboard",
      demoLabel: "AUR",
      code: "https://github.com/Alejopek/Sys-Dashboard-"
    }
  },
  {
    id: 2,
    title: "Infraestructura HomeLab",
    desc: "Servidor doméstico basado en Debian con servicios autohospedados en Docker, túneles seguros y gestión de redes privadas.",
    stack: ["Docker", "Debian", "Networking"],
    image: "/assets/projects/homelab.png",
    links: {
      liveLabel: "⚙️ Live Server"
    }
  },
  {
    id: 3,
    title: "Gestión de Rotisería",
    desc: "Aplicación web para gestión de pedidos desarrollada en equipo, enfocada en lógica de persistencia y UI colaborativa.",
    stack: ["JavaScript", "HTML/CSS", "Persistence"],
    image: "/assets/projects/rotiseria_app.png",
    links: {
      demo: "https://alejopek.github.io/Projecto-Grupal-TP-Estatica/",
      demoLabel: "Demo",
      code: "https://github.com/Alejopek/Projecto-Grupal-TP-Estatica"
    }
  },
  {
    id: 4,
    title: "Pac-Man RL Agent",
    desc: "Implementación de un agente de aprendizaje por refuerzo profundo (Deep Q-Learning) que aprende a jugar al Pac-Man directamente en el navegador.",
    stack: ["TensorFlow.js", "Reinforcement Learning", "JavaScript"],
    image: "/assets/projects/pacman_ia.png",
    links: {
      demo: "https://pacman-ia-dqn.vercel.app/",
      demoLabel: "Demo",
      code: "https://github.com/Alejopek/Pacman-IA-DQN"
    }
  }
];
