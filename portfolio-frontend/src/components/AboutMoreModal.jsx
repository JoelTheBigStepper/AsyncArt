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
              I am <span className="font-bold text-flame">Joel Ojo</span>, a
              Full Stack Developer focused on creating modern, scalable, and
              visually refined web applications.
            </p>
            <p>
              I work extensively with <span className="font-bold text-cobalt">React</span>,{" "}
              <span className="font-bold text-cobalt">TailwindCSS</span>,{" "}
              <span className="font-bold text-cobalt">Node.js</span>, and{" "}
              <span className="font-bold text-cobalt">Express</span> to build
              responsive applications that balance performance
              with clean design.
            </p>
            <p>
              Using <span className="font-bold text-cobalt">MongoDB</span>, I structure robust systems designed for maintainability and efficient data handling.
            </p>
            <p>
              My development experience involves architecting production ready systems that prioritize both security and the developer experience. I have built dynamic dashboards featuring resilient proxy layers, exponential backoff, and webhooks signed with HMAC SHA256.
            </p>
            <p>
              I also create specialized platforms, such as a medication authentication system equipped with a custom GS1 DataMatrix barcode parser, fuzzy matching engines, and AI explanations powered by Claude. I maintain strict security standards across my applications by utilizing server side token attachment and per device session revocation.
            </p>
            <p>
              Additionally, I have strong experience working with APIs and backend services to integrate dynamic data and manage real user interactions. I am currently expanding my knowledge in{" "}
              <span className="font-bold text-flame">Python</span> and
              exploring <span className="font-bold text-flame">cybersecurity</span> to further my ability to build secure and reliable systems.
            </p>
            <p>
              I always prioritize clarity, consistency, and attention to detail,
              ensuring every project feels polished, functional, and
              impactful.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}