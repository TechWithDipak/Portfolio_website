"use client";

import { motion, Variants } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import { Download, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Interactive Cursor Spotlight */}
      <motion.div
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20, mass: 0.5 }}
        className="absolute w-[800px] h-[800px] bg-accent-indigo/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"
      />

      {/* Static Background Orbs for Aurora Effect */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-accent-blue/10 rounded-full blur-[140px] -z-20 mix-blend-screen"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -right-1/4 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-accent-violet/10 rounded-full blur-[120px] -z-20 mix-blend-screen"
      />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl flex flex-col items-center mt-20"
      >
        {/* Glass Badge */}
        <motion.div variants={item} className="mb-8">
          <div className="glass-panel glass-edge inner-glow inline-flex items-center gap-2 px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            <span className="text-xs font-medium text-graphite-200 tracking-wide">
              Available for Internships
            </span>
          </div>
        </motion.div>
        
        <motion.h1 
          variants={item}
          className="mb-6 text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Dipak Kumar
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="mb-10 text-lg sm:text-2xl font-light leading-relaxed max-w-2xl mx-auto text-graphite-300"
        >
          Building <span className="text-white font-medium">Agentic AI</span> workflows and scalable <span className="text-white font-medium">Backend Systems</span> to solve complex engineering problems.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
          <a href="#projects">
            <MagneticButton className="glass-button text-white font-medium px-8 py-4 rounded-full group">
              <span className="flex items-center justify-center gap-2">
                View Work
                <ChevronRight size={16} className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </span>
            </MagneticButton>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="group">
            <MagneticButton className="bg-transparent text-graphite-300 hover:text-white transition-colors px-6 py-4">
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
