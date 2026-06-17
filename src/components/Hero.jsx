import React, { useRef, useState } from "react";
import "../styles/Hero.css";
import foto from "../assets/tamires.png";

export function Hero({
  onScrollToProjects,
  onScrollToContact,
  onScrollToForm,
}) {
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef(null);

  function handlePhotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhoto(ev.target.result);
    reader.readAsDataURL(file);
  }

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-layout">
        {/* TEXTO */}
        <div className="hero-content">
          <div className="hero-eyebrow">Disponível para oportunidades</div>
          <h1 className="hero-title">
            Olá, sou
            <br />
            <span className="name">Tamires Guedes</span>
            <span className="cursor" />
          </h1>

          <p className="hero-sub">
            Desenvolvedora Frontend formada em Análise e Desenvolvimento de
            Sistemas, com experiência em React.js, JavaScript e desenvolvimento
            de interfaces modernas, acessíveis e focadas na experiência do
            usuário.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={onScrollToProjects}>
              Ver projetos
            </button>

            <button className="btn-secondary" onClick={onScrollToForm}>
              Falar comigo
            </button>
          </div>
          <br />
          <p className="timeline-company">Teresópolis-RJ</p>
        </div>

        {/* FOTO */}
        <div className="hero-photo-col">
          <div className="hero-photo-wrapper">
            <div className="hero-photo-ring">
              <div className="hero-photo-ring-inner" />
            </div>

            <div className="hero-photo-container">
              <img src={foto} alt="Tamires Guedes" className="hero-photo" />
            </div>

            {/*
            UPLOAD DE FOTO

            {photo ? (
              <img src={photo} alt="Tamires Guedes" className="hero-photo" />
            ) : (
              <div
                className="hero-photo-placeholder"
                onClick={() => fileInputRef.current?.click()}
              >
                <span>📷</span>
                <p>Clique para adicionar sua foto</p>
              </div>
            )}

            <button
              className="hero-photo-change"
              title="Trocar foto"
              onClick={() => fileInputRef.current?.click()}
            >
              ✏️
            </button>
            */}

            {/*
            INPUT DE UPLOAD (DESATIVADO)

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handlePhotoChange}
            />
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
