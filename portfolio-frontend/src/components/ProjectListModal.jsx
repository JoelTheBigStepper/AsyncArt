import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import WorkProjectCard from "./WorkProjectCard";

export default function ProjectListModal({ isOpen, onClose, projects, title }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-ink/80 backdrop-blur-sm flex items-center justify-center z-[60] px-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-paper dark:bg-void border-brut shadow-brut max-w-6xl w-full max-h-[calc(100vh-2rem)] relative overflow-y-auto p-5 sm:p-8"
            onClick={(event) => event.stopPropagation()}
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

            <h2 className="text-2xl sm:text-3xl font-display uppercase mb-6 pr-12">
              {title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <WorkProjectCard
                  key={project._id || project.id || index}
                  project={project}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
