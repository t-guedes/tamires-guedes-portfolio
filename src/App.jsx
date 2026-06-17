import React, { useState, useEffect } from "react";
import "./styles/globals.css";

import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Courses } from "./components/Courses";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  // Lê preferência salva ou usa "dark" como padrão
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  // Aplica o tema no <html> e salva a preferência
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <>
      <Nav
        onScrollTo={scrollTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <Hero
        onScrollToProjects={() => scrollTo("projetos")}
        onScrollToContact={() => scrollTo("contato")}
        onScrollToForm={() => scrollTo("contato")}
      />

      <About />
      <Skills />
      <Experience />
      <Courses />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
