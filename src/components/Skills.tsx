"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { 
  Code, Layers, Database, Cpu, Wrench, BrainCircuit 
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: <Code size={24} className="text-emerald-400" />,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers size={24} className="text-emerald-400" />,
    skills: ["React.js", "Next.js", "Node.js", "Flask", "Spring Boot", "LangChain", "NumPy", "Pandas", "Matplotlib", "PyTorch"],
  },
  {
    title: "Databases",
    icon: <Database size={24} className="text-emerald-400" />,
    skills: ["MySQL"],
  },
  {
    title: "Core CS Concepts",
    icon: <Cpu size={24} className="text-emerald-400" />,
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "System Design", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={24} className="text-emerald-400" />,
    skills: ["Git", "GitHub", "Vercel", "VS Code", "LaTeX", "Markdown", "Canva"],
  },
  {
    title: "Generative AI",
    icon: <BrainCircuit size={24} className="text-emerald-400" />,
    skills: ["Agentic AI", "Large Language Models (LLMs)", "Machine Learning"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-emerald-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Technical Skills.</h2>
        <div className="h-1 w-12 bg-emerald-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-8 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/60 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.1)]"
          >
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none rounded-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-slate-950 border border-white/5 shadow-inner group-hover:border-emerald-500/30 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (idx * 0.1) + (sIdx * 0.05) }}
                    className="px-3.5 py-1.5 text-sm font-medium border border-white/10 rounded-xl text-slate-300 bg-slate-950/50 group-hover:border-emerald-500/20 group-hover:text-white transition-colors cursor-default"
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
