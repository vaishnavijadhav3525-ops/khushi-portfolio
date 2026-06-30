import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { projects, type Project } from "../data/projects";
import ProjectModal from "./ProjectModal";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { ExternalLink, Cpu, Code2, ArrowRight } from "lucide-react";
import { staggerContainer } from "../utils/motion";

const categories = ["All", "AI / ML", "Web App"];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="section-padding relative">
      {/* Background radial overlays */}
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[90px]" />
      <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          accent="05 // PROJECTS"
          title="Featured Creations"
          subtitle="Explore some of the applications and algorithms I've built, separating production builds from educational demo prototypes."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl font-display text-sm font-semibold transition-all duration-300 border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 border-transparent text-white shadow-glow"
                  : "glass border-indigo-500/10 text-slate-400 hover:text-slate-200 hover:border-indigo-500/35"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Cards Container */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group p-5 rounded-3xl glass border border-indigo-500/10 bg-[#0f0f1a]/60 text-left flex flex-col justify-between card-hover relative overflow-hidden"
              >
                {/* Cyber Card Mockup Header */}
                <div className="relative h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 border border-indigo-500/5 flex items-center justify-center mb-5">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:12px_12px]" />
                  
                  {/* Cyber core representation */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-cyan-400 transition-colors duration-300 shadow-inner">
                      {project.category === "AI / ML" ? <Cpu className="w-6 h-6 animate-pulse" /> : <Code2 className="w-6 h-6" />}
                    </div>
                  </div>

                  {/* Absolute Top Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {project.isDemo ? (
                      <Badge variant="indigo" className="text-[9px] uppercase font-semibold">
                        Demo
                      </Badge>
                    ) : (
                      <Badge variant="green" className="text-[9px] uppercase font-semibold">
                        Core
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Info block */}
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4 min-h-[48px]">
                    {project.description}
                  </p>

                  {/* Tech stack row */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom link controls */}
                <div className="flex items-center justify-between border-t border-indigo-500/10 pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-xs font-mono font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 cursor-pointer"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      href={project.githubUrl}
                      icon={<svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>}
                      className="p-2 border border-slate-800 hover:border-indigo-500/30"
                      disabled={project.githubUrl === "#"}
                      aria-label="GitHub Repo"
                    >
                      {null}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      href={project.liveUrl}
                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                      className="p-2 border border-slate-800 hover:border-indigo-500/30"
                      disabled={project.liveUrl === "#"}
                      aria-label="Live Site"
                    >
                      {null}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Details Dialog overlay overlay */}
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
