"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Concepts & Core",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "System Design", "OS"],
  },
  {
    title: "Frontend & UI",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Systems",
    skills: ["Spring Boot", "REST APIs", "Node.js", "Vercel", "Git/GitHub"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Capabilities.</h2>
        <div className="h-1 w-12 bg-neutral-700 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium border border-neutral-800 rounded-lg text-neutral-300 bg-neutral-900/20 backdrop-blur-sm hover:border-neutral-600 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
