"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SimpleCarousel } from "@/components/ui/Carrousel";

interface ElementosProteccionClientProps {
  elementosProteccion: any[];
}

export default function ElementosProteccionClient({ elementosProteccion }: ElementosProteccionClientProps) {
  const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;

  // Función para obtener la URL de la imagen
  const getImageUrl = (elemento: any) => {
    // Si tiene imagen en Strapi, usa el formato medium (750x750)
    if (elemento.imagen?.formats?.medium?.url) {
      return `${strapiHost}${elemento.imagen.formats.medium.url}`;
    }
    // Fallback a la imagen original si no hay formato medium
    if (elemento.imagen?.url) {
      return `${strapiHost}${elemento.imagen.url}`;
    }
    // Fallback a placeholder si no hay imagen
    return "/placeholder.svg";
  };

  return (
    <div className="w-full">
      {/* Sección de Insumos para EPP - ALTURA REDUCIDA */}
      <div className="bg-white bg-[url('/img/fondo_catalogo.png')] bg-cover bg-center py-6 xl:py-8">
        <div className="container mx-auto px-4 xl:px-8 2xl:px-16">
          {/* Sección de carpa y contacto - más compacta */}
          <div className="relative mb-0 flex flex-col items-center md:flex-row md:justify-between">
            {/* Recuadro naranja con información */}
            <div className="w-full rounded-lg bg-orange-400 p-6 md:w-3/4 xl:w-3/4 2xl:w-3/4 md:ml-6 md:mr-6 2xl:mr-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="text-lg">
                  <div className="mb-1 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Vestimenta Industrial</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Ropa Ignifuga</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Elementos de Protección Personal</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Toldos para Sombra en Faena</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Insumos para faenas</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Elementos de segregación</span>
                  </div>
                </div>

                <div className="text-lg">
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Estructuras funcionales para faenas</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Equipos de Extinción de Incendio</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Arriendo Placas Compactadoras</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Arriendo Equipos de Iluminación</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Arriendo Generadores de Energía</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Maquinas de movimiento de Tierra</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex justify-end">
                <Link
                  href="#contacto"
                  className="rounded-full bg-white px-8 py-2 font-medium text-blue-950 transition-colors hover:bg-blue-950 hover:text-white border-azul-cyan-300"
                >
                  CONTACTAR
                </Link>
              </div>
            </div>

            {/* Imagen de trabajador - reposicionada para altura reducida */}
            <div className="md:w-1/3 xl:w-1/4 2xl:w-1/5 ml-auto relative">
              <div className="md:absolute md:bottom-[-160px] md:-right-4 xl:bottom-[-170px] 2xl:bottom-[-190px] xl:-right-6 2xl:-right-10">
                <Image
                  src="/img/vista-lateral-ingeniero-hombre-sonriente-casco.png"
                  width={260}
                  height={430}
                  alt="Trabajador"
                  className="h-auto w-full object-contain xl:scale-100 2xl:scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Sección de título y carrusel con fondo blanco compartido - altura reducida */}
          <div className="relative mt-0 md:top-5 xl:mt-0 mb-4 bg-white rounded-xl shadow-md overflow-hidden z-10">
            {/* Títulos mejor organizados para pantallas grandes con altura reducida */}
            <div className="flex flex-col md:flex-row justify-between items-center py-3 px-4 xl:py-4 xl:px-5">
              <h2 className="text-left text-4xl md:text-4xl xl:text-4xl font-bold text-blue-950 mb-1 md:mb-0">EPSUMIN</h2>
              <h2 className="text-right text-xl md:text-lg xl:text-xl 2xl:text-2xl font-bold text-blue-950">
                Vestimenta Industrial y EPP
              </h2>
            </div>

            {/* Galería de imágenes con altura reducida - DATOS DINÁMICOS */}
            <div className="px-3 py-4 xl:py-5">
              <SimpleCarousel 
                itemsToShow={{ mobile: 1, tablet: 2, desktop: 4 }} 
                className="z-10 p-2 md:p-4 xl:p-3 2xl:p-5"
              >
                {elementosProteccion.map((elemento) => (
                  <div key={elemento.id} className="p-1.5 xl:p-1.5">
                    <div className="overflow-hidden rounded-lg bg-white p-1.5 xl:p-2 border-orange-400 border-2 hover:shadow-lg transition-all h-full flex flex-col">
                      {/* Contenedor de imagen con altura y ancho fijo */}
                      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
                        <Image
                          src={getImageUrl(elemento)}
                          width={180}
                          height={180}
                          alt={elemento.titulo || elemento.nombre || "Elemento de protección"}
                          className="object-contain max-h-full max-w-full"
                          loading="lazy"
                          quality={100}
                        />
                      </div>
                      <p className="mt-1 text-center font-medium text-gray-800 text-sm xl:text-sm py-2">
                        {elemento.titulo || elemento.nombre || "Sin nombre"}
                      </p>
                    </div>
                  </div>
                ))}
              </SimpleCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}