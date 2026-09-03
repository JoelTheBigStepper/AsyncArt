import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Admin from "./pages/Admin";

function PortfolioPage({ theme, toggleTheme }) {
  return (
    <>
      <Helmet>
        <title>AsyncArt - Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Showcasing the work of a Full-Stack Developer. Expert in React, Node.js, Express, MongoDB, and Tailwind CSS."
        />
        <meta name="keywords" content="Full-Stack Developer, React, Node.js, MongoDB, Web Development, Portfolio" />
        <meta property="og:title" content="AsyncArt - Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Showcasing the work of a Full-Stack Developer." />
        <meta property="og:image" content="URL_to_your_image.jpg" />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AsyncArt - Full-Stack Developer Portfolio" />
        <meta name="twitter:description" content="Showcasing the work of a Full-Stack Developer." />
        <meta name="twitter:image" content="URL_to_your_image.jpg" />
      </Helmet>

      <div className="bg-paper text-ink dark:bg-void dark:text-white font-body transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="works"><Works /></section>
        <section id="contact"><Contact /></section>

        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PortfolioPage theme={theme} toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
