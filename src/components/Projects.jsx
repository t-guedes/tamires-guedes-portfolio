import React from "react";
import { FadeIn } from "./FadeIn";
import { projectsData } from "../data/portfolio";
import "../styles/Projects.css";

export function Projects() {
  return (
    <section id="projetos" className="projects-section">
      <FadeIn>
        <div className="section-label">Portfólio</div>
        <h2 className="section-title">Projetos selecionados</h2>
        <p className="section-desc">
          Projetos desenvolvidos durante a graduação e em estudos independentes, aplicando conceitos de desenvolvimento front-end e boas práticas de programação.
        </p>
        <div className="projects-grid">
          {projectsData.map((p, i) => (
            <FadeIn key={p.name} delay={i * 80}>
              <div className="project-card">
                <div className="project-thumb">
                  <div className="project-thumb-inner" style={{ background: p.bg }}>
                    {p.emoji}
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="project-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-name">{p.name}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-links">
                    <a className="project-link" href={p.demo} target="_blank" rel="noreferrer">
                      ↗ Demo
                    </a>
                    <a className="project-link" href={p.code} target="_blank" rel="noreferrer">
                      ⌥ Código
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
