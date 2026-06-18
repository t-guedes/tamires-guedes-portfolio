import React from "react";
import { FadeIn } from "./FadeIn";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";

const contacts = [
  {
    icon: <MdEmail />,
    label: "tamiresguedesb@gmail.com",
    sublabel: "E-mail",
    href: "mailto:tamiresguedesb@gmail.com",
    btn: "Enviar e-mail",
  },
  {
    icon: <FaWhatsapp />,
    label: "Contato direto",
    sublabel: "WhatsApp",
    href: "https://wa.me/",
    btn: "Conversar",
  },
  {
    icon: <FaLinkedin />,
    label: "linkedin.com/in/t-guedes",
    sublabel: "LinkedIn",
    href: "https://linkedin.com/in/t-guedes",
    btn: "Ver perfil",
  },
  {
    icon: <FaGithub />,
    label: "github.com/t-guedes",
    sublabel: "GitHub",
    href: "https://github.com/t-guedes",
    btn: "Ver repositórios",
  },
];

export function Contact() {
  return (
    <section id="contato">
      <FadeIn>
        <div className="section-label">Contato</div>

        <h2 className="section-title">Vamos trabalhar juntos?</h2>

        <p className="section-desc">
          Estou aberta a oportunidades de trabalho, projetos freelance,
          colaborações e conversas sobre desenvolvimento front-end e tecnologia.
        </p>

        <div className="contact-cards">
          {contacts.map((c) => (
            <a
              key={c.label}
              className="contact-card"
              href={c.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-card-icon">{c.icon}</div>

              <div className="contact-card-body">
                <div className="contact-card-sublabel">{c.sublabel}</div>
                <div className="contact-card-label">{c.label}</div>
              </div>

              <div className="contact-card-arrow">→</div>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
