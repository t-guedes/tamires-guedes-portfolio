import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";

export function FadeIn({ children, delay = 0 }) {
  const ref = useFadeIn();

  return (
    <div ref={ref} className="fade-in" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
