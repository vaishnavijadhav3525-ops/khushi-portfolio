import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { achievements } from "../data/achievements";
import { Trophy, Award, Rocket, BookOpen, AlertTriangle } from "lucide-react";
import { fadeIn, staggerContainer } from "../utils/motion";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6 text-amber-400 animate-pulse" />,
  Award: <Award className="w-6 h-6 text-indigo-400" />,
  Rocket: <Rocket className="w-6 h-6 text-cyan-400" />,
  BookOpen: <BookOpen className="w-6 h-6 text-emerald-400" />,
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-padding relative">
      {/* Background shape */}
      <div className="absolute top-[20%] left-[5%] w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          accent="07 // ACHIEVEMENTS"
          title="Milestones & Activities"
          subtitle="A catalog of notable accomplishments, certifications completed, and workshops attended during my academic studies."
        />

        {/* Notice Badge */}
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border-amber-500/20 bg-amber-500/5 text-amber-300 text-xs font-mono w-fit mx-auto mb-10 shadow-sm animate-pulse">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>Sample Content – Replace Before Publishing</span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeIn("up", 0.08 * index)}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl glass border-indigo-500/10 bg-[#0f0f1a]/60 text-left flex flex-col justify-between card-hover group"
            >
              <div>
                {/* Header icon and date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/55 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {iconMap[item.icon] || <Award className="w-6 h-6" />}
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 font-semibold px-2 py-0.5 rounded bg-slate-800/50 border border-slate-800">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Decorative category label */}
              <div className="pt-3 border-t border-indigo-500/5 mt-auto">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">
                  ACHIEVED // MAPPED
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
