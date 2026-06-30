export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  description: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Cybersecurity Fundamentals",
    issuer: "Online Learning Platform",
    date: "2024",
    icon: "Shield",
    color: "from-red-500 to-orange-500",
    description:
      "Comprehensive course covering network security, threat detection, encryption, and ethical hacking fundamentals.",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Python Programming",
    issuer: "Online Learning Platform",
    date: "2024",
    icon: "Code2",
    color: "from-blue-500 to-cyan-500",
    description:
      "In-depth Python programming certification covering data structures, OOP, file handling, and libraries.",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Java Programming",
    issuer: "Online Learning Platform",
    date: "2024",
    icon: "Coffee",
    color: "from-orange-500 to-amber-500",
    description:
      "Core Java programming concepts including OOP, exception handling, collections, and multi-threading.",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "C Programming",
    issuer: "Online Learning Platform",
    date: "2023",
    icon: "Terminal",
    color: "from-purple-500 to-indigo-500",
    description:
      "Foundational C programming covering pointers, memory management, data structures, and algorithms.",
    credentialUrl: "#",
  },
];
