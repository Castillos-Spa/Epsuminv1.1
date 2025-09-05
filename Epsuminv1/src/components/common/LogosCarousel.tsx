"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

/**
 * Componente de carrusel infinito de logos.
 * - Scroll horizontal continuo (loop infinito) sin saltos.
 * - Pausa al pasar el mouse (desktop) para inspeccionar.
 * - Accesible: lista semántica y alt en cada logo.
 *
 * Props:
 *  logos: Array<{ src: string; alt: string; width?: number; height?: number; className?: string }>
 *  speed?: segundos que tarda un ciclo completo (por defecto 30)
 *  className?: clases extra para el contenedor externo
 *  itemClassName?: clases extra para cada logo wrapper
 */
export interface LogoItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

interface LogosCarouselProps {
  logos: LogoItem[];
  speed?: number;
  className?: string;
  itemClassName?: string;
  heading?: string; // opcional, se oculta visualmente
  compact?: boolean; // reduce altura y espacios
  itemHeight?: number; // fuerza altura específica
}

const LogosCarousel: React.FC<LogosCarouselProps> = ({
  logos,
  speed = 30,
  className,
  itemClassName,
  heading = "Empresas asociadas",
  compact = false,
  itemHeight,
}) => {
  if (!logos || logos.length === 0) return null;

  // Duplicamos la lista para crear el efecto infinito sin salto
  const duplicated = [...logos, ...logos];

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden select-none group logos-paused",
        className
      )}
      aria-label={heading}
    >
      <h3 className="sr-only">{heading}</h3>
      {/* Gradientes laterales (fade) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

      <ul
        className={clsx(
          "logos-track flex items-center w-max",
          compact ? "gap-6 md:gap-10 py-2" : "gap-8 md:gap-12 py-4"
        )}
        style={{
          animation: `logos-scroll ${speed}s linear infinite`,
        }}
      >
        {duplicated.map((logo, idx) => (
          <li
            key={idx}
            className={clsx(
              "flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300",
              compact ? "px-3 md:px-4" : "px-4 md:px-6",
              itemClassName,
              logo.className
            )}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || Math.round((itemHeight || (compact ? 60 : 80)) * 1.75)}
              height={logo.height || itemHeight || (compact ? 60 : 80)}
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes logos-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Pausar animación al hacer hover */
        .logos-paused:hover .logos-track { animation-play-state: paused; }
        /* Soporte touch: no pausa (solo desktop hover) */
        @media (hover: none) {
          .logos-paused:hover .logos-track { animation-play-state: running; }
        }
      `}</style>
    </div>
  );
};

export default LogosCarousel;

/** Ejemplo de uso:
 *
 * import LogosCarousel from "@/components/common/LogosCarousel";
 *
 * const logos = [
 *   { src: "/img/komatsu.jpg", alt: "Komatsu" },
 *   { src: "/img/generador.png", alt: "Generador" },
 *   { src: "/img/casco.png", alt: "Casco" },
 *   { src: "/img/guantes.png", alt: "Guantes" },
 * ];
 *
 * <LogosCarousel logos={logos} speed={40} className="my-10" />
 */
