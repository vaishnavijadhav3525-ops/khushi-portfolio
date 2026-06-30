import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { GraduationCap, Calendar, Percent, BookOpen } from "lucide-react";
import { fadeIn } from "../utils/motion";

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding relative">
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[5%] w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-[70px]" />
      
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          accent="02 // EDUCATION"
          title="Academic History"
          subtitle="A detailed outline of my academic progress and structured curriculum at RITP."
        />

        <div className="relative border-l-2 border-indigo-500/20 pl-8 md:pl-12 ml-4 md:ml-8 py-4">
          
          {/* Main Institution Card */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mb-12"
          >
            {/* Timeline Dot Indicator */}
            <span className="absolute -left-[45px] md:-left-[61px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 ring-4 ring-[#0a0a0f] text-white shadow-glow">
              <GraduationCap className="w-4 h-4" />
            </span>

            <div className="p-6 md:p-8 rounded-2xl glass border-indigo-500/20 bg-[#0f0f1a]/80 text-left card-hover">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display font-bold text-2xl text-slate-100">
                    RITP
                  </h3>
                  <p className="text-indigo-400 font-mono text-sm tracking-wide mt-1">
                    Diploma in Artificial Intelligence and Machine Learning
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  2023 - Present
                </div>
              </div>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                Enrolled in the intensive AIML Diploma program, studying basic computer hardware structures,
                programming algorithms, and mathematical modeling. Gaining hands-on experience in training 
                traditional classifier networks, structured query databases, and system analysis.
              </p>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Semester 1 */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                    <Percent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Semester 1
                    </h4>
                    <p className="text-lg font-bold text-slate-200">
                      78.00%
                    </p>
                  </div>
                </div>

                {/* Semester 2 */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400">
                    <Percent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Semester 2
                    </h4>
                    <p className="text-lg font-bold text-slate-200">
                      76.34%
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Curriculum Summary Details */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Dot Indicator */}
            <span className="absolute -left-[45px] md:-left-[61px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 border-2 border-indigo-500/40 ring-4 ring-[#0a0a0f] text-indigo-400">
              <BookOpen className="w-4 h-4" />
            </span>

            <div className="p-6 rounded-2xl glass border-indigo-500/10 bg-[#0f0f1a]/40 text-left">
              <h4 className="font-display font-semibold text-lg text-slate-200 mb-2">
                Core Academic Subjects Covered
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                A review of foundational domains completed across primary coursework modules:
              </p>
              
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Basic Mathematics for ML",
                  "Programming in Python & C",
                  "Object Oriented Concepts",
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                  "Linux System Operations",
                ].map((subject, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 font-mono"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
