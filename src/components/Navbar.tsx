import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const scrollProgress = useScrollProgress();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 shadow-glow"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/80 dark:bg-[#0a0a0f]/80 light:bg-white/80 backdrop-blur-md py-4 border-b border-indigo-500/10 shadow-lg"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-2 group font-display font-bold text-xl uppercase tracking-wider text-white dark:text-white light:text-slate-900 cursor-pointer"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-glow transition-transform duration-300 group-hover:rotate-12">
              VJ
            </span>
            <span className="relative overflow-hidden block">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                Vaishnavi
              </span>
              <span className="absolute top-0 left-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-indigo-400">
                Jadhav
              </span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-medium text-slate-300 hover:text-indigo-400 dark:text-slate-300 dark:hover:text-indigo-400 light:text-slate-600 light:hover:text-indigo-600 transition-colors duration-200 text-sm relative group py-2"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-4 pl-4 border-l border-indigo-500/10">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl glass border-indigo-500/10 hover:border-indigo-500/40 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-indigo-400 transition-all duration-300 cursor-pointer"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="hidden xl:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20 text-indigo-300 dark:text-indigo-300 light:text-indigo-600 font-semibold text-sm hover:border-indigo-500 hover:shadow-glow hover:text-white transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Hamburguer & Theme Buttons */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass border-indigo-500/10 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-indigo-400 transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl glass border-indigo-500/10 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-indigo-400 transition-all duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden w-full glass border-b border-indigo-500/10 overflow-hidden bg-[#0a0a0f]/95"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="block font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-200 text-base py-2 border-b border-slate-800/50"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-white shadow-glow"
                >
                  <Sparkles className="w-4 h-4" />
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
