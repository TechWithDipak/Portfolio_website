"use client";

import { Section } from "./ui/Section";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { LuExternalLink as ExternalLink, LuGithub as Github, LuFolder as Folder, LuPuzzle as Puzzle } from "react-icons/lu";
import { useState, MouseEvent } from "react";
import clsx from "clsx";

const FEATURED_PROJECTS = [
  {
    title: "Claims Denial & Appeals Engine",
    description: [
      "Independently built a sequential LangChain multi-agent pipeline that analyzes {X} denied insurance claims from sample Excel data across {Y} pipeline stages and recommends targeted remediation actions.",
      "Integrated Google Gemini to auto-generate print-ready PDF appeal letters, cutting manual drafting time from {X min} to under {Y min} per appeal."
    ],
    tech: ["Python", "LangChain", "Gemini"],
    year: "2026",
    github: "#",
    live: null,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "DropSure – AI Parametric Insurance",
    description: [
      "Built the Node.js backend engine and 3 third-party API integrations (weather, traffic, payments) for a 5-member hackathon team's parametric insurance PWA serving Q-commerce delivery riders.",
      "Implemented rule-based payout logic auto-triggering claim-free payouts within 5 minutes when live thresholds are breached, with dynamic weekly premiums recalculated from 7-day risk forecasts."
    ],
    tech: ["Node.js", "Python", "REST APIs"],
    year: "2026",
    github: "#",
    live: null,
    colSpan: "col-span-1",
  },
  {
    title: "OCR Scanner",
    description: [
      "Built a cross-platform desktop OCR app supporting 4 image formats (PNG, JPG, JPEG, WEBP) with a drag-and-drop interface.",
      "Implemented asynchronous background threading so the 15–20MB OCR model loads and processes images without freezing the UI."
    ],
    tech: ["Python", "PySide6", "EasyOCR"],
    year: "2024",
    github: "#",
    live: null,
    colSpan: "col-span-1",
  }
];

const OTHER_PROJECTS = [
  {
    title: "Attendance Management System",
    description: "Built a robust backend system in Java to automate and streamline attendance tracking applying core OOP principles.",
    tech: ["Java", "OOP", "DBMS"],
    github: "https://github.com/TechWithDipak/Attendance-management-system",
    live: null,
  },
  {
    title: "Maze Solver - Bidirectional Search",
    description: "Interactive algorithmic visualization tool demonstrating bidirectional search pathfinding in a dynamically generated maze.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/TechWithDipak/Maze-solver-bidirectional-search-",
    live: "https://maze-solver-bidirectional-search.vercel.app",
  },
  {
    title: "Parking Management System",
    description: "Scalable parking management application in Python demonstrating system design principles like slot allocation and fee computation.",
    tech: ["Python", "Backend", "Vercel"],
    github: "https://github.com/TechWithDipak/Parking-system",
    live: "https://parking-system-alpha-seven.vercel.app",
  }
];

const CHROME_EXTENSIONS = [
  {
    title: "Instagram Reels Enhancer",
    description: "A powerful Chrome Extension that overhauls Instagram Reels on desktop with an immersive Theater Mode, video rotation, custom aspect ratios, and native trackpad gestures.",
    tech: ["JavaScript", "Chrome Extension"],
    github: "https://github.com/TechWithDipak/Instagram-Reels-Enhancer",
    live: null,
  },
  {
    title: "Aura Start Page",
    description: "A premium, macOS-inspired browser start page featuring a glassmorphism UI, dynamic clock, smart search, and a customizable shortcuts dashboard.",
    tech: ["JavaScript", "Vanilla JS"],
    github: "https://github.com/TechWithDipak/Aura-start-page",
    live: null,
  }
];

function FeaturedProjectCard({ project, idx }: { project: typeof FEATURED_PROJECTS[0], idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const link = project.live || project.github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      onMouseMove={handleMouseMove}
      className={clsx(
        "group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-2xl p-8 overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.1)] transition-all duration-500 hover:-translate-y-1",
        project.colSpan
      )}
    >
      <motion.div
        suppressHydrationWarning
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-screen"
        style={{
          backgroundImage: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(16,185,129,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-2 block">Featured Project • {project.year}</span>
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
              {link && link !== "#" ? (
                <a href={link} target="_blank" rel="noreferrer" className="hover:underline">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
          </div>
          <div className="flex gap-4 text-slate-400">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors p-2 hover:bg-emerald-500/10 rounded-full">
                <Github size={22} suppressHydrationWarning />
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors p-2 hover:bg-emerald-500/10 rounded-full">
                <ExternalLink size={22} suppressHydrationWarning />
              </a>
            )}
          </div>
        </div>
        <ul className="list-none text-slate-300 font-light mb-8 space-y-3 text-base leading-relaxed">
          {project.description.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-emerald-500 mt-1.5 shrink-0">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {project.tech.map(t => (
          <span key={t} className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function MinorProjectCard({ project, idx, icon = "folder" }: { project: typeof OTHER_PROJECTS[0], idx: number, icon?: "folder" | "puzzle" }) {
  const link = project.live || project.github;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-slate-900/30 p-6 hover:-translate-y-2 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-800/40"
    >
      <div className="flex justify-between items-center mb-6">
        {icon === "puzzle" ? (
          <Puzzle className="text-emerald-500" size={32} />
        ) : (
          <Folder className="text-emerald-500" size={32} />
        )}
        <div className="flex gap-3 text-slate-400">
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              <Github size={20} suppressHydrationWarning />
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              <ExternalLink size={20} suppressHydrationWarning />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
        {link && link !== "#" ? (
          <a href={link} target="_blank" rel="noreferrer" className="hover:underline hover:underline-offset-4 decoration-emerald-500/50">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="text-slate-400 text-sm font-light mb-6 leading-relaxed flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-500 font-mono">
        {project.tech.join("  ")}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Projects.</h2>
        <div className="h-1 w-12 bg-emerald-500 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {FEATURED_PROJECTS.map((project, idx) => (
          <FeaturedProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>

      <div className="mb-10 flex items-center gap-4">
        <h3 className="text-2xl font-bold text-white">Other Noteworthy Projects</h3>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
        {OTHER_PROJECTS.map((project, idx) => (
          <MinorProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
      
      <div className="mb-10 flex items-center gap-4">
        <h3 className="text-2xl font-bold text-white">Chrome Extensions</h3>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CHROME_EXTENSIONS.map((project, idx) => (
          <MinorProjectCard key={project.title} project={project} idx={idx} icon="puzzle" />
        ))}
      </div>
    </Section>
  );
}
