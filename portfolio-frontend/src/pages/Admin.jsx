import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    code: "",
    demo: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await fetch("https://asyncart.onrender.com/api/projects");
      const data = await res.json();
      if (data.success) setProjects(data.projects);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("code", formData.code);
    data.append("demo", formData.demo);
    if (image) data.append("image", image);

    try {
      setLoading(true);
      const res = await fetch("https://asyncart.onrender.com/api/projects", {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      if (result.success) {
        setProjects((prev) => [result.project, ...prev]);
        setFormData({ title: "", description: "", code: "", demo: "" });
        setImage(null);
      } else {
        alert("Error adding project");
      }
    } catch (err) {
      console.error("Error submitting project:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`https://asyncart.onrender.com/api/projects/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setProjects((prev) => prev.filter((p) => p._id !== id));
      }
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  const inputClass =
    "w-full p-3 border-brut bg-paper dark:bg-void focus:outline-none focus:shadow-brut-sm transition-shadow";

  return (
    <section className="min-h-screen bg-paper dark:bg-void text-ink dark:text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display uppercase mb-8">Admin Dashboard</h2>

        <motion.form
          className="border-brut shadow-brut bg-paper dark:bg-ink p-6 mb-12 space-y-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <label className="block mb-2 font-mono text-sm uppercase">Project Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className="block mb-2 font-mono text-sm uppercase">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows="4" className={inputClass} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-mono text-sm uppercase">Code URL</label>
              <input type="url" name="code" value={formData.code} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className="block mb-2 font-mono text-sm uppercase">Demo URL</label>
              <input type="url" name="demo" value={formData.demo} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-mono text-sm uppercase">Project Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className={inputClass} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="press bg-flame text-white px-6 py-3 border-brut shadow-brut-sm font-mono uppercase font-bold"
          >
            {loading ? "Uploading..." : "Add Project"}
          </button>
        </motion.form>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              className="border-brut shadow-brut-sm bg-paper dark:bg-ink overflow-hidden"
              whileHover={{ y: -3 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover border-b-[3px] border-ink dark:border-white" />
              <div className="p-4">
                <h3 className="text-lg font-display uppercase mb-2">{project.title}</h3>
                <p className="text-sm text-ink/70 dark:text-white/70 mb-4 line-clamp-3">{project.description}</p>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="press font-mono text-sm uppercase font-bold text-white bg-flame px-3 py-1.5 border-brut shadow-brut-sm"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
