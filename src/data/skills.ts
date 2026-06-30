export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "Python", level: 80 },
      { name: "C", level: 70 },
      { name: "Java", level: 68 },
      { name: "TypeScript", level: 60 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 78 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "Wrench",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Git", level: 72 },
      { name: "GitHub", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "Node.js", level: 55 },
      { name: "npm", level: 65 },
    ],
  },
  {
    category: "Operating Systems",
    icon: "Monitor",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Windows", level: 90 },
      { name: "Linux", level: 60 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "Users",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Communication", level: 85 },
      { name: "Leadership", level: 75 },
      { name: "Problem Solving", level: 88 },
      { name: "Teamwork", level: 90 },
      { name: "Quick Learning", level: 92 },
      { name: "Critical Thinking", level: 82 },
    ],
  },
];
