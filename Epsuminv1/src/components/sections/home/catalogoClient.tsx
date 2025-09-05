"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CatalogoValor, StrapiDocument, getFileIcon } from "@/types/strapi";

interface CatalogoProductosClientProps {
  catalogoData: CatalogoValor[] | null;
}

export default function CatalogoProductosClient({
  catalogoData,
}: Readonly<CatalogoProductosClientProps>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownload = async (documento: StrapiDocument) => {
    try {
      const fileUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${documento.url}`;
      const link = window.document.createElement("a");
      link.href = fileUrl;
      link.download = documento.name;
      link.target = "_blank";
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Error al descargar archivo:", error);
      alert("Error al descargar el archivo.");
    }
  };

  if (!catalogoData || catalogoData.length === 0) {
    return (
      <button disabled className="rounded-full border-2 border-gray-300 px-6 py-2 font-medium text-gray-400 bg-gray-100 cursor-not-allowed">
        No hay catálogos disponibles
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 rounded-full border-2 border-white px-6 py-2 font-medium text-white bg-blue-950 transition transform duration-300 hover:scale-105 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        Descargar Catálogos
        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-500">
          <div className="py-2">
            <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-100">
              Selecciona un catálogo:
            </div>
            {catalogoData.map((catalogo) => (
              <button
                key={catalogo.id}
                onClick={() => handleDownload(catalogo.Catalogo)}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-950 transition-colors duration-150 flex items-center gap-3 group"
              >
                <span className="text-lg">{getFileIcon(catalogo.Catalogo.ext)}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{catalogo.nombre}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {catalogo.Catalogo.name}
                    <span className="ml-2 uppercase text-gray-400">{catalogo.Catalogo.ext.replace('.', '')}</span>
                  </div>
                </div>
                <svg className="h-4 w-4 text-gray-400 group-hover:text-blue-950 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}