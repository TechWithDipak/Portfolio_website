"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { LuGraduationCap as GraduationCap, LuAward as Award } from "react-icons/lu";

const EDUCATION = [
  {
    period: "2024 - 2028",
    title: "B.Tech Computer Science",
    institution: "SRM Institute of Science and Technology (SRMIST)",
    highlight: "Current CGPA: 8.87 (2nd Year)",
  },
  {
    period: "Completed",
    title: "Class XII (Higher Secondary)",
    institution: "Sri Chaitanya Institute",
    highlight: null,
  }
];

const CERTIFICATIONS = [
  "J.P. Morgan: Software Engineering Job Simulation",
  "NVIDIA: Evaluation and Light Customization of LLMs",
  "NPTEL & IIT: Programming in Java",
  "Databricks: SQL Analytics and BI on Databricks",
  "Udemy: Data Structures and OOP with C++",
  "Forage: GenAI Powered Data Analytics",
  "Saylor Academy: CS105: Introduction to Python"
];

export default function Certifications() {
  return (
    <Section id="background" className="py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Education &amp; Certifications.</h2>
        <div className="h-1 w-12 bg-neutral-700 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-400" size={24} />
            <h3 className="text-2xl font-semibold text-white">Education</h3>
          </div>
          
          <div className="relative border-l border-neutral-800 ml-3 pl-8 space-y-10">
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
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-[#050505] border-2 border-neutral-700 flex items-center justify-center z-10">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </div>
                
                <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors">
                  <span className="text-sm font-medium text-blue-400 mb-2 block">{item.period}</span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-neutral-400 mb-4 font-light">{item.institution}</p>
                  {item.highlight && (
                    <span className="inline-block px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-md font-medium">
                      {item.highlight}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-purple-400" size={24} />
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
                className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors flex items-center gap-4"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                <p className="text-neutral-300 font-light">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
