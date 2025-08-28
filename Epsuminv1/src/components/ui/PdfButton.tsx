// En /src/components/utils/PdfDownloadButton.jsx
"use client";

import { useState } from "react";
import { FileDown } from "lucide-react"; // Icono para descarga

interface PdfDownloadButtonProps {
  className?: string;
}

export default function PdfDownloadButton({ className = "" }: PdfDownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  // ID del PDF en Drive - Reemplaza con tu ID real
 
  const pdfId = "14XwdGI1YOfUoli9hSKRgELtudvP8hmEe";
  const pdfUrl = `https://drive.google.com/uc?export=download&id=${pdfId}`;
  
  const handleDownload = () => {
    // Opcional: Si quieres añadir un indicador de carga
    setIsLoading(true);
    
    // Simular un pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // El navegador manejará la descarga automáticamente
  };
  
  return (
    <a
      href={pdfUrl}
      onClick={handleDownload}
      className={`inline-flex items-center ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FileDown className="mr-2 h-5 w-5" />
      {isLoading ? "Descargando..." : "Descargar catálogo"}
    </a>
  );
}