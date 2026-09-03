import { useState } from "react";
import { motion } from "framer-motion";
import AboutMoreModal from "../components/AboutMoreModal";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, rotate: "-rotate-2" },
  { name: "JavaScript", icon: SiJavascript, rotate: "rotate-1" },
  { name: "React", icon: SiReact, rotate: "rotate-2" },
  { name: "TypeScript", icon: SiTypescript, rotate: "-rotate-1" },
  { name: "Tailwind", icon: SiTailwindcss, rotate: "rotate-2" },
  { name: "Git", icon: SiGit, rotate: "-rotate-2" },
  { name: "Node.js", icon: SiNodedotjs, rotate: "rotate-1" },
  { name: "MongoDB", icon: SiMongodb, rotate: "-rotate-1" },
  { name: "Express", icon: SiExpress, rotate: "rotate-2" },
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="px-6 md:px-16 py-20 bg-paper dark:bg-void text-ink dark:text-white scroll-mt-10"
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* LEFT, Text */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display uppercase">
            About Me
          </h2>

          <p className="text-lg leading-relaxed max-w-xl text-ink/80 dark:text-white/80">
            I am Joel, a Full Stack Developer dedicated to building seamless and high performance digital experiences. I utilize React, Node.js, Express, and MongoDB to create scalable applications that balance functionality with clean and refined design.
          </p>

          <blockquote className="border-l-[3px] border-flame pl-4 italic text-ink/70 dark:text-white/70 max-w-lg">
            "I prioritize clarity, consistency, and visual balance in every project, ensuring reliability across both backend architecture and responsive user interfaces."
          </blockquote>
          
          <p className="text-lg leading-relaxed max-w-xl text-ink/80 dark:text-white/80">
            My projects involve solving complex technical challenges, including managing rate limits, implementing strict JWT authentication, and engineering real time collaborative environments.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="press mt-4 px-6 py-3.5 bg-cobalt text-white border-brut shadow-brut font-mono uppercase tracking-tight font-bold"
          >
            More About Me
          </button>
        </motion.div>

        {/* RIGHT, Skills */}
        <motion.div
          className="flex-1 grid grid-cols-3 gap-5 w-full max-w-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skills.map(({ name, icon: Icon, rotate }) => (
            <motion.div
              key={name}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={`${rotate} flex flex-col items-center justify-center gap-2 p-4 border-brut bg-paper dark:bg-ink shadow-brut-sm transition-transform`}
            >
              <Icon className="w-7 h-7 text-cobalt" />
              <p className="text-xs font-mono uppercase tracking-tight">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AboutMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}