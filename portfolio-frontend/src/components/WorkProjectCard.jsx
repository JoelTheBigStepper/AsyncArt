import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import { Github, ExternalLink } from "lucide-react";

const accentMap = {
  cobalt: "bg-cobalt",
  flame: "bg-flame",
};

export default function WorkProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const accentClass = accentMap[project.accent] || "bg-cobalt";

  return (
    <>
      <motion.div
        className="border-brut shadow-brut-sm hover:shadow-brut bg-paper dark:bg-ink cursor-pointer transition-shadow"
        whileHover={{ y: -3 }}
        onClick={() => setIsOpen(true)}
      >
        {project.image ? (
          <div className="w-full h-44 border-b-[3px] border-ink dark:border-white overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-contain bg-ink" />
          </div>
        ) : (
          <div className={`w-full h-28 border-b-[3px] border-ink dark:border-white ${accentClass} flex items-end p-4`}>
            <span className="font-mono text-white text-xs uppercase tracking-tight">
              {project.tagline}
            </span>
          </div>
        )}

        <div className="p-5">
          <h3 className="text-lg font-display uppercase mb-2">{project.title}</h3>
          <p className="text-sm text-ink/70 dark:text-white/70 line-clamp-2 mb-4">
            {project.description || "A full-stack web project with modern tech."}
          </p>

          {project.stack && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase px-2 py-1 border-[2px] border-ink dark:border-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="press flex items-center gap-1.5 text-xs font-mono uppercase font-bold border-brut px-3 py-1.5 shadow-brut-sm"
              >
                <Github className="w-3.5 h-3.5" /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="press flex items-center gap-1.5 text-xs font-mono uppercase font-bold border-brut px-3 py-1.5 shadow-brut-sm bg-ink text-white dark:bg-white dark:text-ink"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Visit
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} project={project} />
    </>
  );
}
