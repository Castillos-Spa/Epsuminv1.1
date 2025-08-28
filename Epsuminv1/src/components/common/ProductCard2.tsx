"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  id: number;
  nombre: string;
  imagen: string;
  onVerDetalles?: (id: number) => void;
}

const ProductCard2 = ({
  id,
  nombre,
  imagen,
  onVerDetalles
}: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleVerDetalles = () => {
    if (onVerDetalles) {
      onVerDetalles(id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative h-64">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-t-lg" />
        )}
        
        {!imageError ? (
          <Image
            src={imagen}
            alt={nombre}
            fill
            style={{ 
              objectFit: 'contain',
              visibility: imageLoaded ? 'visible' : 'hidden' 
            }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-sm">Imagen no disponible</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="w-full">
          <Button
            variant="primary"
            className="text-white rounded-lg bg-blue-950 hover:bg-amber-600 text-left"
            onClick={handleVerDetalles}
          >
            Ver Mas
          </Button>
        </div>
      </div>
      
      <div className="bg-gray-100 py-2 rounded-b-lg">
        {!imageLoaded && !imageError ? (
          <div className="h-6 bg-gray-300 w-3/4 mx-auto rounded animate-pulse" />
        ) : (
          <h3 className="text-lg font-medium text-center">{nombre}</h3>
        )}
      </div>
    </div>
  );
};

export default ProductCard2;