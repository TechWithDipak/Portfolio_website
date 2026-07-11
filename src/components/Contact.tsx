"use client";

import { motion } from "framer-motion";
import { LuMail as Mail, LuGithub as Github, LuLinkedin as Linkedin, LuArrowUpRight as ArrowUpRight } from "react-icons/lu";

export default function Contact() {
  return (
    <section id="contact" className="w-full relative py-32 mt-24 overflow-hidden border-t border-white/5">
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-emerald-900/30 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"
      />
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">great</span>.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 mb-12 max-w-xl font-light"
        >
          I&apos;m currently looking for a Software Development Internship. Whether you have an opportunity or just want to say hi, my inbox is always open!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="mailto:dipak.yadav04112@gmail.com" className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button className="relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-slate-950 transition-all duration-200 bg-white border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:bg-slate-100">
              Say Hello
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
            </button>
          </a>
        </motion.div>
        
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between w-full gap-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Dipak Kumar.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/TechWithDipak" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-900 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-800 hover:text-emerald-400 transition-all duration-300">
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/dipak-kumar-067b02354" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-900 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-800 hover:text-emerald-400 transition-all duration-300">
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:dipak.yadav04112@gmail.com" className="p-2.5 rounded-full bg-slate-900 border border-white/5 hover:border-emerald-500/30 hover:bg-slate-800 hover:text-emerald-400 transition-all duration-300">
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
