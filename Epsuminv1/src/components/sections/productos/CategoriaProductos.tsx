// Modify CategoriaProductos.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categorias = [
  { id: 1, nombre: 'Vestimenta Industrial', imagen: '/img/Vestimenta Industrial.png' },
  { id: 2, nombre: 'Insumos de Faena​', imagen: '/img/Carpa.png' },
  { id: 3, nombre: 'Arriendo de Equipos', imagen: '/img/Equipos.webp' },
  { id: 4, nombre: 'Arriendo de Maquinaria', imagen: '/img/Maquinarias.png' },
];

const CategoriaProductos = () => {
  return (
    <div className='w-full px-2  md:px-6 xl:px-10 items-center' >
      <div className="bg-blue-950/80 py-2 sm:py-3 md:py-4 mb-4 rounded-full w-2xs mx-auto max-w-[200px] sm:max-w-[300px] mx-auto">
        <h2 className=" font-bold text-center text-white px-2 bold">Conoce Nuestras Categorías</h2>
      </div>
      {/* Grid con mejor espaciado responsivo */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-1 xl:gap-2 mx-1 md:mx-5 xl:mx-7 ">
        {categorias.map((categoria) => (
          <Link href="#productos" key={categoria.id} className="group">
            <div className="flex flex-col items-center p-1 sm:p-2">
              {/* Tamaño de imagen adaptativo */}
              <div className="rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 xl:w-39 xl:h-39
                              mt-7 md:mb-4 bg-white shadow-md
                              group-hover:border-amber-600 group-hover:shadow-lg transition-all">
                <div className="relative w-full h-full">
                  <Image 
                    src={categoria.imagen} 
                    alt={categoria.nombre} 
                    fill 
                    sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 180px"
                    style={{ objectFit: 'cover'}}
                    priority
                  />
                </div>
              </div>
              {/* Texto responsivo */}
              <h3 className="text-sm sm:text-sm md:text-base xl:text-lg font-bold bold text-center text-blue-950 
                           group-hover:text-amber-600 transition-colors px-1 md:px-1 xl:px-1
                           line-clamp-2 h-[2.5em]">
                {categoria.nombre}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriaProductos;