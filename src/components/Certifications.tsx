import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { certifications } from "../data/certifications";
import { Shield, Code2, Coffee, Terminal, ExternalLink, Award } from "lucide-react";
import { fadeIn, staggerContainer } from "../utils/motion";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Coffee: <Coffee className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section-padding relative">
      {/* Background radial ambient shapes */}
      <div className="absolute top-[30%] right-[5%] w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-[30%] left-[5%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[90px]" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          accent="06 // CERTIFICATIONS"
          title="Verifications & Licences"
          subtitle="Documented evidence of specialized training courses completed in core languages and security foundations."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeIn("up", 0.1 * index)}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl glass border-indigo-500/10 bg-[#0f0f1a]/50 text-left flex gap-5 card-hover relative overflow-hidden group"
            >
              {/* Corner ambient shine */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300 rounded-bl-full`} />

              {/* Icon Capsule container */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 shadow-md flex items-center justify-center shrink-0 text-white shadow-glow/10`}>
                <div className="w-full h-full rounded-[10px] bg-[#0f0f1a]/90 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors duration-200">
                  {iconMap[cert.icon] || <Award className="w-6 h-6" />}
                </div>
              </div>

              {/* Text info block */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-white transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300 font-semibold uppercase">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 font-mono mb-3">
                    Issuer: {cert.issuer}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Verification Link */}
                <div className="pt-2 border-t border-indigo-500/5 mt-auto">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                  >
                    Verify Credential
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
