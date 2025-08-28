"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Papa from 'papaparse';

// The key part of the Google Sheet URL
const SHEET_ID = '1rwMrixmkwhWiM4uMiT4Kn2tr40cXiYgS-mDHJ_GrlKc';
// Use the proper format for public CSV access
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

// Mock data as fallback in case the fetch fails
const MOCK_NOTICIAS = [
  {
    id: 1,
    titulo: "Nueva tecnología minera implementada en el Valle",
    extracto: "Innovadora tecnología que mejora la eficiencia y reduce el impacto ambiental.",
    cuerpo: "La tecnología implementada en el valle minero permite aumentar la productividad en un 30% mientras reduce el consumo de agua en un 40%. Este avance representa un hito importante en la minería sostenible de la región.",
    fecha: "20/04/2025",
    imagenId: "", 
    categoria: "Tecnología"
  },
  {
    id: 2,
    titulo: "Capacitación para trabajadores del sector minero",
    extracto: "Programa de capacitación gratuito para mejorar habilidades técnicas y de seguridad.",
    cuerpo: "El programa de capacitación, que beneficiará a más de 200 trabajadores del sector minero, abarcará temas como seguridad operacional, manejo de equipos especializados y protocolos de emergencia.",
    fecha: "15/04/2025",
    imagenId: "", 
    categoria: "Educación"
  },
  {
    id: 3,
    titulo: "Expansión de operaciones mineras genera nuevos empleos",
    extracto: "La expansión creará más de 500 puestos de trabajo en los próximos meses.",
    cuerpo: "La reciente expansión de las operaciones mineras en el valle generará más de 500 nuevos puestos de trabajo directos y aproximadamente 1,200 indirectos en los próximos seis meses.",
    fecha: "10/04/2025",
    imagenId: "", 
    categoria: "Empleo"
  }
];

// TypeScript interface for news items
interface Noticia {
  id: number;
  titulo: string;
  extracto: string;
  cuerpo: string;
  fecha: string;
  imagenId: string;
  categoria: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);

  useEffect(() => {
    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data as Record<string, string>[];
        const noticiasParsed = data.map((item, index) => ({
          id: index + 1,
          titulo: item.titulo || 'Sin título',
          extracto: item.extracto || 'Sin extracto disponible',
          cuerpo: item.cuerpo || 'Sin contenido disponible',
          fecha: item.fecha || new Date().toLocaleDateString(),
          imagenId: item.imagenId || '',
          categoria: item.categoria || 'General'
        }));
        setNoticias(noticiasParsed);
        setLoading(false);
      },
      error: (error) => {
        console.error("Error fetching news data:", error);
        // Fallback to mock data if the fetch fails
        setNoticias(MOCK_NOTICIAS);
        setLoading(false);
      }
    });
  }, []);

  const handleLeerMas = (id: number) => {
    const noticia = noticias.find(n => n.id === id);
    if (noticia) {
      setSelectedNoticia(noticia);
      setIsModalOpen(true);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNoticia(null);
    // Re-enable body scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-blue-950">Noticias del Valle</h2>
          <Link href="/noticias" className="text-blue-950 hover:text-amber-600 inline-flex items-center">
            <span>Ver todas</span>
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        {loading ? (
          // Skeleton loading state
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-5">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <article key={noticia.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow animate-fade-up transition-all duration-300">
                <div className="relative h-48 overflow-hidden group">
                  <Image 
                    src={noticia.imagenId ? `https://drive.google.com/uc?id=${noticia.imagenId}` : '/img/carpas-para-la-mineria.jpg'}
                    alt={noticia.titulo} 
                    fill 
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute top-3 left-3 bg-blue-950 text-white text-xs font-bold px-2 py-1 rounded">
                    {noticia.categoria}
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-gray-500 text-sm mb-2">{noticia.fecha}</p>
                  <h3 className="font-bold text-lg mb-2 text-amber-600">{noticia.titulo}</h3>
                  <p className="text-gray-600 mb-4">{noticia.extracto}</p>
                  <button 
                    onClick={() => handleLeerMas(noticia.id)} 
                    className="text-blue-950 hover:text-amber-600 inline-flex items-center group cursor-pointer"
                  >
                    <span>Leer más</span>
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Modal para mostrar la noticia completa */}
      {isModalOpen && selectedNoticia && (
        <div className="modal-container">
          {/* Overlay con efecto de desenfoque */}
          <div 
            className="modal-overlay"
            onClick={closeModal}
          ></div>
          
          {/* Contenedor del modal con animación */}
          <div className="modal-content modal-animate max-h-[90vh] flex flex-col">
            {/* Cabecera del modal */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
              <div>
                <span className="bg-blue-950 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                  {selectedNoticia.categoria}
                </span>
                <span className="text-gray-500 text-sm">{selectedNoticia.fecha}</span>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {/* Cuerpo del modal con scroll */}
            <div className="p-6 overflow-y-auto flex-grow">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">{selectedNoticia.titulo}</h3>
              
              {selectedNoticia.imagenId && (
                <div className="relative h-64 mb-6">
                  <Image 
                    src={`https://drive.google.com/uc?id=${selectedNoticia.imagenId}`}
                    alt={selectedNoticia.titulo} 
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}
              
              {/* Mostrar el contenido de la noticia con formato mejorado */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedNoticia.cuerpo}
                </p>
              </div>
            </div>
            
            {/* Pie del modal */}
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
    </section>
  );
};

export default Noticias;
