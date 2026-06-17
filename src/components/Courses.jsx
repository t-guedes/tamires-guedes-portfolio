import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
import { coursesData } from "../data/portfolio";
import "../styles/Courses.css";

const filterLabels = {
  todos: "Todos",
  frontend: "Front-End",
  backend: "Back-End",
  mobile: "Mobile",
  outros: "Outros",
};

export function Courses() {
  const [active, setActive] = useState("todos");

  const filtered =
    active === "todos"
      ? coursesData
      : coursesData.filter((c) => c.category === active);

  const totalHours = coursesData
    .filter((c) => c.status === "concluído")
    .reduce((sum, c) => sum + parseInt(c.hours), 0);

  return (
    <section id="cursos" className="courses-section">
      <FadeIn>
        <div className="section-label">Formação contínua</div>
        <h2 className="section-title">Cursos &amp; Certificações</h2>
        <p className="section-desc">
          Formação contínua por meio de cursos, programas de capacitação e workshops voltados para desenvolvimento de software e tecnologia.
        </p>

        <div className="courses-filters">
          {Object.entries(filterLabels).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${active === key ? "active" : ""}`}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {filtered.map((course, i) => (
            <FadeIn key={course.title} delay={i * 50}>
              <div className="course-card">
                <div className="course-header">
                  <div className="course-title">{course.title}</div>
                  <span className={`course-badge ${course.status === "concluído" ? "done" : "ongoing"}`}>
                    {course.status === "concluído" ? "✓ Concluído" : "⏳ Em andamento"}
                  </span>
                </div>
                <div className="course-meta">
                  <span className="course-institution">{course.institution}</span>
                  <span className="course-dot">·</span>
                  <span className="course-hours">{course.hours}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="courses-total">
          <strong>{coursesData.length}</strong> cursos no total ·{" "}
          <strong>{totalHours}h+</strong> concluídas
        </p>
      </FadeIn>
    </section>
  );
}
