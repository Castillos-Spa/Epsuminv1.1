"use client";

import React from 'react';

import ProductCard2 from '@/components/common/ProductCard2';

const productos = [
  { id: 1, nombre: 'Casco de Seguridad', precio: 25000, imagen: '/img/casco.png', isNew: true },
  { id: 2, nombre: 'Taladro Profesional', precio: 89000, imagen: '/img/taladro.png', descuento: 10 },
  { id: 3, nombre: 'Guantes de Nitrilo', precio: 12000, imagen: '/img/guantes.png' },
  { id: 4, nombre: 'Botas Industriales', precio: 65000, imagen: '/img/botas.png', isNew: true },
];

const ProductosDestacados = () => {
  const handleVerDetalles = (id: number) => {
    console.log(`Ver detalles del producto ${id}`);
    // Aquí podrías implementar la navegación a la página de detalles
  };

  return (
    <section className="py-16 fade-in bg-stone-100">
      <div className=" mx-10 px-5 border-4 rounded-lg bg-white">
        <h2 className="text-3xl text-start ml-6 font-bold text-center text-blue-950 mb-12 my-4">Destacados de la Semana</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mb-5">
          
          
          {/* Los dos últimos productos usan ProductCard2 */}
          {productos.slice(0, 4).map((producto) => (
            <div key={producto.id} className="slide-up text-amber-600" style={{ animationDelay: `${producto.id * 100}ms` }}>
              <ProductCard2
                id={producto.id}
                nombre={producto.nombre}
                imagen={producto.imagen}
                onVerDetalles={handleVerDetalles}
              />
            </div>
          ))}
        </div>
        {/* <div className="text-center text-black mt-12">
          <Button variant="outline" size="lg">
            Ver Todos los Productos
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProductosDestacados;
