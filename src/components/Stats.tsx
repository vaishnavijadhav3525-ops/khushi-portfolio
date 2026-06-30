import React from "react";
import { useCounter } from "../hooks/useCounter";
import { GraduationCap, Code2, Award, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

interface StatItemProps {
  endValue: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({ endValue, suffix, label, icon, color }) => {
  const { count, ref } = useCounter(endValue, 2000);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl glass border border-indigo-500/10 bg-[#0f0f1a]/70 flex items-center gap-5 text-left card-hover group"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} p-0.5 shadow-md flex items-center justify-center text-white shrink-0`}>
        <div className="w-full h-full rounded-[10px] bg-[#0f0f1a]/90 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors duration-200">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-display font-extrabold text-3xl text-slate-100 flex items-baseline">
          <span className="gradient-text">{count}</span>
          <span className="text-indigo-400 text-xl font-bold ml-0.5">{suffix}</span>
        </h3>
        <p className="text-xs text-slate-400 font-mono tracking-wider uppercase mt-1">
          {label}
        </p>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <StatItem
            endValue={2}
            suffix="+"
            label="Semesters Completed"
            icon={<GraduationCap className="w-6 h-6" />}
            color="from-indigo-500 to-purple-600"
          />
          <StatItem
            endValue={6}
            suffix="+"
            label="Programming Languages"
            icon={<Code2 className="w-6 h-6" />}
            color="from-purple-500 to-pink-600"
          />
          <StatItem
            endValue={4}
            suffix="+"
            label="Certifications Held"
            icon={<Award className="w-6 h-6" />}
            color="from-cyan-500 to-blue-600"
          />
          <StatItem
            endValue={6}
            suffix="+"
            label="Projects Created"
            icon={<FolderGit2 className="w-6 h-6" />}
            color="from-emerald-500 to-teal-600"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
