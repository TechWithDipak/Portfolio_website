"use client";

import { Section } from "./ui/Section";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { LuExternalLink as ExternalLink, LuGithub as Github, LuFolder as Folder, LuPuzzle as Puzzle } from "react-icons/lu";
import { MouseEvent } from "react";
import clsx from "clsx";

const FEATURED_PROJECTS = [
  {
    title: "Claims Denial & Appeals Engine",
    description: [
      "Independently built a sequential LangChain multi-agent pipeline that analyzes denied insurance claims from sample Excel data across multiple pipeline stages and recommends targeted remediation actions.",
      "Integrated Google Gemini to auto-generate print-ready PDF appeal letters, cutting manual drafting time significantly."
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
      "Implemented rule-based payout logic auto-triggering claim-free payouts within 5 minutes when live thresholds are breached."
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
    tech: ["JavaScript", "Chrome API"],
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
      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      onMouseMove={handleMouseMove}
      className={clsx(
        "glass-panel glass-edge inner-glow group relative flex flex-col justify-between rounded-[32px] p-8 overflow-hidden hover:border-accent-indigo/30 hover:shadow-[0_0_40px_-10px_rgba(94,92,230,0.15)] transition-all duration-500 hover:-translate-y-1",
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
              rgba(94,92,230,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
          <div>
            <span className="text-accent-indigo text-xs font-semibold tracking-widest uppercase mb-2 block">Featured • {project.year}</span>
            <h3 className="text-3xl font-bold text-white group-hover:text-accent-indigo transition-colors">
              {link && link !== "#" ? (
                <a href={link} target="_blank" rel="noreferrer" className="hover:underline">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
          </div>
          <div className="flex gap-4 text-graphite-400">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full backdrop-blur-md">
                <Github size={22} suppressHydrationWarning />
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full backdrop-blur-md">
                <ExternalLink size={22} suppressHydrationWarning />
              </a>
            )}
          </div>
        </div>
        <ul className="list-none text-graphite-300 font-light mb-8 space-y-3 text-base leading-relaxed">
          {project.description.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-accent-indigo mt-1.5 shrink-0 opacity-70">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {project.tech.map(t => (
          <span key={t} className="px-3 py-1.5 text-xs font-medium bg-white/[0.03] text-graphite-200 border border-white/[0.05] rounded-full shadow-sm">
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
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="glass-panel glass-edge group relative flex flex-col justify-between rounded-3xl p-6 hover:-translate-y-2 transition-all duration-500 hover:border-accent-indigo/20 hover:shadow-[0_0_30px_-5px_rgba(94,92,230,0.1)]"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] shadow-inner">
          {icon === "puzzle" ? (
            <Puzzle className="text-accent-indigo" size={24} />
          ) : (
            <Folder className="text-accent-indigo" size={24} />
          )}
        </div>
        <div className="flex gap-3 text-graphite-400">
          {project.github && project.github !== "#" && (
            <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github size={20} suppressHydrationWarning />
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <ExternalLink size={20} suppressHydrationWarning />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-indigo transition-colors">
        {link && link !== "#" ? (
          <a href={link} target="_blank" rel="noreferrer" className="hover:underline hover:underline-offset-4 decoration-accent-indigo/50">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="text-graphite-400 text-sm font-light mb-6 leading-relaxed flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-3 text-xs font-medium text-graphite-500 font-mono">
        {project.tech.join("  ")}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Projects</h2>
        <div className="h-1 w-16 bg-accent-indigo rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        {FEATURED_PROJECTS.map((project, idx) => (
          <FeaturedProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>

      <div className="mb-10 flex items-center gap-6">
        <h3 className="text-2xl font-bold text-white">Other Noteworthy Work</h3>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {OTHER_PROJECTS.map((project, idx) => (
          <MinorProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
      
      <div className="mb-10 flex items-center gap-6">
        <h3 className="text-2xl font-bold text-white">Browser Extensions</h3>
        <div className="h-px bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHROME_EXTENSIONS.map((project, idx) => (
          <MinorProjectCard key={project.title} project={project} idx={idx} icon="puzzle" />
        ))}
      </div>
    </Section>
  );
}
