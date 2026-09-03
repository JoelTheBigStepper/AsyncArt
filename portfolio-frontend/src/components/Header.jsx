import { Sun, Moon, Home, User, Briefcase, Mail, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#work", label: "Work", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <motion.header
        className="sticky top-0 z-30 bg-paper dark:bg-void border-b-[3px] border-ink dark:border-white"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand — stamp badge */}
          <a
            href="#home"
            className="-rotate-2 inline-block bg-cobalt text-white font-display text-lg sm:text-xl px-4 py-2 border-brut shadow-brut-sm"
          >
            ASYNC<span className="text-acid">ART</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3 font-mono uppercase text-sm tracking-tight">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="press px-4 py-2 border-brut bg-paper dark:bg-void dark:text-white shadow-brut-sm hover:bg-acid hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme + Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="press p-2.5 border-brut bg-flame text-white shadow-brut-sm"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="press md:hidden p-2.5 border-brut bg-ink text-white dark:bg-white dark:text-ink shadow-brut-sm"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-start pt-24 bg-ink/90 backdrop-blur-sm px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-paper dark:bg-void text-ink dark:text-white border-brut shadow-brut p-8 w-full max-w-sm"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="press absolute top-4 right-4 p-2 border-brut bg-flame text-white shadow-brut-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-4 mt-8 font-mono uppercase text-lg">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="press flex items-center gap-3 px-4 py-3 border-brut bg-transparent shadow-brut-sm hover:bg-acid hover:text-ink"
                  >
                    <link.icon className="w-5 h-5" />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
