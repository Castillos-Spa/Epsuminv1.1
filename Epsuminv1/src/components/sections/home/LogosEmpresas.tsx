"use client";
import React from "react";
import LogosCarousel, { LogoItem } from "@/components/common/LogosCarousel";

// Lista inicial de logos (puedes ampliar / reemplazar según imágenes disponibles en public/img)
const logos: LogoItem[] = [
  { src: "/img/komatsu.jpg", alt: "Komatsu" },
  { src: "/img/generador.png", alt: "Generador eléctrico" },
  { src: "/img/casco.png", alt: "Casco de seguridad" },
  { src: "/img/guantes.png", alt: "Guantes de protección" },
  { src: "/img/generador1.png", alt: "Generador 1" },
  { src: "/img/generador2.png", alt: "Generador 2" },
];

const LogosEmpresas = () => {
  return (
    <section className="py-6 md:py-8 bg-white relative w-full">
      {/* Full-bleed wrapper */}
      <div className="w-full">
        <LogosCarousel logos={logos} speed={33} compact itemHeight={64} className="w-full" />
      </div>
    </section>
  );
};

export default LogosEmpresas;
