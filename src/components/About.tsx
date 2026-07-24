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
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <Section id="about" className="flex flex-col md:flex-row gap-16 items-start justify-between py-24 md:py-32">
      <div className="w-full md:w-1/3">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">About</h2>
        <div className="h-1 w-16 bg-accent-indigo rounded-full" />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="w-full md:w-2/3 relative group"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-accent-indigo/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        <div className="glass-panel glass-edge inner-glow relative p-8 md:p-12 rounded-[32px] text-lg text-graphite-300 font-light leading-relaxed space-y-6">
          <motion.p variants={itemVariants}>
            I&apos;m a 3rd-year <span className="text-white font-medium">B.Tech Computer Science</span> student at SRMIST (CGPA 8.87/10) with hands-on experience building AI-powered backend systems, agentic workflows, and full-stack web applications.
          </motion.p>
          <motion.p variants={itemVariants}>
            Recently, I completed a Technology Internship at Omega Healthcare, where I built a <span className="text-white font-medium">multi-agent LLM system</span> for healthcare claims automation using LangChain and Python, significantly reducing manual review efforts.
          </motion.p>
          <motion.p variants={itemVariants}>
            I am currently seeking a Software Development Internship to apply my strengths in <span className="text-white font-medium border-b border-accent-indigo/50 pb-0.5">Data Structures & Algorithms, System Design, and Generative AI</span> to solve real-world engineering problems.
          </motion.p>
        </div>
      </motion.div>
    </Section>
  );
}
