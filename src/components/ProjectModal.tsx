import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2, Cpu, Sparkles } from "lucide-react";
import type { Project } from "../data/projects";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a0a0f]/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-3xl glass border border-indigo-500/20 bg-[#0f0f1a] rounded-3xl overflow-hidden shadow-glow shadow-indigo-500/10 z-10 text-left flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/50 text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content wrapper */}
            <div className="overflow-y-auto p-6 md:p-8 flex-1">
              
              {/* Cover Cyber Graphic mockup */}
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-950 to-indigo-950 border border-indigo-500/10 flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Tech icon floating in center */}
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-glow mb-3">
                    {project.category === "AI / ML" ? <Cpu className="w-8 h-8 animate-pulse" /> : <Code2 className="w-8 h-8" />}
                  </div>
                  <span className="font-mono text-[10px] text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/20">
                    {project.category.toUpperCase()} // MODULE
                  </span>
                </div>
              </div>

              {/* Title Header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-100">
                  {project.title}
                </h3>
                {project.isDemo ? (
                  <Badge variant="indigo" className="text-[10px] tracking-wider uppercase font-semibold">
                    Demo Project
                  </Badge>
                ) : (
                  <Badge variant="green" className="text-[10px] tracking-wider uppercase font-semibold">
                    Production
                  </Badge>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                {project.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="font-display font-semibold text-sm text-slate-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links Actions */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-indigo-500/15">
                <Button
                  variant="primary"
                  size="md"
                  href={project.liveUrl}
                  icon={<ExternalLink className="w-4 h-4" />}
                  disabled={project.liveUrl === "#"}
                >
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={project.githubUrl}
                  icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>}
                  disabled={project.githubUrl === "#"}
                >
                  View Code
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
