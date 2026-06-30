import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // delay fadeout a bit
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0f]"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative flex flex-col items-center z-10">
        {/* Animated Cyber Core Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-24 h-24 mb-8 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-spin-slow" />
          <div className="absolute inset-2 rounded-full border-t border-b border-cyan-500/50 animate-spin" style={{ animationDirection: "reverse" }} />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-glow flex items-center justify-center text-white font-mono text-lg font-bold"
          >
            VJ
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display font-semibold text-xl tracking-wider text-slate-100 uppercase"
        >
          Initializing Portfolio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4 }}
          className="font-mono text-xs text-indigo-400 mt-2 tracking-widest"
        >
          CONNECTING TO CORE_SYSTEM... {Math.round(progress)}%
        </motion.p>

        {/* Loading Progress Bar Container */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full mt-6 overflow-hidden border border-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 shadow-glow"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
