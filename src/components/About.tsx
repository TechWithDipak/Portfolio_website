"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about" className="flex flex-col md:flex-row gap-12 items-start justify-between py-24 md:py-32">
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">About me.</h2>
        <div className="h-1 w-12 bg-neutral-700 rounded-full" />
      </div>
      
      <div className="w-full md:w-2/3 text-lg text-neutral-400 font-light leading-relaxed space-y-6">
        <p>
          I am a software developer with a strong foundation in <span className="text-white font-medium">Data Structures and Algorithms</span>, Object-Oriented Programming, and Database Management Systems.
        </p>
        <p>
          My focus is on understanding how things work under the hood. Whether it&apos;s building scalable backend infrastructure with <span className="text-white font-medium">Java and Python</span> or exploring the cutting edge of AI and System Design, I&apos;m driven by curiosity and a desire to build robust solutions.
        </p>
        <p>
          Beyond writing code, I constantly strive to write <span className="text-white font-medium">clean, maintainable</span> software that stands the test of time, and I am always looking for the next challenging problem to solve.
        </p>
      </div>
    </Section>
  );
}
