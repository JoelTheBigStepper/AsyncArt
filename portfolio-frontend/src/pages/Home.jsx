import { motion } from "framer-motion";
import myImage from "../assets/yh.png";
import SkillTicker from "../components/SkillTicker";

export default function Home() {
  return (
    <>
      <motion.section
        id="hero"
        className="relative px-6 pt-16 md:pt-20 pb-14 bg-paper dark:bg-void text-ink dark:text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-14">
          {/* Left — Text */}
          <div className="flex-1 space-y-7 text-center md:text-left">
            <span className="inline-block rotate-2 bg-acid text-ink font-mono text-sm px-3 py-1 border-brut shadow-brut-sm">
              Available for work
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display leading-[0.95] uppercase">
              Hi, I'm Joel.
              <br />
              <span className="text-cobalt">Full-Stack</span>
              <br />
              Developer.
            </h1>

            <p className="text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-ink/80 dark:text-white/80">
              I build modern, scalable, and responsive web applications with React,
              Node.js, and Express — including secure email communication and
              verification with Nodemailer and Mailboxlayer, backed by MongoDB.
              Functionality, scalability, and user-focused design, every time.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <motion.a
                href="#contact"
                className="press inline-block bg-flame text-white px-7 py-4 border-brut shadow-brut font-mono uppercase tracking-tight font-bold"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#work"
                className="press inline-block bg-transparent text-ink dark:text-white px-7 py-4 border-brut shadow-brut-sm font-mono uppercase tracking-tight font-bold"
              >
                See My Work
              </motion.a>
            </div>
          </div>

          {/* Right — Portrait */}
          <motion.div
            className="flex-1 flex justify-center relative w-full max-w-sm md:max-w-md"
            initial={{ x: 60, opacity: 0, rotate: 4 }}
            animate={{ x: 0, opacity: 1, rotate: -2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -top-4 -left-4 w-full h-full bg-cobalt border-brut" />
            <img
              src={myImage}
              loading="lazy"
              alt="Joel portrait"
              className="relative w-full border-brut shadow-brut object-cover"
            />
            <span className="absolute -bottom-5 -right-5 bg-ink text-white dark:bg-white dark:text-ink font-mono text-xs px-3 py-2 border-brut rotate-3">
              MERN Developer
            </span>
          </motion.div>
        </div>
      </motion.section>

      <SkillTicker />
    </>
  );
}
