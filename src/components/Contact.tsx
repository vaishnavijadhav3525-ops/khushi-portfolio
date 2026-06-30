import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { fadeIn } from "../utils/motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    
    // Simulate API Submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[5%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] bg-cyan-500/5 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          accent="08 // CONTACT ME"
          title="Get In Touch"
          subtitle="Feel free to drop a message for queries, collaboration discussions, or internship opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Card Column */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 text-left flex flex-col justify-between p-6 md:p-8 rounded-3xl glass border border-indigo-500/10 bg-[#0f0f1a]/60"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-slate-100 mb-2">
                Connect With Me
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                Let's build something intelligent. Reach out via email or follow me on my social handles.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Location
                    </h4>
                    <p className="text-sm font-semibold text-slate-200">
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Email
                    </h4>
                    <a
                      href="mailto:vaishnavi.jadhav@email.com"
                      className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors"
                    >
                      vaishnavi.jadhav@email.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-8 border-t border-indigo-500/10 mt-8">
              <h4 className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-4">
                Social Channels
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass border border-indigo-500/15 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass border border-indigo-500/15 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a
                  href="mailto:vaishnavi.jadhav@email.com"
                  className="w-10 h-10 rounded-xl glass border border-indigo-500/15 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass border border-indigo-500/15 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-3xl glass border border-indigo-500/15 bg-[#0f0f1a]/80 text-left flex flex-col justify-between h-full"
            >
              <div className="space-y-5">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono text-slate-400 tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="px-4 py-3 rounded-xl bg-slate-900/60 border border-indigo-500/10 focus:border-indigo-500 text-slate-100 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono text-slate-400 tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="px-4 py-3 rounded-xl bg-slate-900/60 border border-indigo-500/10 focus:border-indigo-500 text-slate-100 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-400 tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship Inquiry"
                    className="px-4 py-3 rounded-xl bg-slate-900/60 border border-indigo-500/10 focus:border-indigo-500 text-slate-100 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono text-slate-400 tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I would like to discuss..."
                    required
                    className="px-4 py-3 rounded-xl bg-slate-900/60 border border-indigo-500/10 focus:border-indigo-500 text-slate-100 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Status Message */}
              <div className="mt-4 min-h-[24px]">
                {status === "success" && (
                  <p className="text-xs font-mono text-emerald-400">
                    Message transmitted successfully! I will respond shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-xs font-mono text-rose-400">
                    Please fill out all required fields marked with *.
                  </p>
                )}
              </div>

              {/* Submit Trigger */}
              <div className="mt-4 flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === "sending"}
                  icon={status === "sending" ? <MessageSquare className="w-4 h-4 animate-bounce" /> : <Send className="w-4 h-4" />}
                >
                  {status === "sending" ? "Transmitting..." : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
