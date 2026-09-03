import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");
  const [sending, setSending] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setFeedback("");

    const newErrors = {};
    if (!name) newErrors.name = "Name is required!";
    if (!email) newErrors.email = "Email is required!";
    else if (!validateEmail(email)) newErrors.email = "Please enter a valid email!";
    if (!message) newErrors.message = "Message is required!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    try {
      const response = await fetch("https://asyncart.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();

      if (data.success) {
        setFeedback("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFeedback(data.message || "There was an issue sending your message.");
      }
    } catch {
      setFeedback("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
      setTimeout(() => setFeedback(""), 5000);
    }
  };

  const inputClass =
    "w-full p-4 border-brut bg-paper dark:bg-void placeholder:text-graphite focus:outline-none focus:shadow-brut-sm transition-shadow";

  return (
    <section
      id="contact"
      className="px-6 py-24 bg-paper dark:bg-void text-ink dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-display uppercase mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-ink/70 dark:text-white/70 max-w-xl mx-auto mb-10 text-center">
          Have a project, idea, or collaboration in mind? Drop me a message —
          I'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
            {errors.name && <p className="text-flame font-mono text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
            {errors.email && <p className="text-flame font-mono text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} h-32`}
            />
            {errors.message && <p className="text-flame font-mono text-sm mt-1">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={sending}
            className="press w-full bg-cobalt text-white font-mono uppercase font-bold px-6 py-4 border-brut shadow-brut"
          >
            {sending ? "Sending..." : "Send Message"}
          </motion.button>

          {feedback && (
            <p
              className={`font-mono text-sm text-center ${
                feedback.includes("success") ? "text-cobalt" : "text-flame"
              }`}
            >
              {feedback}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
