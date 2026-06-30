export interface LearningJourneyItem {
  id: number;
  title: string;
  duration: string;
  description: string;
  skillsAcquired: string[];
  icon: string;
}

export const learningJourney: LearningJourneyItem[] = [
  {
    id: 1,
    title: "Diploma in AI & Machine Learning",
    duration: "2023 - Present",
    description: "Pursuing my formal education in Artificial Intelligence and Machine Learning at RITP. Focusing heavily on algorithms, data structures, mathematics for AI, and hands-on laboratory experiments.",
    skillsAcquired: ["Python", "C", "Data Structures", "AI Fundamentals", "Mathematics"],
    icon: "GraduationCap"
  },
  {
    id: 2,
    title: "Self-Learning AI & Machine Learning",
    duration: "Ongoing",
    description: "Deepening my knowledge of machine learning concepts, neural networks, computer vision, and NLP through online courses, documentation, research papers, and self-guided implementations.",
    skillsAcquired: ["Machine Learning", "Deep Learning", "TensorFlow / Keras", "OpenCV", "NLP"],
    icon: "BrainCircuit"
  },
  {
    id: 3,
    title: "Programming Practice & Problem Solving",
    duration: "Daily habit",
    description: "Cultivating problem-solving skills by solving coding challenges on platforms like LeetCode, HackerRank, and GeeksforGeeks. Practicing OOP design principles in Java and C++.",
    skillsAcquired: ["Java Programming", "C Programming", "Algorithms", "Competitive Programming"],
    icon: "Code2"
  },
  {
    id: 4,
    title: "Personal Projects Development",
    duration: "Ongoing",
    description: "Designing and building applications from scratch to bridge the gap between theory and practice. Projects include AI chatbots, full-stack student portals, computer vision setups, and responsive web pages.",
    skillsAcquired: ["React", "Vite", "Tailwind CSS", "Flask / FastAPI", "SQL / NoSQL Database"],
    icon: "FolderGit2"
  },
  {
    id: 5,
    title: "Open Source Contribution & Git Learning",
    duration: "2024 - Present",
    description: "Familiarizing myself with collaborative software engineering workflows. Learning advanced Git techniques, branching, rebasing, pull requests, and contributing to open projects and codebases.",
    skillsAcquired: ["Git & GitHub", "Collaboration", "Code Reviews", "Documentation"],
    icon: "GitBranch"
  },
  {
    id: 6,
    title: "Hackathon Preparation & Tech Workshops",
    duration: "Recent Activities",
    description: "Actively participating in technical workshops, webinars, and preparing for collegiate and national hackathons to build collaborative, fast-paced solution prototypes under time constraints.",
    skillsAcquired: ["Rapid Prototyping", "Team Collaboration", "Pitching Ideas", "System Architecture"],
    icon: "Trophy"
  }
];
