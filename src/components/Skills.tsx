"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { 
  Code, Layers, Database, Cpu, Wrench, BrainCircuit 
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: <Code size={24} className="text-accent-indigo" />,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers size={24} className="text-accent-indigo" />,
    skills: ["React.js", "Next.js", "Node.js", "Flask", "Spring Boot", "LangChain", "NumPy", "Pandas", "PyTorch"],
  },
  {
    title: "Databases",
    icon: <Database size={24} className="text-accent-indigo" />,
    skills: ["MySQL"],
  },
  {
    title: "Core CS Concepts",
    icon: <Cpu size={24} className="text-accent-indigo" />,
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "System Design"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={24} className="text-accent-indigo" />,
    skills: ["Git", "GitHub", "Vercel", "VS Code", "LaTeX", "Markdown"],
  },
  {
    title: "Generative AI",
    icon: <BrainCircuit size={24} className="text-accent-indigo" />,
    skills: ["Agentic AI", "Large Language Models", "Machine Learning"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-accent-blue/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
      
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Technical Skills</h2>
        <div className="h-1 w-16 bg-accent-indigo rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="glass-panel glass-edge inner-glow group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent-indigo/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(94,92,230,0.15)]"
          >
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent-indigo/5 to-transparent pointer-events-none rounded-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] shadow-inner group-hover:border-accent-indigo/30 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent-indigo transition-colors">
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
                    transition={{ duration: 0.4, delay: (idx * 0.1) + (sIdx * 0.05), ease: "easeOut" }}
                    className="px-3.5 py-1.5 text-sm font-medium border border-white/10 rounded-full text-graphite-300 bg-white/[0.03] shadow-sm cursor-default"
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
