import React from 'react';
import Image from 'next/image';

const Maquinaria = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yellow-100 px-4 py-1 rounded-full text-yellow-800 font-medium text-sm mb-4">
            PRÓXIMAMENTE
          </div>
          <h2 className="text-3xl font-bold mb-6 text-black">Maquinaria Industrial</h2>
          <p className="text-gray-600 text-lg mb-8">
            Estamos ampliando nuestra oferta con una nueva sección de maquinaria industrial. 
            Pronto podrá encontrar una amplia variedad de equipos para su empresa.
          </p>
          
          <div className="relative h-80 rounded-lg overflow-hidden mb-8">
            <Image 
              src="/img/Komatsu.jpg" 
              alt="Maquinaria Industrial" 
              fill 
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end justify-center pb-8">
              <span className="text-white text-2xl font-bold">Maquinaria Industrial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maquinaria;
