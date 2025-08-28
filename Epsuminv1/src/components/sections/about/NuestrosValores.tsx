"use client";
import React from 'react';
import 'aos/dist/aos.css';
import { FaUsers, FaLeaf, FaShieldAlt, FaStar } from 'react-icons/fa';

const valores = [
  { id: 1, titulo: 'Diversidad', descripcion: 'Creamos un entorno laboral justo y respetuoso, garantizando igual acceso a oportunidades y recursos para todos.', icono: <FaUsers className="text-6xl text-blue-950 mb-4" />},
  { id: 2, titulo: 'Sostenibilidad', descripcion: 'Nos comprometemos con la responsabilidad social y el desarrollo sostenible, minimizando nuestro impacto en el medioambiente y las comunidades.', icono: <FaLeaf className="text-6xl text-blue-950 mb-4" />},
  { id: 3, titulo: 'Seguridad', descripcion: 'Priorizamos la salud y seguridad de nuestros colaboradores en todas nuestras decisiones y acciones, identificando y controlando riesgos e impactos.', icono: <FaShieldAlt className="text-6xl text-blue-950 mb-4" />},
  { id: 4, titulo: 'Calidad', descripcion: 'Mejoramos continuamente nuestros servicios, optimizando procesos con tecnología avanzada y un equipo altamente capacitado para atender de forma confiable a nuestros clientes.', icono: <FaStar className="text-5xl text-blue-950 mb-4" />},
];

const NuestrosValores = () => {
  return (
    <section className="py-16 bg-white text-center relative overflow-hidden">
      <h2 className="text-4xl font-bold text-blue-950 uppercase mb-12">Nuestros Valores</h2>
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-[600px] bg-center bg-cover bg-fixed opacity-60 clip-bottom-curve" style={{ backgroundImage: `url('/img/fondo-valores.png')`, minHeight: '600px' }}></div>
      </div>
      {/* Overlay y contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {valores.map((valor) => (
            <div key={valor.id} className="flex flex-col items-center hover:scale-125 transition-transform duration-300">
              {valor.icono}
              <h3 className="text-xl font-semibold text-blue-950 mb-3">{valor.titulo}</h3>
              <p className="text-blue-950 max-w-sw">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestrosValores;
