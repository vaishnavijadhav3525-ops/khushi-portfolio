import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { learningJourney } from "../data/learningJourney";
import { GraduationCap, BrainCircuit, Code2, FolderGit2, GitBranch, Trophy, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "../utils/motion";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  FolderGit2: <FolderGit2 className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Trophy: <Trophy className="w-5 h-5" />,
};

const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="section-padding relative">
      {/* Ambient background styling */}
      <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[90px]" />
      <div className="absolute bottom-[20%] right-[5%] w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          accent="04 // LEARNING JOURNEY"
          title="My Learning Pathway"
          subtitle="A structured mapping of my academic education, self-guided study fields, and technical habits as I progress towards becoming an AI professional."
        />

        {/* Timeline Roadmap */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative border-l-2 border-indigo-500/20 pl-6 md:pl-10 ml-2 md:ml-6 py-6 space-y-12"
        >
          {learningJourney.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeIn("up", 0.1 * index)}
              className="relative group text-left"
            >
              {/* Timeline Bullet Ring */}
              <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border-2 border-indigo-500/50 group-hover:border-indigo-400 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 text-indigo-400 group-hover:text-white transition-all duration-300 ring-4 ring-[#0a0a0f] shadow-inner">
                {iconMap[item.icon] || <Code2 className="w-4 h-4" />}
              </span>

              <div className="p-6 rounded-2xl glass border-indigo-500/10 bg-[#0f0f1a]/50 hover:bg-[#0f0f1a]/80 hover:border-indigo-500/30 transition-all duration-300 card-hover">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-slate-100 group-hover:text-white">
                      {item.title}
                    </h3>
                    <span className="inline-block text-xs font-mono font-semibold text-indigo-400 mt-0.5">
                      Learning Activity
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 font-medium">
                    {item.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills Acquired Badges */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-slate-500 mr-1 flex items-center gap-1">
                    Skills explored <ArrowRight className="w-3 h-3" />
                  </span>
                  {item.skillsAcquired.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300 hover:text-indigo-300 hover:border-indigo-500/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LearningJourney;
