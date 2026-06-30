export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
  isDemo: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Chatbot",
    description: "An intelligent conversational AI chatbot powered by natural language processing.",
    longDescription:
      "A demo project showcasing an AI-powered chatbot that understands context, handles multi-turn conversations, and provides intelligent responses using NLP techniques.",
    technologies: ["Python", "TensorFlow", "Flask", "HTML", "CSS"],
    image: "chatbot",
    githubUrl: "#",
    liveUrl: "#",
    category: "AI / ML",
    isDemo: true,
  },
  {
    id: 2,
    title: "Student Management System",
    description: "A full-stack web application to manage student records and academic data.",
    longDescription:
      "A demo CRUD application for managing student information, grades, attendance, and reports with a clean dashboard interface.",
    technologies: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "student",
    githubUrl: "#",
    liveUrl: "#",
    category: "Web App",
    isDemo: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "This very portfolio website — built with React, TypeScript, and Tailwind CSS.",
    longDescription:
      "A premium, animated personal portfolio showcasing skills, projects, certifications, and educational journey with dark/light mode support.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "portfolio",
    githubUrl: "#",
    liveUrl: "#",
    category: "Web App",
    isDemo: false,
  },
  {
    id: 4,
    title: "Weather App",
    description: "A real-time weather application with location-based forecasts and beautiful UI.",
    longDescription:
      "A demo weather application that fetches live weather data, displays 5-day forecasts, and provides insights on temperature, humidity, and wind speed.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    image: "weather",
    githubUrl: "#",
    liveUrl: "#",
    category: "Web App",
    isDemo: true,
  },
  {
    id: 5,
    title: "Task Manager",
    description: "A productivity task manager with categories, priorities, and due dates.",
    longDescription:
      "A demo task management app with drag-and-drop functionality, priority levels, category filtering, and local storage persistence.",
    technologies: ["TypeScript", "React", "CSS"],
    image: "task",
    githubUrl: "#",
    liveUrl: "#",
    category: "Web App",
    isDemo: true,
  },
  {
    id: 6,
    title: "Face Detection System",
    description: "A real-time face detection system using computer vision and deep learning.",
    longDescription:
      "A demo computer vision project that uses OpenCV and a pre-trained deep learning model to detect and recognize faces in real-time video streams.",
    technologies: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    image: "face",
    githubUrl: "#",
    liveUrl: "#",
    category: "AI / ML",
    isDemo: true,
  },
];
