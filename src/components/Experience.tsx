"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section id="experience" className="py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Experience.</h2>
        <div className="h-1 w-12 bg-emerald-500 rounded-full" />
      </div>

      <div className="relative border-l border-white/10 ml-3 pl-8 md:pl-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[41px] md:-left-[57px] top-1.5 h-4 w-4 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center z-10">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
          
          <div className="p-6 md:p-8 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-xl group hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-slate-800/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none rounded-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">Technology Intern – Agentic AI & LangChain</h3>
                <p className="text-lg text-slate-300 font-medium">Omega Healthcare Management Services</p>
              </div>
              <div className="text-sm font-medium text-emerald-400/80 bg-emerald-500/10 px-3 py-1.5 rounded-lg w-fit shrink-0">
                Jun 2026 – Jul 2026
              </div>
            </div>
            
            <ul className="list-disc pl-5 text-slate-400 font-light space-y-3 text-sm md:text-base leading-relaxed">
              <li>Built an AI-powered Denial Management System with LangChain and Python to automate healthcare insurance claim triage.</li>
              <li>Architected a sequential multi-agent workflow that routes claims through validation, classification, and decision stages without manual intervention.</li>
              <li>Applied LLMs to healthcare data workflows to accelerate decision-making and reduce manual review effort for the claims team.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
