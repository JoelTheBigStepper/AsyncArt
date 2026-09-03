import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";

export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-ink/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-paper dark:bg-void border-brut shadow-brut max-w-xl w-full max-h-[calc(100vh-2rem)] relative overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="press absolute top-3 right-3 p-2 border-brut bg-flame text-white shadow-brut-sm z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {project.image ? (
            <div className="w-full h-52 border-b-[3px] border-ink dark:border-white overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-full h-24 bg-cobalt border-b-[3px] border-ink dark:border-white" />
          )}

          <div className="p-6 sm:p-8 text-left text-ink dark:text-white">
            <h2 className="text-2xl font-display uppercase mb-3">{project.title}</h2>
            <p className="leading-relaxed mb-6 text-ink/80 dark:text-white/80">
              {project.description ||
                "A full-stack project built with modern technologies and best practices."}
            </p>

            {project.stack && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs uppercase px-2.5 py-1 border-[2px] border-ink dark:border-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press flex items-center gap-2 text-sm font-mono uppercase font-bold border-brut px-4 py-2.5 shadow-brut-sm bg-transparent"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press flex items-center gap-2 text-sm font-mono uppercase font-bold border-brut px-4 py-2.5 shadow-brut-sm bg-ink text-white dark:bg-white dark:text-ink"
                >
                  <ExternalLink className="w-4 h-4" /> Visit Site
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
