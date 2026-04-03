"use client";

import { motion, Variants } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505] to-[#050505]" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl"
      >
        <motion.div variants={item} className="mb-6 text-sm md:text-base text-neutral-400 font-medium tracking-widest uppercase">
          Hello World, I&apos;m
        </motion.div>
        
        <motion.h1 
          variants={item}
          className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Dipak Kumar
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="mb-12 text-lg text-neutral-400 sm:text-xl font-light leading-relaxed max-w-2xl mx-auto"
        >
          Software Developer specializing in <span className="text-white font-medium">Java</span> & <span className="text-white font-medium">Python</span> backend systems, exploring <span className="text-white font-medium">AI</span> and system design.
        </motion.p>
        
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects">
            <MagneticButton className="bg-white text-black hover:bg-neutral-200 border-transparent">
              View Projects
            </MagneticButton>
          </a>
          <a href="#contact">
            <MagneticButton className="bg-transparent text-white border-neutral-800 hover:border-neutral-500 hover:bg-neutral-900/50">
              Contact Me
            </MagneticButton>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
