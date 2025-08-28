"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/Button';
import CategoriaProductos from '@/components/sections/productos/CategoriaProductos';
import Link from 'next/link';

// Datos para las diapositivas del carrusel
const slides = [
  {
    id: 1,
    image: '/img/Insumos de Faenas.png',
    title: 'Insumos de Faenas y Arriendo de Equipos',
    description: 'Un soporte para tus instalaciones y trabajos en faena',
    buttonText: 'Ver Productos',
    buttonUrl: '#productos'
  },
  {
    id: 2,
    image: '/img/Calidad Garantizada.png',
    imagen2: '/img/torreta.png',
    title: 'Iluminación Sostenible',
    description: 'Energía renovable en faena',
    buttonText: 'Ver Productos',
    buttonUrl: '#productos'
  },
  {
    id: 3,
    image: '/img/AtenciónPersonalizada.png',
    title: 'Personaliza tu ropa de trabajo',
    description: 'Conoce nuestras alternativas',
    buttonText: 'Ver Productos',
    buttonUrl: '#productos'
  },
  {
    id: 4,
    image: '/img/1.jpg',
    title: 'Energia Para Tus Proyectos',
    description: 'Siente la confiabilidad de nuestros equipos',
    buttonText: 'Ver Productos',
    buttonUrl: '#productos'
  },
  {
    id: 5,
    image: '/img/5.jpg',
    title: 'Compacta Con Confianza',
    description: 'Soluciones de compactación',
    buttonText: 'Ver Productos',
    buttonUrl: '#productos'
  },
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-reproducción del carrusel
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Cambia de slide cada 5 segundos
      
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  // Actualiza el índice seleccionado cuando el carrusel se desplaza
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Función para navegar a un slide específico
  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Carrusel principal */}
      <section className="relative min-h-[920px] xl:min-h-[720px] 2xl:min-h-[860px] max-h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide) => (
              <div key={slide.id} className="relative flex-none w-full h-full">
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill
                  quality={100}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center',
                    
                   }}
                   placeholder="blur"
                   blurDataURL={slide.image}
                  priority
                  className='absolute inset-0 object-cover w-full h-full'
                />
                <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-white to-transparent z-[5]" />
                <div className="absolute inset-0 bg-primary/20 flex items-start md:items-center xl:items-center justify-center pt-32 md:pt-5 xl:pt-0">
                  {/* Contenedor con padding/margin responsive */}
                  <div className="container mx-auto 
                  px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 
                  mt-0 mb-40">
                    {/* Row flex responsive con márgenes */}
                    <div className="flex flex-col 
                    sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 
                    items-center 
                    max-w-6xl mx-auto 
                    -mt-0 sm:-mt-16 md:-mt-32 lg:-mt-20 xl:-mt-12 2xl:-mt-16 
                    relative">
                      {/* Panel izquierdo contenido de texto */}
                      <div className="w-full 
                      sm:w-full md:w-3/5 lg:w-3/5 xl:w-2/3 2xl:w-2/3 
                      pr-0 sm:pr-4 md:pr-8 lg:pr-10 xl:pr-8 2xl:pr-12 
                      pb-6 sm:pb-8 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0 
                      z-10 
                      mb-16 sm:mb-24 md:mb-32 lg:mb-40 xl:mb-56 2xl:mb-58">
                        <div className="bg-white/60 p-8 md:p-10 xl:p-8 rounded-2xl shadow-md">
                          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-950">{slide.title}</h1>
                          <p className="text-lg md:text-xl mb-6 text-amber-600 font-bold bold">{slide.description}</p>
                          <Link href={slide.buttonUrl} passHref>
                            <Button
                              className="px-6 py-2 text-white bg-blue-950 rounded-full hover:bg-amber-600 hover:text-white transition-colors duration-300"
                            >
                              {slide.buttonText}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-20"
            onClick={scrollPrev}
            aria-label="Anterior"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-blue-950" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-20"
            onClick={scrollNext}
            aria-label="Siguiente"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-blue-950" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicadores del carrusel */}
        <div className="absolute left-0 right-0 
                  bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-28 xl:bottom-32 2xl:bottom-40 
                  flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex ? 'bg-white scale-110' : 'bg-white/40'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Categorías integradas directamente en el carrusel */}
        <div className="absolute  bottom-0 left-0 right-0 z-10 w-full mb-4 md:mb-8 xl:mb-16">
          <div className="w-full">
            <div className="bg-transparent rounded-t-xl p-8 md:p-0 xl:p-4 animate-slide-in">
              <div className="mx-auto max-w-7xl md:px-0 xl:px-20 px-4">
                <CategoriaProductos />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;