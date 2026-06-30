import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home as HomeIcon, AlertOctagon } from "lucide-react";
import Button from "../components/ui/Button";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-slate-100 p-6 relative overflow-hidden mesh-bg">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full glass border border-indigo-500/20 bg-[#0f0f1a]/85 p-8 rounded-3xl text-center shadow-glow shadow-indigo-500/5 relative z-10"
      >
        {/* Error icon header */}
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto mb-6 shadow-inner animate-bounce">
          <AlertOctagon className="w-8 h-8" />
        </div>

        <h1 className="font-display font-extrabold text-7xl tracking-tighter mb-4 text-white">
          <span className="gradient-text">404</span>
        </h1>

        <h2 className="font-display font-semibold text-lg uppercase tracking-wider text-slate-300 mb-2">
          OUT_OF_BOUNDS_ERROR
        </h2>

        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          The requested coordinate or neural module does not exist in the current portfolio map. 
          Please return to the primary system hub.
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link to="/">
            <Button
              variant="primary"
              size="md"
              icon={<HomeIcon className="w-4 h-4" />}
            >
              Return Home
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Embedded decorative system nodes */}
      <div className="absolute bottom-6 left-6 font-mono text-[9px] text-slate-600 uppercase tracking-widest pointer-events-none">
        System: Core_Map_V1.0
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[9px] text-slate-600 uppercase tracking-widest pointer-events-none">
        Location: Virtual_Domain
      </div>
    </div>
  );
};

export default NotFound;
