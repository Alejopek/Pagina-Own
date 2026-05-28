export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Core Stack",
    skills: ["Node.js", "TypeScript", "C++", "PHP", "SQL"]
  },
  {
    category: "Systems & DevOps",
    skills: ["Arch Linux", "Bash Scripting", "Docker", "Docker-Compose", "AUR Packaging"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Linux Terminal", "HomeLab"]
  }
];
