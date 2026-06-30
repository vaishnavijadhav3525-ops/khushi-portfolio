import React from "react";
import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "indigo" | "purple" | "cyan" | "green" | "orange";
  className?: string;
}

const variantClasses: Record<string, string> = {
  default: "bg-white/10 text-slate-300 border-white/10",
  indigo: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  purple: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  green: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  orange: "bg-orange-500/15 text-orange-300 border-orange-500/30",
};

const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className = "" }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        border backdrop-blur-sm transition-all duration-200
        ${variantClasses[variant]} ${className}
      `}
    >
      {children}
    </motion.span>
  );
};

export default Badge;
