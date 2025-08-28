"use client";

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import ProductCard2 from '@/components/common/ProductCard2';
import { SimpleCarousel } from '@/components/ui/Carrousel';
import Image from 'next/image';

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagenId: string;
  isNew?: boolean;
  descuento?: number;
  descripcion?: string; // Añadimos descripción
};

const CSV_URL = 'https://docs.google.com/spreadsheets/d/1PoR9PLmRMYKVFw777jURIOsT6Apzu_hUynO7oae_vHA/export?format=csv';

// Skeleton card component
const SkeletonProductCard = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <div className="h-64 bg-gray-200 animate-pulse"></div>
    <div className="p-4">
      <div className="w-full h-10 bg-gray-200 animate-pulse rounded"></div>
    </div>
    <div className="bg-gray-100 py-2 rounded-b-lg">
      <div className="h-6 bg-gray-300 w-3/4 mx-auto rounded animate-pulse"></div>
    </div>
  </div>
);

const ProductosDestacados = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  // Estados para controlar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);

  useEffect(() => {
    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data as Record<string, string>[];
        const productosParseados = data
          .filter((item) => item.destacado?.toLowerCase() === 'true')
          .map((item, index) => ({
            id: index + 1,
            nombre: item.nombre,
            precio: parseInt(item.precio),
            imagenId: item.imagenId,
            isNew: item.isNew?.toLowerCase() === 'true',
            descuento: item.descuento ? parseInt(item.descuento) : undefined,
            descripcion: item.descripcion || 'Sin descripción disponible.' // Asegúrate de que la columna descripción exista en tu CSV
          }));
        setProductos(productosParseados);
        setLoading(false);
      },
      error: () => {
        setLoading(false);
      }
    });
  }, []);

  const handleVerDetalles = (id: number) => {
    console.log(`Ver detalles del producto ${id}`);
    const producto = productos.find(p => p.id === id);
    if (producto) {
      console.log('Producto encontrado:', producto);
      // Abrir el modal con el producto seleccionado
      setSelectedProduct(producto);
      setIsModalOpen(true);
    }
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-16 fade-in bg-stone-100">
      <div className="mx-10 px-5 border-4 rounded-lg bg-white">
        <h2 className="text-3xl text-start ml-6 font-bold text-center text-blue-950 mb-12 my-4">
          Destacados de la Semana
        </h2>
        
        {loading ? (
          // Mostrar carrusel de esqueletos mientras carga
          <SimpleCarousel 
            itemsToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
            className="p-4"
            autoPlay={false}
          >
            {Array(6).fill(0).map((_, index) => (
              <div key={`skeleton-${index}`} className="p-2">
                <SkeletonProductCard />
              </div>
            ))}
          </SimpleCarousel>
        ) : (
          // Mostrar carrusel de productos cuando están cargados
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
                    nombre={producto.nombre}
                    imagen={`https://drive.google.com/uc?id=${producto.imagenId}`}
                    onVerDetalles={handleVerDetalles}
                  />
                </div>
              </div>
            ))}
          </SimpleCarousel>
        )}
      </div>

      {/* Modal que se muestra cuando isModalOpen es true */}
      {isModalOpen && selectedProduct && (
        <div className="modal-container">
          {/* Overlay con efecto de desenfoque */}
          <div 
            className="modal-overlay"
            onClick={closeModal}
          ></div>
          
          {/* Contenedor del modal con animación */}
          <div className="modal-content modal-animate">
            {/* Cabecera del modal */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-blue-950">
                {selectedProduct.nombre}
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
            
            {/* Cuerpo del modal */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                <div className="w-24 h-24 relative bg-gray-100 rounded mb-4 md:mb-0">
                  <Image
                    src={`https://drive.google.com/uc?id=${selectedProduct.imagenId}`}
                    alt={selectedProduct.nombre}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="md:ml-6 flex-1">
                  <p className="text-lg font-medium text-blue-950 mb-2">{selectedProduct.nombre}</p>
                  {/* <p className="text-amber-600 font-semibold text-xl">
                    ${selectedProduct.precio.toLocaleString()}
                  </p> */}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">Descripción:</h4>
                <p className="text-gray-600 bg-gray-50 p-3 rounded-md">{selectedProduct.descripcion || "Sin descripción disponible"}</p>
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
    </section>
  );
};

export default ProductosDestacados;
