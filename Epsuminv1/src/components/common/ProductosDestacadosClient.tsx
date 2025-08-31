"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard2 from '@/components/common/ProductCard2';
import { SimpleCarousel } from '@/components/ui/Carrousel';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface ProductosDestacadosClientProps {
  productos: any[]; // Usamos any[] para simplificar
}

const ProductosDestacadosClient = ({ productos }: ProductosDestacadosClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  
  const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;
  
  // Función para obtener la URL de la imagen
  const getImageUrl = (producto: any) => {
    // Si tiene imagen en Strapi, usa el formato medium (750x750)
    if (producto.imagen?.formats?.medium?.url) {
      return `${strapiHost}${producto.imagen.formats.medium.url}`;
    }
    // Fallback a la imagen original si no hay formato medium
    if (producto.imagen?.url) {
      return `${strapiHost}${producto.imagen.url}`;
    }
    // Fallback a placeholder si no hay imagen
    return "https://via.placeholder.com/300x200/e5e7eb/6b7280?text=Producto";
  };

  const handleVerDetalles = (id: number) => {
    const producto = productos.find(p => p.id === id);
    if (producto) {
      setSelectedProduct(producto);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <SimpleCarousel
        itemsToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
        className="p-4"
        interval={3000}
      >
        {productos.map((producto) => (
          <div key={producto.id} className="p-2">
            <div className="slide-up text-amber-600" style={{ animationDelay: `${producto.id * 100}ms` }}>
              <ProductCard2
                id={producto.id}
                nombre={producto.titulo}
                imagen={getImageUrl(producto)}
                onVerDetalles={handleVerDetalles}
              />
            </div>
          </div>
        ))}
      </SimpleCarousel>

      {/* Modal que se muestra cuando isModalOpen es true */}
      {isModalOpen && selectedProduct && (
        <div className="modal-container">
          <div
            className="modal-overlay"
            onClick={closeModal}
          ></div>
          <div className="modal-content modal-animate">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-blue-950">
                {selectedProduct.titulo}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                <div className="w-24 h-24 relative bg-gray-100 rounded mb-4 md:mb-0">
                  <Image
                    src={getImageUrl(selectedProduct)}
                    alt={selectedProduct.titulo}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="md:ml-6 flex-1">
                  <p className="text-lg font-medium text-blue-950 mb-2">{selectedProduct.titulo}</p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">Descripción:</h4>
                <div className="text-gray-600 bg-gray-50 p-3 rounded-md">
                  {selectedProduct.descripcion ? (
                    <BlocksRenderer content={selectedProduct.descripcion} />
                  ) : (
                    "Sin descripción disponible"
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="px-6 py-2 bg-blue-950 text-white rounded-md hover:bg-amber-600 transition-colors"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductosDestacadosClient;