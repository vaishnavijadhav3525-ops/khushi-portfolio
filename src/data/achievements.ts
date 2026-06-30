export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  date: string;
}

// ⚠️ SAMPLE CONTENT — Replace before publishing
export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Top Performer in Coding Practice",
    description:
      "Consistently solved algorithmic challenges and maintained a high completion rate across various coding practice platforms.",
    icon: "Trophy",
    color: "from-yellow-400 to-orange-500",
    date: "2024",
  },
  {
    id: 2,
    title: "Multiple Programming Certifications",
    description:
      "Successfully completed certifications in Python, Java, C, and Cybersecurity, demonstrating dedication to continuous learning.",
    icon: "Award",
    color: "from-indigo-500 to-purple-600",
    date: "2024",
  },
  {
    id: 3,
    title: "Built Several Academic Projects",
    description:
      "Designed and developed multiple projects spanning web development, AI, and software engineering within the academic curriculum.",
    icon: "Rocket",
    color: "from-cyan-500 to-blue-600",
    date: "2024",
  },
  {
    id: 4,
    title: "Participated in Technical Workshops",
    description:
      "Actively attended and participated in technical workshops covering emerging technologies in AI, ML, and software development.",
    icon: "BookOpen",
    color: "from-emerald-500 to-teal-600",
    date: "2024",
  },
];
