"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <Section id="about" className="flex flex-col md:flex-row gap-12 items-start justify-between py-24 md:py-32">
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">About me.</h2>
        <div className="h-1 w-12 bg-slate-700 rounded-full" />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="w-full md:w-2/3 relative group"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative p-8 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-2xl text-lg text-slate-400 font-light leading-relaxed space-y-6 shadow-2xl">
          <motion.p variants={itemVariants}>
            Motivated 2nd-year <span className="text-white font-medium">B.Tech Computer Science</span> student at SRMIST with a strong foundation in <span className="text-white font-medium">Java, Python, and full-stack web development</span>.
          </motion.p>
          <motion.p variants={itemVariants}>
            Demonstrated ability to build scalable backend systems, algorithmic tools, and AI-powered applications. Actively seeking a software development internship to apply skills in real-world engineering environments.
          </motion.p>
          <motion.p variants={itemVariants}>
            Passionate about <span className="text-white font-medium">Data Structures &amp; Algorithms, OOP, system design, and Generative AI</span>.
          </motion.p>
        </div>
      </motion.div>
    </Section>
  );
}
