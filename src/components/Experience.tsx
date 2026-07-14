"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section id="experience" className="py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Experience</h2>
        <div className="h-1 w-16 bg-accent-indigo rounded-full" />
      </div>

      <div className="relative border-l border-white/10 ml-4 pl-8 md:pl-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[41px] md:-left-[57px] top-2 h-4 w-4 rounded-full bg-background border border-accent-indigo flex items-center justify-center z-10 shadow-[0_0_10px_rgba(94,92,230,0.5)]">
            <div className="h-1.5 w-1.5 rounded-full bg-accent-indigo" />
          </div>
          
          <div className="glass-panel glass-edge inner-glow p-8 md:p-10 rounded-[32px] group hover:-translate-y-1 hover:border-accent-indigo/20 hover:shadow-[0_0_40px_-10px_rgba(94,92,230,0.15)] transition-all duration-500 relative overflow-hidden">
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-indigo/5 to-transparent pointer-events-none rounded-[32px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent-indigo transition-colors">Technology Intern</h3>
                <p className="text-lg text-graphite-300 font-medium">Omega Healthcare Management Services</p>
              </div>
              <div className="text-sm font-semibold tracking-wide text-accent-indigo bg-accent-indigo/10 border border-accent-indigo/20 px-4 py-2 rounded-full w-fit shrink-0">
                Jun 2026 – Jul 2026
              </div>
            </div>
            
            <ul className="list-disc pl-5 text-graphite-400 font-light space-y-4 text-base md:text-lg leading-relaxed">
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
