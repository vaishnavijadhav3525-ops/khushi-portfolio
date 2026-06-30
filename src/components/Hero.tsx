import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye, Sparkles, Brain, Cpu, Database, Network } from "lucide-react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import Button from "./ui/Button";
import { fadeIn, zoomIn } from "../utils/motion";

const Hero: React.FC = () => {
  const typingText = useTypingEffect(
    [
      "AI & Machine Learning Student",
      "Python Developer",
      "Technology Innovator",
      "Problem Solver",
    ],
    70,
    2000
  );

  const [particles, setParticles] = useState<Array<{ id: number; top: number; left: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate background floating particles
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden mesh-bg"
    >
      {/* Floating Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-indigo-500/20 backdrop-blur-sm pointer-events-none particle animate-float"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${Math.random() * 4 + 4}s`,
          }}
        />
      ))}

      {/* Futuristic Background Blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Intro Text */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 text-left flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-widest uppercase mb-6 w-fit">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            System Status: Active
          </div>

          <h3 className="font-display font-medium text-slate-400 text-lg md:text-xl mb-3">
            Hi, I'm
          </h3>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight mb-4 text-white">
            <span className="gradient-text-animated block">Vaishnavi Jadhav</span>
          </h1>

          <div className="h-8 mb-6 flex items-center">
            <span className="font-mono text-indigo-400 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
              {typingText}
            </span>
            <span className="typing-cursor" />
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            AI & Machine Learning Student passionate about designing architectures, 
            solving algorithms, and engineering intelligence. Building digital paths 
            from data models to predictive user interfaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              onClick={() => {
                const target = document.querySelector("#projects");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              icon={<Eye className="w-4 h-4" />}
            >
              View Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="#contact"
              onClick={() => {
                const target = document.querySelector("#contact");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Hire Me
            </Button>

            <Button
              variant="ghost"
              size="lg"
              href="#"
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume
            </Button>
          </div>
        </motion.div>

        {/* AI Graphic Container / Simulated Avatar */}
        <motion.div
          variants={zoomIn(0.4)}
          initial="hidden"
          animate="show"
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Outer spinning border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/20 animate-spin-slow" />
            
            {/* Ring 2 spinning opposite */}
            <div className="absolute inset-4 rounded-full border border-double border-cyan-500/30 animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />
            
            {/* Inner Glowing Profile Glass */}
            <div className="absolute inset-8 rounded-[2rem] glass border-indigo-500/30 flex items-center justify-center overflow-hidden shadow-glow shadow-indigo-500/10">
              
              {/* Background Network Pattern */}
              <div className="absolute inset-0 opacity-15 flex flex-col justify-around p-8 pointer-events-none">
                <Network className="w-full h-full text-indigo-400" />
              </div>

              {/* Central Glowing Orb representing the AI Core */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 0.95, 1.08, 1],
                  rotate: [0, 90, 180, 270, 360],
                  borderRadius: ["40%", "45%", "35%", "45%", "40%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-44 h-44 sm:w-56 sm:h-56 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 opacity-80 flex items-center justify-center shadow-glow-lg text-white"
              >
                {/* Embedded Icons inside AI core */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Brain className="w-16 h-16 sm:w-20 sm:h-20 animate-pulse text-white absolute" />
                  <Cpu className="w-6 h-6 text-cyan-200 absolute top-6 left-6 animate-bounce" />
                  <Database className="w-6 h-6 text-purple-200 absolute bottom-6 right-6 animate-bounce" style={{ animationDelay: "1s" }} />
                </div>
              </motion.div>

              {/* Tech Badges floating around core */}
              <div className="absolute top-4 left-4 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-mono text-[10px]">
                NEURAL_NET_V1
              </div>
              <div className="absolute bottom-4 right-4 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-md font-mono text-[10px]">
                MODEL_ACTIVE
              </div>
            </div>

            {/* Micro details floating */}
            <div className="absolute -top-2 right-12 w-3 h-3 bg-indigo-500 rounded-full animate-ping" />
            <div className="absolute bottom-10 -left-2 w-4 h-4 bg-cyan-500 rounded-full animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
