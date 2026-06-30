import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  accent?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, accent }) => {
  return (
    <div className="text-center mb-16">
      {accent && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 dark:text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3"
        >
          {accent}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl font-bold mb-4"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"
      />
    </div>
  );
};

export default SectionHeading;
