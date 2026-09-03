import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const social = [
  { href: "https://github.com/JoelTheBigStepper", label: "GitHub", icon: Github },
  { href: "https://x.com/JoelDaBigSteppa", label: "X / Twitter", icon: Twitter },
  { href: "https://linkedin.com/", label: "LinkedIn", icon: Linkedin },
];

export default function Footer() {
  return (
    <motion.footer
      className="bg-ink dark:bg-void text-white border-t-[3px] border-ink dark:border-white pt-12 pb-8 mt-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="font-mono text-sm text-white/70">
          © {new Date().getFullYear()} <span className="text-acid">AsyncArt</span> — built by Joel
        </p>

        <div className="flex items-center gap-4">
          {social.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="press p-2.5 border-[3px] border-white bg-transparent shadow-brut-white-sm hover:bg-flame hover:border-flame transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
