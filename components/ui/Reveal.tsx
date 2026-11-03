"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

// Aparece con un fade hacia arriba cada vez que entra en pantalla, y se oculta al salir.
// Con "reducir movimiento" activado, el contenido se muestra directo.
const Reveal = ({ children, className = "" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-safe:transition motion-safe:duration-1000 motion-safe:ease-out ${
        visible ? "translate-y-0 opacity-100" : "motion-safe:translate-y-16 motion-safe:opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
