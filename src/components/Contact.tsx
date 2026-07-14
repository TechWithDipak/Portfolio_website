"use client";

import { motion } from "framer-motion";
import { LuMail as Mail, LuGithub as Github, LuLinkedin as Linkedin, LuArrowUpRight as ArrowUpRight } from "react-icons/lu";

export default function Contact() {
  return (
    <section id="contact" className="w-full relative py-32 mt-24 overflow-hidden border-t border-white/5">
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent-blue/20 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo to-accent-cyan">great</span>.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-lg md:text-xl text-graphite-400 mb-12 max-w-2xl font-light leading-relaxed"
        >
          I&apos;m currently looking for a Software Development Internship. Whether you have an opportunity or just want to say hi, my inbox is always open.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <a href="mailto:dipak.yadav04112@gmail.com" className="group">
            <button className="glass-panel glass-edge inner-glow relative inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-medium text-white transition-all duration-300 rounded-full hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(94,92,230,0.3)] hover:scale-105 active:scale-95">
              Say Hello
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-accent-indigo" size={20} />
            </button>
          </a>
        </motion.div>
        
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between w-full gap-6 text-sm text-graphite-500">
          <p>© {new Date().getFullYear()} Dipak Kumar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/TechWithDipak" target="_blank" rel="noreferrer" className="p-3 rounded-full glass-panel glass-edge hover:bg-white/5 hover:text-white transition-all duration-300">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/dipak-kumar-067b02354" target="_blank" rel="noreferrer" className="p-3 rounded-full glass-panel glass-edge hover:bg-white/5 hover:text-white transition-all duration-300">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:dipak.yadav04112@gmail.com" className="p-3 rounded-full glass-panel glass-edge hover:bg-white/5 hover:text-white transition-all duration-300">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
