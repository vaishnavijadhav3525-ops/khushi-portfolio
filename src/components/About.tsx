import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { Brain, Code2, Rocket, Library, Laptop, Heart } from "lucide-react";
import { fadeIn } from "../utils/motion";

const aboutCards = [
  {
    icon: <Brain className="w-6 h-6 text-indigo-400" />,
    title: "AI & ML Passion",
    description: "Deeply interested in model training, deep neural networks, computer vision, and machine learning architectures that turn raw inputs into predictions.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    title: "Problem Solving",
    description: "Developing robust algorithmic skills using Python and core programming languages to analyze computational constraints and structural logic.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    title: "Continuous Learning",
    description: "Always updating my toolbelt with modern frameworks, package ecosystems, and cloud technologies to keep pace with rapid innovations.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-emerald-400" />,
    title: "Software Dev",
    description: "Familiarizing myself with object-oriented paradigms, testing protocols, modular codebases, and clean architecture practices.",
  },
  {
    icon: <Library className="w-6 h-6 text-amber-400" />,
    title: "Web Development",
    description: "Designing responsive layout trees and high-performance interactive states using modern styling libraries like Tailwind and frameworks like React.",
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-400" />,
    title: "Practical Projects",
    description: "Committed to building production-ready demo projects to prove theoretical designs, ranging from local utilities to full-stack pipelines.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          accent="01 // ABOUT ME"
          title="Passion & Vision"
          subtitle="A dedicated learner merging the capabilities of Artificial Intelligence with responsive web architectures to solve tomorrow's challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Summary Text Column */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-5 text-left"
          >
            <h3 className="font-display font-semibold text-2xl mb-4 text-white">
              Who is <span className="gradient-text">Vaishnavi Jadhav</span>?
            </h3>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              I am currently pursuing a Diploma in Artificial Intelligence and Machine Learning at RITP. 
              My academic curriculum has provided me with a robust foundation in mathematical logic, 
              computer science theory, and software development practices.
            </p>

            <p className="text-slate-400 mb-6 leading-relaxed">
              I view coding as an art of solving puzzles. Whether configuring a multi-class neural 
              network, optimization scripts, or crafting interactive UI interfaces, my goal is always to 
              create structured, high-quality, and clean workflows that provide high usability.
            </p>

            <div className="p-4 rounded-2xl glass border-indigo-500/20 bg-indigo-500/5">
              <p className="font-mono text-xs text-indigo-300">
                <strong>Goal:</strong> To secure internships or junior engineering positions where I can 
                apply machine learning concepts, backend systems integration, and modern frontend 
                development.
              </p>
            </div>
          </motion.div>

          {/* Cards Grid Column */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {aboutCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl glass border-indigo-500/10 bg-[#0f0f1a]/50 text-left card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-4 shadow-inner">
                  {card.icon}
                </div>
                <h4 className="font-display font-semibold text-lg text-slate-100 mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
