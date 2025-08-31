import React from 'react';
import { getDestacados } from '@/lib/get-destacados';
import ProductosDestacadosClient from '@/components/common/ProductosDestacadosClient';

const ProductosDestacados = async () => {
  // Llama a la API para obtener el array de cards directamente
  const destacadosData = await getDestacados();

  // Si no hay datos, muestra un mensaje de fallback
  if (!destacadosData || destacadosData.length === 0) {
    return (
      <section className="py-16 fade-in bg-stone-100">
        <div className="mx-10 px-5 border-4 rounded-lg bg-white text-center py-20">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            No hay productos destacados disponibles
          </h2>
          <p className="text-gray-600">Por favor, revisa el panel de administración de Strapi para añadir productos destacados.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 fade-in bg-stone-100">
      <div className="mx-10 px-5 border-4 rounded-lg bg-white">
        <h2 className="text-3xl text-start ml-6 font-bold text-center text-blue-950 mb-12 my-4">
          Destacados de la Semana
        </h2>
        {/* Pasamos el array de cards al componente de cliente */}
        <ProductosDestacadosClient productos={destacadosData} />
      </div>
    </section>
  );
};

export default ProductosDestacados;