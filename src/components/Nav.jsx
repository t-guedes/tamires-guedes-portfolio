import React from "react";
import "../styles/Nav.css";

export function Nav({ onScrollTo, theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <nav className="nav">
      <span
        className="nav-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        tamires.dev
      </span>

      <ul className="nav-links">
        {[
          { label: "Sobre", id: "sobre" },
          { label: "Skills", id: "skills" },
          { label: "Experiência", id: "experiencia" },
          { label: "Cursos", id: "cursos" },
          { label: "Projetos", id: "projetos" },
          { label: "Contato", id: "contato" },
        ].map(({ label, id }) => (
          <li key={id}>
            <button onClick={() => onScrollTo(id)}>{label}</button>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="theme-toggle" onClick={onToggleTheme} title="Alternar tema">
          <span className="theme-toggle-icon">{isDark ? "☀️" : "🌙"}</span>
          <span>{isDark ? "Claro" : "Escuro"}</span>
        </button>
        <button className="btn-primary nav-cta" onClick={() => onScrollTo("contato")}>
          Contato
        </button>
      </div>
    </nav>
  );
}
