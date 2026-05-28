import { motion } from "framer-motion";
import { FlowingMenu, type MenuItemData } from "./FlowingMenu";
import { SectionHead } from "../ui/SectionHead";

export interface SkillsProps {
  id?: string;
}

const skillCategories: MenuItemData[] = [
  {
    link: "#",
    text: "Core Stack",
    items: [
      { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  },
  {
    link: "#",
    text: "Systems & DevOps",
    items: [
      { name: "Arch Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg" },
      { name: "Bash", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Compose", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AUR Packaging", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg" }
    ]
  },
  {
    link: "#",
    text: "Tools",
    items: [
      { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Terminal", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "HomeLab", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" }
    ]
  }
];

export function Skills({ id = "skills" }: SkillsProps) {
  return (
    <section
      id={id}
      aria-labelledby="skills-title"
      className="pt-0 pb-[clamp(60px,10vw,120px)] relative select-text"
    >
      {/* Title: bounded inside standard container */}
      <div className="w-full max-w-[1100px] mx-auto px-[clamp(20px,5vw,60px)] mb-6 md:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHead title="Skills" id="skills-title" className="mb-0" />
        </motion.div>
      </div>

      {/* Ribbons: occupy full width of screen */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full relative overflow-hidden"
      >
        <FlowingMenu
          items={skillCategories}
          speed={4}
          marqueeBgColor="#000000"
        />
      </motion.div>
    </section>
  );
}
