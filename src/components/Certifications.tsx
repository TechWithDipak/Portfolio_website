"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { LuGraduationCap as GraduationCap, LuAward as Award } from "react-icons/lu";

const EDUCATION = [
  {
    period: "2024 - 2028",
    title: "Bachelor of Technology - Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology (SRMIST)",
    highlight: "Current CGPA: 8.81 / 10.0 (2nd Year)",
  },
  {
    period: "Completed 2024",
    title: "Class XII - Higher Secondary Education (PCM + CS)",
    institution: "Sri Chaitanya Institute",
    highlight: null,
  }
];

const CERTIFICATIONS = [
  "Software Engineering Job Simulation | J.P. Morgan (Forage)",
  "Evaluation and Light Customization of LLMs | NVIDIA",
  "Programming in Java | NPTEL & IIT",
  "SQL Analytics and Business Intelligence on Databricks | Databricks",
  "GenAI Powered Data Analytics | Forage",
  "Data Structures and OOP with C++ | Udemy",
  "CS105: Introduction to Python | Saylor Academy"
];

export default function Certifications() {
  return (
    <Section id="background" className="py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Education &amp; Certifications.</h2>
        <div className="h-1 w-12 bg-slate-700 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-slate-300" size={24} suppressHydrationWarning />
            <h3 className="text-2xl font-semibold text-white">Education</h3>
          </div>
          
          <div className="relative border-l border-slate-800 ml-3 pl-8 space-y-10">
            {EDUCATION.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-[#020617] border-2 border-slate-700 flex items-center justify-center z-10">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                </div>
                
                <div className="p-6 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl group hover:-translate-y-1 hover:border-white/20 hover:bg-slate-800/50 hover:shadow-[0_0_30px_-5px_rgba(155,168,171,0.2)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-slate-400/5 to-transparent pointer-events-none rounded-2xl" />
                  <div className="relative z-10">
                    <span className="text-sm font-medium text-slate-400 mb-2 block">{item.period}</span>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-slate-100 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 mb-4 font-light">{item.institution}</p>
                    {item.highlight && (
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-sm rounded-lg font-medium backdrop-blur-md">
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
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-slate-300" size={24} suppressHydrationWarning />
            <h3 className="text-2xl font-semibold text-white">Certifications</h3>
          </div>
          
          <div className="flex flex-col gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-md group hover:-translate-y-1 hover:border-white/20 hover:bg-slate-800/50 hover:shadow-[0_0_20px_-5px_rgba(155,168,171,0.15)] transition-all duration-300 flex items-center gap-4 relative overflow-hidden"
              >
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-slate-400/5 to-transparent pointer-events-none rounded-xl" />
                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div className="h-2 w-2 rounded-full bg-slate-400/50 group-hover:bg-slate-300 group-hover:shadow-[0_0_10px_0_rgba(155,168,171,0.6)] transition-all duration-300 shrink-0" />
                  <p className="text-slate-300 font-light group-hover:text-white transition-colors">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
