"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { LuGraduationCap as GraduationCap, LuAward as Award } from "react-icons/lu";

const EDUCATION = [
  {
    period: "2024 - 2028",
    title: "Bachelor of Technology - Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology (SRMIST)",
    highlight: "Current CGPA: 8.92 / 10.0 (3rd Year)",
  },
  {
    period: "Completed 2024",
    title: "Class XII - Higher Secondary Education (PCM + CS)",
    institution: "Sri Chaitanya Institute",
    highlight: null,
  }
];

const CERTIFICATIONS = [
  "Evaluation and Light Customization of LLMs | NVIDIA",
  "Software Engineering Job Simulation | J.P. Morgan (Forage)",
  "SQL Analytics and Business Intelligence on Databricks | Databricks",
  "Programming in Java | NPTEL & IIT"
];

export default function Certifications() {
  return (
    <Section id="background" className="py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Education & Certifications</h2>
        <div className="h-1 w-16 bg-accent-indigo rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] shadow-inner">
              <GraduationCap className="text-accent-indigo" size={24} suppressHydrationWarning />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          
          <div className="relative border-l border-white/10 ml-6 pl-8 space-y-10">
            {EDUCATION.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-background border border-accent-indigo flex items-center justify-center z-10 shadow-[0_0_10px_rgba(94,92,230,0.5)]">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-indigo" />
                </div>
                
                <div className="glass-panel glass-edge inner-glow p-6 md:p-8 rounded-3xl group hover:-translate-y-1 hover:border-accent-indigo/20 hover:shadow-[0_0_30px_-5px_rgba(94,92,230,0.15)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent-indigo/5 to-transparent pointer-events-none rounded-3xl" />
                  <div className="relative z-10">
                    <span className="text-xs font-semibold text-accent-indigo mb-2 block tracking-widest uppercase">{item.period}</span>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-indigo transition-colors">{item.title}</h4>
                    <p className="text-graphite-400 mb-5 font-light leading-relaxed">{item.institution}</p>
                    {item.highlight && (
                      <span className="inline-block px-3 py-1.5 bg-white/[0.03] border border-white/[0.05] shadow-sm text-graphite-300 text-sm rounded-full font-medium">
                        {item.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] shadow-inner">
              <Award className="text-accent-indigo" size={24} suppressHydrationWarning />
            </div>
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          
          <div className="flex flex-col gap-4 pl-0 lg:pl-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="glass-panel glass-edge inner-glow p-6 rounded-2xl group hover:-translate-y-1 hover:border-accent-indigo/20 hover:shadow-[0_0_20px_-5px_rgba(94,92,230,0.15)] transition-all duration-500 flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-accent-indigo/5 to-transparent pointer-events-none rounded-2xl" />
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="h-2 w-2 rounded-full bg-graphite-600 group-hover:bg-accent-indigo group-hover:shadow-[0_0_10px_0_rgba(94,92,230,0.6)] transition-all duration-300 shrink-0" />
                  <p className="text-graphite-300 font-light group-hover:text-white transition-colors text-[17px] leading-relaxed">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
