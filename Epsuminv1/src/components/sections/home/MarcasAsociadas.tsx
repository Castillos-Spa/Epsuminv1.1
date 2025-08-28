'use client';
import React from 'react';
import Image from 'next/image';

// const marcas = [
//   { id: 1, nombre: 'DeWalt', logo: '/marcas/dewalt.png' },
//   { id: 2, nombre: 'Bosch', logo: '/marcas/bosch.png' },
//   { id: 3, nombre: 'Stanley', logo: '/marcas/stanley.png' },
//   { id: 4, nombre: '3M', logo: '/marcas/3m.png' },
//   { id: 5, nombre: 'Makita', logo: '/marcas/makita.png' },
//   { id: 6, nombre: 'Milwaukee', logo: '/marcas/milwaukee.png' },
// ];

const MarcasAsociadas = () => {
  return (
    <section className="py-16 bg-white text-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Marcas Asociadas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las marcas líderes en la industria para garantizar productos 
            de la más alta calidad y rendimiento para nuestros clientes.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
          {marcas.map((marca) => (
            <div key={marca.id} className="relative h-20 w-40 grayscale hover:grayscale-0 transition-all duration-300">
              <Image 
                src={marca.logo} 
                alt={marca.nombre} 
                fill 
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div> */}
        <div className="absolute inset-0 z-0">
          {/* Fondo de la sección */}
          <div className="w-full h-full bg-center bg-cover bg-fixed" style={{ backgroundImage: `url('/img/fondo licitaciones.png')` }}></div>
        </div>
        <div className="mb-20 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-950 mb-2 uppercase">Licitaciones</h2>
          <h3 className="text-2xl md:text-4xl font-semibold text-amber-600 mb-2 tracking-wider">PRÓXIMAMENTE</h3>

          <div className="flex justify-center">
            <div className="animate-spin-slow">
              <Image 
                src="/img/loading1.png"
                alt="Licitaciones Icono"
                width={220}
                height={220}
              />
            </div>
          </div>
          <div className="flex justify-center text-gray-800">
            <p className="w-full md:w-1/2 flex flex-col gap-2 text-xl">
              Estamos construyendo un espacio para conectar.<br />
              Pronto, este será un punto de encuentro en El Valle de Elqui para nuevas oportunidades y colaboraciones.
            </p>
          </div>
          <p className="text-2xl font-bold text-blue-950 mt-6">
            ¡Vuelve pronto para descubrirlo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarcasAsociadas;
