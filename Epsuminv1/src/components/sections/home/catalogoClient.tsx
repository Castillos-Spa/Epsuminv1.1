"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CatalogoValor, StrapiDocument, getFileIcon } from "@/types/strapi";

interface CatalogoProductosClientProps {
  catalogoData: CatalogoValor[] | null;
}

export default function CatalogoProductosClient({
  catalogoData,
}: Readonly<CatalogoProductosClientProps>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null); // Contenedor del botón
  const menuRef = useRef<HTMLDivElement>(null); // Menú (portal)
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    function handleResizeOrScroll() {
      if (isDropdownOpen) {
        positionMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll, true);
    };
  }, [isDropdownOpen]);

  const positionMenu = () => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();

    const menuWidth = 320; // w-80 -> 80 * 4
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const desiredHeightApprox = 320; // estimado para decidir si cabe
    const openUpwards = spaceBelow < desiredHeightApprox && rect.top > desiredHeightApprox;

    const top = openUpwards ? rect.top + window.scrollY - desiredHeightApprox - 8 : rect.bottom + window.scrollY + 8;
    const left = rect.left + window.scrollX;

    setMenuStyle({
      position: "absolute",
      top: `${top}px`,
      left: `${left}px`,
      width: `${menuWidth}px`,
      zIndex: 9999,
    });
  };

  useEffect(() => {
    if (isDropdownOpen) {
      positionMenu();
    } else {
      setMenuStyle(null);
    }
  }, [isDropdownOpen]);

  const resolveFileUrl = (doc: StrapiDocument): string | null => {
    if (!doc || !doc.url) return null;
    // Si ya es absoluta
    if (/^https?:\/\//i.test(doc.url)) return doc.url;
    const base = (process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_HOST || "https://admin.epsumin.cl").replace(/\/$/, "");
    return `${base}${doc.url.startsWith('/') ? '' : '/'}${doc.url}`;
  };

  const handleDownload = async (documento: StrapiDocument) => {
    try {
      if (!documento) {
        alert("Archivo no disponible");
        return;
      }
      const fileUrl = resolveFileUrl(documento);
      if (!fileUrl) {
        alert("URL de archivo inválida");
        return;
      }
      const link = window.document.createElement("a");
      link.href = fileUrl;
      link.download = documento.name || "catalogo";
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
    <div ref={triggerRef} className="inline-block">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 rounded-full border-2 border-white px-6 py-2 font-medium text-white bg-blue-950 transition transform duration-300 hover:scale-105 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        Descargar Catálogos
        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
      </button>
      {isDropdownOpen && menuStyle && createPortal(
        <div
          ref={menuRef}
          style={menuStyle}
          className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-fadeIn"
        >
          <div className="py-2 max-h-[60vh] overflow-auto">
            <div className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-100 sticky top-0 bg-white">
              Selecciona un catálogo:
            </div>
            {catalogoData.map((catalogo) => {
              const file = catalogo.Catalogo;
              const ext = file?.ext || '';
              return (
              <button
                key={catalogo.id}
                onClick={() => file && handleDownload(file)}
                className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-950 transition-colors duration-150 flex items-center gap-3 group"
              >
                <span className="text-lg">
                  {ext ? getFileIcon(ext) : '📄'}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{catalogo.nombre}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {file?.name || 'Sin nombre'}
                    <span className="ml-2 uppercase text-gray-400">
                      {ext.replace('.', '')}
                    </span>
                  </div>
                </div>
                <svg
                  className="h-4 w-4 text-gray-400 group-hover:text-blue-950 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
            )})}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}