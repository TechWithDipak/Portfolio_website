"use client";

import { Section } from "./ui/Section";

export default function About() {
  return (
    <Section id="about" className="flex flex-col md:flex-row gap-12 items-start justify-between py-24 md:py-32">
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">About me.</h2>
        <div className="h-1 w-12 bg-neutral-700 rounded-full" />
      </div>
      
      <div className="w-full md:w-2/3 text-lg text-neutral-400 font-light leading-relaxed space-y-6">
        <p>
          I&apos;m a 2nd-year <span className="text-white font-medium">B.Tech Computer Science and Engineering</span> student at SRM Institute of Science and Technology who is obsessed with learning how things work under the hood. For me, happiness is cracking a difficult problem, learning a new framework, and writing clean code. 
        </p>
        <p>
          My current academic standing is an <span className="text-white font-medium">8.87 CGPA</span>, but my real passion lies in practical application—especially when it comes to Artificial Intelligence, Java development, and building robust systems. I am a lifelong learner at heart, always ready to dive into the next big thing in tech.
        </p>
        <p>
          My technical journey involves hands-on experience with Java, Python, and modern web development tools. I am deeply invested in mastering core computer science concepts such as <span className="text-white font-medium">Data Structures &amp; Algorithms, OOP, and Database Management</span>. 
        </p>
        <p>
          I thrive in environments that challenge my problem-solving abilities and require adaptive learning. I am actively seeking a software development internship to bridge the gap between theoretical knowledge and real-world engineering impact.
        </p>
      </div>
    </Section>
  );
}
