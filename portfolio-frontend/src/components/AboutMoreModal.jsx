import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AboutMoreModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center px-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-paper dark:bg-void text-ink dark:text-white border-brut shadow-brut max-w-2xl w-full max-h-[80vh] overflow-y-auto relative p-6 sm:p-8"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="press absolute top-4 right-4 p-2 border-brut bg-flame text-white shadow-brut-sm"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-3xl font-display uppercase mb-6 text-cobalt">
            More About Me
          </h2>

          <div className="space-y-4 leading-relaxed">
            <p>
              I'm <span className="font-bold text-flame">Joel Ojo</span>, a
              Full-Stack Developer focused on building modern, scalable, and
              visually refined web applications.
            </p>
            <p>
              I work with <span className="font-bold text-cobalt">React</span>,{" "}
              <span className="font-bold text-cobalt">TailwindCSS</span>,{" "}
              <span className="font-bold text-cobalt">Node.js</span>, and{" "}
              <span className="font-bold text-cobalt">Express</span> to create
              responsive, user-focused applications that balance performance
              with clean design.
            </p>
            <p>
              I build full-stack systems with real-world functionality,
              structuring applications for scalability, maintainability, and
              efficient data handling using{" "}
              <span className="font-bold text-cobalt">MongoDB</span>.
            </p>
            <p>
              I also have experience working with APIs and backend services,
              integrating dynamic data into applications and designing systems
              that handle real user interactions.
            </p>
            <p>
              Beyond development, I'm expanding my knowledge in{" "}
              <span className="font-bold text-flame">Python</span> and
              exploring <span className="font-bold text-flame">cybersecurity</span>,
              with a focus on building secure and reliable systems.
            </p>
            <p>
              I prioritize clarity, consistency, and attention to detail,
              ensuring every project feels polished, functional, and
              impactful.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
