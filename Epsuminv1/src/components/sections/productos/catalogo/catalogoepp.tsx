import React from 'react';
import { getEpp } from '@/lib/get-carrousel';
import ElementosProteccionClient from '@/components/sections/productos/catalogo/ElementosProteccionClient';

export const ElementosProteccionServer = async () => {
  // Obtener datos de EPP desde Strapi
  const eppData = await getEpp();

  // Si no hay datos, mostrar mensaje de fallback
  if (!eppData || eppData.length === 0) {
    return (
      <div className="w-full">
        <div className="bg-white bg-[url('/img/fondo_catalogo.png')] bg-cover bg-center py-6 xl:py-8">
          <div className="container mx-auto px-4 xl:px-8 2xl:px-16">
            <div className="relative mb-0 flex flex-col items-center justify-center py-20">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">
                No hay elementos de protección disponibles
              </h2>
              <p className="text-gray-600">Por favor, revisa el panel de administración de Strapi para añadir elementos EPP.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <ElementosProteccionClient elementosProteccion={eppData} />;
};

export default ElementosProteccionServer;