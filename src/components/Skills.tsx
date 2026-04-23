"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Node.js", "Flask", "Spring Boot", "NumPy", "Pandas", "Matplotlib", "PyTorch"],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
  {
    title: "Core CS Concepts",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "System Design", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "LaTeX", "Markdown", "Canva"],
  },
  {
    title: "Exploring",
    skills: ["Generative AI", "LLMs", "Machine Learning", "PyTorch"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Technical Skills.</h2>
        <div className="h-1 w-12 bg-slate-700 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="group relative p-6 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-slate-800/50 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
          >
            {/* Ambient Background Gradient for Hover */}
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white group-hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] transition-all duration-300" />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (idx * 0.1) + (sIdx * 0.05) }}
                    className="px-3 py-1.5 text-xs md:text-sm font-medium border border-white/5 rounded-lg text-slate-300 bg-black/40 backdrop-blur-md group-hover:border-white/10 group-hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
