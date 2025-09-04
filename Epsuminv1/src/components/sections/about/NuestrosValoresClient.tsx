"use client";
import React from "react";
import "aos/dist/aos.css";
import { FaUsers, FaLeaf, FaShieldAlt, FaStar } from "react-icons/fa";
import { Valores } from "@/types/strapi";
interface NuestrosValoresClientProps {
  valores: Valores;
}
export default function NuestrosValoresClient({ valores }: NuestrosValoresClientProps) {
  return (
    <section className="py-16 bg-white text-center relative overflow-hidden">
      <h2 className="text-4xl font-bold text-blue-950 uppercase mb-12">
        Nuestros Valores
      </h2>

      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-[600px] bg-center bg-cover bg-fixed opacity-60 clip-bottom-curve"
          style={{
            backgroundImage: `url('/img/fondo-valores.png')`,
            minHeight: "600px",
          }}
        ></div>
      </div>

      {/* Overlay y contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Diversidad */}
          <div className="flex flex-col items-center hover:scale-125 transition-transform duration-300">
            <FaUsers className="text-6xl text-blue-950 mb-4" />
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Diversidad
            </h3>
            <p className="text-blue-950 max-w-sw">{valores.Diversidad}</p>
          </div>

          {/* Sostenibilidad */}
          <div className="flex flex-col items-center hover:scale-125 transition-transform duration-300">
            <FaLeaf className="text-6xl text-blue-950 mb-4" />
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Sostenibilidad
            </h3>
            <p className="text-blue-950 max-w-sw">{valores.Sostenibilidad}</p>
          </div>

          {/* Seguridad */}
          <div className="flex flex-col items-center hover:scale-125 transition-transform duration-300">
            <FaShieldAlt className="text-6xl text-blue-950 mb-4" />
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Seguridad
            </h3>
            <p className="text-blue-950 max-w-sw">{valores.Seguridad}</p>
          </div>

          {/* Calidad */}
          <div className="flex flex-col items-center hover:scale-125 transition-transform duration-300">
            <FaStar className="text-5xl text-blue-950 mb-4" />
            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Calidad
            </h3>
            <p className="text-blue-950 max-w-sw">{valores.Calidad}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
