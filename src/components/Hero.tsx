"use client";

import { motion, Variants } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import { Download } from "lucide-react";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center overflow-hidden pt-20">
      {/* Background Floating Orbs - Dark Theme with Emerald/Cyan Accent */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-emerald-900/30 rounded-full blur-[120px] -z-10 mix-blend-screen"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-20 w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-cyan-900/20 rounded-full blur-[100px] -z-10 mix-blend-screen"
      />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl"
      >
        <motion.div variants={item} className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-emerald-500/50" />
          <span className="text-sm md:text-base text-emerald-400 font-medium tracking-widest uppercase">
            Hello, I&apos;m
          </span>
          <span className="h-px w-8 bg-emerald-500/50" />
        </motion.div>
        
        <motion.h1 
          variants={item}
          className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Dipak Kumar
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="mb-10 text-lg text-slate-400 sm:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
        >
          Building <span className="text-white font-medium">Agentic AI</span> workflows and scalable <span className="text-white font-medium">Backend Systems</span> to solve real-world problems.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects">
            <MagneticButton className="bg-white text-slate-950 hover:bg-slate-200 border-transparent font-medium px-8 py-3.5">
              View Work
            </MagneticButton>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <MagneticButton className="bg-transparent text-white border-white/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 px-8 py-3.5 group">
              <span className="flex items-center justify-center gap-2">
                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </span>
            </MagneticButton>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
