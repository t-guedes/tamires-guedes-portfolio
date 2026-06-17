import React from "react";
import { FadeIn } from "./FadeIn";
import { experienceData } from "../data/portfolio";
import "../styles/Experience.css";

export function Experience() {
  return (
    <section id="experiencia">
      <FadeIn>
        <div className="section-label">Trajetória</div>
        <h2 className="section-title">Experiência profissional</h2>
        <p className="section-desc">Experiências que fortaleceram minhas habilidades de organização, comunicação e resolução de problemas.</p>
        <div className="timeline">
          {experienceData.map((e, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-period">{e.period}</div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-company">{e.company}</div>
                <div className="timeline-desc">{e.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
