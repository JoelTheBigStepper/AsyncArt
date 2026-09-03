import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WorkProjectCard from "../components/WorkProjectCard";
import ProjectModeToggle from "../components/ProjectModeToggle";
import ProjectListModal from "../components/ProjectListModal";
import demoProject from "../data/demoProjects";

export default function Works() {
  const [mode, setMode] = useState("real");
  const [demoProjects, setDemoProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    fetchDemoProjects();
  }, []);

  const fetchDemoProjects = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://asyncart.onrender.com/api/projects");
      const data = await res.json();
      if (data.success && data.projects?.length > 0) {
        setDemoProjects(data.projects);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const activeProjects = mode === "real" ? demoProjects : demoProject;
  const visibleProjects = activeProjects.slice(0, 6);
  const projectGroupTitle = mode === "real" ? "Real-World Products" : "Client & Demo Work";

  return (
    <section
      id="work"
      className="px-6 md:px-16 py-24 bg-paper dark:bg-void text-ink dark:text-white"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">
            Selected Works
          </h2>
          <p className="mb-10 text-ink/70 dark:text-white/70 max-w-2xl">
            Real products shipped for real users, plus client and demo work —
            switch between the two below.
          </p>
        </motion.div>

        <ProjectModeToggle mode={mode} setMode={setMode} />

        {mode === "real" && isLoading ? (
          <div className="py-12">
            <p className="font-mono text-ink/60 dark:text-white/60">Loading projects...</p>
          </div>
        ) : activeProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, idx) => (
                <WorkProjectCard key={project._id || project.id || idx} project={project} />
              ))}
            </div>

            {activeProjects.length > 6 && (
              <button
                type="button"
                onClick={() => setIsMoreOpen(true)}
                className="press mt-8 border-brut shadow-brut-sm px-5 py-3 font-mono text-sm uppercase font-bold bg-flame text-white"
              >
                See more ({activeProjects.length - 6})
              </button>
            )}
          </>
        ) : (
          <p className="text-ink/70 dark:text-white/70 font-mono">
            No {mode === "demo" ? "products" : "demo projects"} added yet.
          </p>
        )}
      </div>

      <ProjectListModal
        isOpen={isMoreOpen}
        onClose={() => setIsMoreOpen(false)}
        projects={activeProjects}
        title={projectGroupTitle}
      />
    </section>
  );
}
