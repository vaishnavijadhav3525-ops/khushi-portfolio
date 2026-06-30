import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { skillCategories } from "../data/skills";
import { Code2, Wrench, Monitor, Users, Sparkles } from "lucide-react";
import { fadeIn, staggerContainer } from "../utils/motion";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section-padding relative">
      {/* Background glow ambient effects */}
      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[70px]" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          accent="03 // SKILLS & ABILITIES"
          title="Technical & Core Skills"
          subtitle="A categorized map of programming languages, development toolkits, operating environments, and interpersonal competencies."
        />

        {/* Tab Buttons Container */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-display text-sm font-semibold transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                activeTab === idx
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 border-transparent text-white shadow-glow"
                  : "glass border-indigo-500/10 text-slate-400 hover:text-slate-200 hover:border-indigo-500/35"
              }`}
            >
              {iconMap[category.icon]}
              {category.category}
            </button>
          ))}
        </div>

        {/* Tab Content Cards Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillCategories[activeTab].skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", 0.05 * idx)}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl glass border-indigo-500/10 bg-[#0f0f1a]/60 text-left card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Title and Level Percentage */}
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-display font-semibold text-base text-slate-100 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                        {skill.name}
                      </h4>
                      <span className="font-mono text-xs text-indigo-300 font-semibold px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Description based on common tools */}
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {getSkillDescriptor(skill.name)}
                    </p>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full">
                    <div className="h-1.5 bg-slate-800 rounded-full w-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skillCategories[activeTab].color} shadow-glow`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Help generate matching descriptions for skills to make the portfolio look rich and fully functional
function getSkillDescriptor(skillName: string): string {
  const descriptions: Record<string, string> = {
    Python: "Writing automation modules, algorithmic calculations, data processing scripts, and training basic neural networks.",
    C: "Developing a strong foundation in pointers, structural logic, memory allocation, and hardware interfacing fundamentals.",
    Java: "Practicing Object-Oriented Design (OOP) principles, exception handling, data structures, and multithreaded classes.",
    TypeScript: "Implementing type-safe interfaces, application routing modules, components, and async promise models.",
    HTML: "Building semantically rich web layouts using modern structure declarations, layout guidelines, and SEO best practices.",
    CSS: "Styling responsive components, grids, flex-boxes, custom keyframe transitions, variables, and aesthetic themes.",
    Git: "Managing source version tracking histories, local branching workflows, and handling staging changes via command line.",
    GitHub: "Pushing code repositories, standardizing branch workflows, managing pull requests, issues, and profile wikis.",
    "VS Code": "Configuring customized workspaces, installing linters, debugger extensions, and standardizing formatting commands.",
    "Node.js": "Running javascript processes outside the browser environment, creating servers, and configuring packages.",
    npm: "Managing external project dependencies, locking package versions, and running execution scripts.",
    Windows: "Using command prompt shells, power configurations, folder directory systems, and local registry nodes.",
    Linux: "Navigating files via shell terminal prompts, piping input/output, editing permissions, and environment setup.",
    Communication: "Delivering structural technical reports, presenting project goals, and listening to team requirements.",
    Leadership: "Taking initiative during group workshops, planning system design phases, and helping peers resolve issues.",
    "Problem Solving": "Breaking down large issues into smaller test blocks and implementing step-wise algorithmic structures.",
    Teamwork: "Collaborating with teammates to design applications, share workloads, and resolve merger conflicts.",
    "Quick Learning": "Quickly analyzing documentation trees, scanning libraries, and constructing small proof-of-concepts.",
    "Critical Thinking": "Evaluating different algorithmic solutions to choose the most CPU and memory-efficient option.",
  };
  return descriptions[skillName] || "Understanding foundational logic, syntax models, implementation flows, and practical applications.";
}

export default Skills;
