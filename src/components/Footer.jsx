import React from "react";

const footerStyle = {
  padding: "2rem 5%",
  borderTop: "1px solid rgba(124,58,237,0.2)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
};

export function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
        © {new Date().getFullYear()}{" "}
        <a
          href="#"
          style={{
            color: "var(--accent-light)",
            textDecoration: "none",
          }}
        >
          Tamires Guedes
        </a>
      </p>

      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
        Design e desenvolvimento por Tamires Guedes 👩🏾‍💻
      </p>
    </footer>
  );
}