"use client";

import { Section } from "./ui/Section";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { LuExternalLink as ExternalLink, LuGithub as Github } from "react-icons/lu";
import { useState, MouseEvent } from "react";

const PROJECTS = [
  {
    title: "AI-Powered Insurance Platform for India's Gig Economy",
    description: [
      "Designed and developed a full-stack web platform addressing insurance accessibility challenges for India's 50+ million gig workers.",
      "Integrated AI-driven risk assessment models to generate personalized, dynamic insurance plans based on income volatility and work type.",
      "Implemented a clean, responsive user interface allowing gig workers to onboard, select coverage tiers, and manage claims digitally.",
      "Addressed a real-world gap in India's social security infrastructure through technology-first design thinking."
    ],
    tech: ["HTML", "CSS", "JavaScript", "AI/ML"],
    year: "2025",
    github: null,
    live: null,
  },
  {
    title: "Attendance Management System",
    description: [
      "Built a robust backend system in Java to automate and streamline attendance tracking for academic or enterprise environments.",
      "Applied core OOP principles (encapsulation, inheritance, polymorphism) for a modular and maintainable codebase.",
      "Integrated database management (DBMS) for persistent storage and efficient querying of attendance records."
    ],
    tech: ["Java", "OOP", "DBMS"],
    year: "2024",
    github: "https://github.com/TechWithDipak/Attendance-management-system",
    live: null,
  },
  {
    title: "Maze Solver - Bidirectional Search Visualizer",
    description: [
      "Developed an interactive algorithmic visualization tool that demonstrates bidirectional search pathfinding in a dynamically generated maze.",
      "Implemented bidirectional BFS to showcase significant time complexity improvement over standard BFS, reducing average search space by up to 50%.",
      "Designed for educational use, helping visualize graph traversal concepts in real time through a browser-based UI."
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
    github: "https://github.com/TechWithDipak/Maze-solver-bidirectional-search-",
    live: "https://maze-solver-bidirectional-search.vercel.app",
  },
  {
    title: "Parking Management System",
    description: [
      "Built a scalable parking management application in Python demonstrating system design principles including slot allocation, entry/exit logging, and fee computation.",
      "Deployed on Vercel with a clean interface for real-time parking space tracking and management."
    ],
    tech: ["Python", "Backend", "Vercel"],
    year: "2024",
    github: "https://github.com/TechWithDipak/Parking-system",
    live: "https://parking-system-alpha-seven.vercel.app",
  }
];

function ProjectCard({ project, idx }: { project: typeof PROJECTS[0], idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-2xl p-8 overflow-hidden hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2"
    >
      <motion.div
        suppressHydrationWarning
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen"
        style={{
          backgroundImage: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">
            {project.title} <span className="text-sm font-normal text-slate-500 ml-2">{project.year}</span>
          </h3>
          <div className="flex gap-3 text-slate-400">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Github size={20} suppressHydrationWarning />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <ExternalLink size={20} suppressHydrationWarning />
              </a>
            )}
          </div>
        </div>
        <ul className="list-disc pl-5 text-slate-400 font-light mb-8 space-y-2 text-sm leading-relaxed">
          {project.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="py-24 md:py-40">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Selected Projects.</h2>
        <div className="h-1 w-12 bg-slate-700 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </Section>
  );
}
