"use client";

import { useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Noticia } from "@/types/strapi";


interface NoticiasModalProps {
  noticias: Noticia[];
}


export default function NoticiasModal({ noticias }: { noticias: Noticia[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);

  const handleLeerMas = (noticia: Noticia) => {
    setSelectedNoticia(noticia);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNoticia(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((noticia) => (
          <article
            key={noticia.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 overflow-hidden group">
              {noticia.imagen?.url && (
                <Image
                  src={noticia.imagenUrl || "https://via.placeholder.com/300x200"}
                alt={noticia.imagen?.alternativeText || noticia.titulo}
                fill
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover"
                />

              )}
              <div className="absolute top-3 left-3 bg-blue-950 text-white text-xs font-bold px-2 py-1 rounded">
                {noticia.Categoria}
              </div>
            </div>

            <div className="p-5">
              <p className="text-gray-500 text-sm mb-2">{noticia.fecha}</p>
              <h3 className="font-bold text-lg mb-2 text-amber-600">
                {noticia.titulo}
              </h3>
              <p className="text-gray-600 mb-4">{noticia.extracto}</p>
              <button
                onClick={() => handleLeerMas(noticia)}
                className="text-blue-950 hover:text-amber-600 inline-flex items-center group cursor-pointer"
              >
                <span>Leer más</span>
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {isModalOpen && selectedNoticia && (
        <div className="modal-container">
          <div className="modal-overlay" onClick={closeModal}></div>

          <div className="modal-content modal-animate max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <div>
                <span className="bg-blue-950 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                  {selectedNoticia.Categoria}
                </span>
                <span className="text-gray-500 text-sm">
                  {selectedNoticia.fecha}
                </span>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">
                {selectedNoticia.titulo}
              </h3>

              {selectedNoticia.imagen?.url && (
                <div className="relative h-64 mb-6">
                  <Image
                      src={selectedNoticia.imagenUrl || "https://via.placeholder.com/300x200"}
                      alt={selectedNoticia.titulo}
                      fill
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover"
                    />

                </div>
              )}

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                <BlocksRenderer content={selectedNoticia.contenido_completo}/>

                  
                </p>
              </div>
            </div>

            <div className="flex justify-end p-4 border-t border-gray-200 flex-shrink-0">
              <button
                className="px-6 py-2 bg-blue-950 text-white rounded-md hover:bg-amber-600 transition-colors"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
