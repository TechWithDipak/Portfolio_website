"use client";

import { motion } from "framer-motion";
import { LuMail as Mail, LuGithub as Github, LuLinkedin as Linkedin, LuArrowUpRight as ArrowUpRight } from "react-icons/lu";
import MagneticButton from "./ui/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="w-full relative py-32 mt-24 overflow-hidden border-t border-white/10">
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-slate-700/20 rounded-full blur-[120px] -z-10 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-3xl -z-10" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
        >
          Let&apos;s work together.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 mb-12 max-w-xl font-light"
        >
          I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="mailto:dipak.yadav04112@gmail.com">
            <MagneticButton className="bg-white text-black hover:bg-slate-200 border-transparent flex items-center gap-2 group px-8 py-4 text-base md:text-lg">
              Say Hello
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} suppressHydrationWarning />
            </MagneticButton>
          </a>
        </motion.div>
        
        <div className="mt-32 flex flex-col md:flex-row items-center justify-between w-full gap-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Dipak Kumar.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/TechWithDipak" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <Github size={16} suppressHydrationWarning /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/dipak-kumar-067b02354/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <Linkedin size={16} suppressHydrationWarning /> LinkedIn
            </a>
            <a href="mailto:dipak.yadav04112@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail size={16} suppressHydrationWarning /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
