"use client";
import React from 'react';
import Image from 'next/image';
import { CheckCircle, Leaf, BadgeCheck } from 'lucide-react';

const AcercaDeNosotros = () => {
  return (
    <section className="py-16 bg-white" id="nosotros">
      <div className="container px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="relative md:w-1/2 flex justify-center md:justify-end -mr-5">
          <div className="relative w-[300px] h-[300px] md:w-[640px] md:h-[640px] rounded-full overflow-hidden shadow-lg z-10 transition-transform duration-700 hover:scale-115">
            <Image 
              src="/img/about-us.png"
              alt="Trabajador EPSUMIN"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center flex flex-col items-center md:items-center gap-4 ">
          <h2 className="text-3xl font-bold text-blue-950 mb-4 ">¿Quiénes somos?</h2>
          <div className="bg-blue-950 text-white p-6 rounded-lg">
            <p className="text-lg">
              Somos una empresa local del Valle de Elqui. Conformada por profesionales
              comprometidos en ser un socio estratégico confiable para nuestros clientes.
            </p>
          </div>
          {/* Correr todo este div mas a la derecha en tamaño xl y 2xl */}
          <div className="bg-white p-6 border-gray-200 rounded-b-lg items-center flex flex-col gap-4 text-center ">
            <p className="text-gray-700 text-xl font-semibold mb-2">Proveemos</p>
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-700 w-10 h-10" />
                <span className="font-semibold text-gray-800 text-lg">Insumos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-700 w-10 h-10" />
                <span className="font-semibold text-gray-800 text-lg">Equipos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-700 w-10 h-10" />
                <span className="font-semibold text-gray-800 text-lg">Maquinarias</span>
              </div>
            </div>

            <p className="text-gray-700 font-semibold mb-2 text-xl">Fomentamos...</p>
            <div className="flex gap-10">
              <div className="flex flex-col items-center text-center">
                <BadgeCheck className="w-20 h-20 text-green-700 mb-2" />
                <p className="font-semibold text-gray-800 text-lg">El Desarrollo<br />Personal</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="w-20 h-20 text-green-700 mb-2" />
                <p className="font-semibold text-gray-800 text-lg">Respeto por el<br />Medio Ambiente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDeNosotros;
