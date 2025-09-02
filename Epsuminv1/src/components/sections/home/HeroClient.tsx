"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/Button";
import CategoriaProductos from "@/components/sections/productos/CategoriaProductos";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";


export default function HeroClient({ slides  }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <section className="relative min-h-[920px] xl:min-h-[720px] 2xl:min-h-[860px] max-h-screen overflow-hidden">
        {/* Embla viewport */}
        <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={slide.id ?? index} className="relative flex-none w-full h-full">
                <Image
                  src={(slide.imagenUrl)}
                  alt={slide.titulo ?? "Hero"}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                  className="absolute inset-0 object-cover w-full h-full"
                />

                <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-white to-transparent z-[5]" />

                <div className="absolute inset-0 bg-primary/20 flex items-start md:items-center xl:items-center justify-center pt-32 md:pt-5 xl:pt-0">
                  <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mt-0 mb-40">
                    <div className="flex flex-col sm:flex-col md:flex-row items-center max-w-6xl mx-auto relative">
                      <div className="w-full sm:w-full md:w-3/5 lg:w-3/5 xl:w-2/3 pr-0 sm:pr-4 md:pr-8 lg:pr-10 xl:pr-8 2xl:pr-12 pb-6 z-10 mb-16">
                        <div className="bg-white/60 p-8 md:p-10 xl:p-8 rounded-2xl shadow-md">
                          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-950">
                            {slide.titulo}
                          </h1>
                          {slide.descripcion ? (
                            <div className="text-amber-600 font-bold mb-6 prose">
                              <BlocksRenderer content={slide.descripcion} />
                            </div>
                          ) : null}

                          <Link href="#productos" passHref>
                            <Button className="px-6 py-2 text-white bg-blue-950 rounded-full hover:bg-amber-600 hover:text-white transition-colors duration-300">
                              Ver Productos
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

          {/* Flechas */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-20"
            onClick={scrollPrev}
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-20"
            onClick={scrollNext}
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicadores */}
        <div className="absolute left-0 right-0 bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-28 xl:bottom-32 2xl:bottom-40 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === selectedIndex ? "bg-white scale-110" : "bg-white/40"}`}
              onClick={() => scrollTo(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Categorías */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full mb-4 md:mb-8 xl:mb-16">
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
}
