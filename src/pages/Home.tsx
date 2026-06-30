import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import LearningJourney from "../components/LearningJourney";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CursorGlow from "../components/CursorGlow";
import ScrollToTop from "../components/ScrollToTop";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-slate-100 overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
      {/* Absolute Header Overlay Glow */}
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Stats />
        <Skills />
        <LearningJourney />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
