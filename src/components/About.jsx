import React, { useEffect, useState } from "react";
import { FadeIn } from "./FadeIn";
import "../styles/About.css";
import { coursesData } from "../data/portfolio";

const totalHours = coursesData
  .filter((course) => course.status === "concluído")
  .reduce((total, course) => total + parseInt(course.hours), 0);
export function About() {
  const [repoCount, setRepoCount] = useState("5+");

  useEffect(() => {
    fetch("https://api.github.com/users/t-guedes/repos")
      .then((res) => res.json())
      .then((data) => {
        const repos = data.filter((repo) => !repo.fork);
        setRepoCount(`${repos.length}+`);
      })
      .catch(() => {
        setRepoCount("5+");
      });
  }, []);

  const stats = [
    { num: repoCount, label: "Projetos desenvolvidos" },
    { num: "2025", label: "Formação UNIFESO" },
    { num: `${totalHours}h+`, label: "Em cursos e certificações" },
    { num: "2+", label: "Anos de experiência profissional" },
  ];

  return (
    <section id="sobre">
      <FadeIn>
        <div className="section-label">Sobre mim</div>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">
              Construo interfaces,
              <br />
              com cuidado e propósito.
            </h2>

            <p>
              Sou graduada em Análise e Desenvolvimento de Sistemas pela
              UNIFESO, com foco em Desenvolvimento Front-End e grande interesse
              por tecnologia, inovação e experiência do usuário.
            </p>

            <p>
              Minha base técnica foi construída por meio da graduação e de
              projetos práticos utilizando React.js, HTML, CSS, JavaScript,
              Python e integração com APIs utilizando FastAPI. Sou uma
              profissional proativa, organizada e com grande facilidade para
              aprender novas tecnologias e solucionar problemas.
            </p>

            <p>
              Minha experiência anterior na área administrativa fortaleceu
              habilidades como trabalho em equipe, resolução de problemas e
              atenção aos detalhes — que levo para cada linha de código.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
