import React from "react";
import { FadeIn } from "./FadeIn";
import { skillsData } from "../data/portfolio";
import "../styles/Skills.css";

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <FadeIn>
        <div className="section-label">Habilidades</div>
        <h2 className="section-title">Minha stack</h2>
        <p className="section-desc">
          Ferramentas e tecnologias que aprendi na formação acadêmica, cursos e projetos práticos.
        </p>
        <div className="skills-grid">
          {skillsData.map((cat, i) => (
            <FadeIn key={cat.cat} delay={i * 60}>
              <div className="skill-category">
                <div className="skill-cat-title">{cat.cat}</div>
                <div className="skill-tags">
                  {cat.tags.map((t) => (
                    <span className="skill-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
