"use client";

import { Section } from "./ui/Section";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { LuExternalLink as ExternalLink, LuGithub as Github } from "react-icons/lu";
import { useState, MouseEvent } from "react";

const PROJECTS = [
  {
    title: "Attendance Management System",
    description: "A robust backend system built in Java to streamline and manage attendance tracking efficiently.",
    tech: ["Java", "OOP", "DBMS"],
    github: "https://github.com/TechWithDipak/Attendance-management-system",
    live: null,
  },
  {
    title: "Quantum Computing Simulation",
    description: "An exploratory simulation of quantum computing concepts presented through a clean web interface.",
    tech: ["HTML", "CSS", "Vercel"],
    github: "https://github.com/TechWithDipak/Quantum-computing-stimulation",
    live: "https://quantum-computing-stimulation.vercel.app",
  },
  {
    title: "Maze Solver (Bidirectional Search)",
    description: "An algorithmic visualization tool demonstrating bidirectional search pathfinding in a generated maze.",
    tech: ["Algorithms", "HTML", "JS"],
    github: "https://github.com/TechWithDipak/Maze-solver-bidirectional-search-",
    live: "https://maze-solver-bidirectional-search.vercel.app",
  },
  {
    title: "Parking System",
    description: "A scalable parking management application built in Python, showcasing system design principles.",
    tech: ["Python", "Backend", "Vercel"],
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
      className="group relative flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
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
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <div className="flex gap-3 text-neutral-400">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-neutral-400 font-light mb-8 line-clamp-3">{project.description}</p>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-full">
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
        <div className="h-1 w-12 bg-neutral-700 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </Section>
  );
}
