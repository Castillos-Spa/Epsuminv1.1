"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SimpleCarouselProps {
  children: React.ReactNode[]
  className?: string
  itemsToShow?: {
    mobile: number
    tablet: number
    desktop: number
  }
  autoPlay?: boolean
  interval?: number
}

export function SimpleCarousel({
  children,
  className = "",
  itemsToShow = { mobile: 1, tablet: 2, desktop: 4 },
  autoPlay = true,
  interval = 5000
}: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [visibleItems, setVisibleItems] = useState(itemsToShow.mobile)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalItems = React.Children.count(children)
  const maxIndex = Math.max(0, totalItems - visibleItems)

  // Actualizar el número de elementos visibles según el ancho de la pantalla
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(itemsToShow.desktop)
      } else if (window.innerWidth >= 768) {
        setVisibleItems(itemsToShow.tablet)
      } else {
        setVisibleItems(itemsToShow.mobile)
      }
    }

    updateVisibleItems()
    window.addEventListener("resize", updateVisibleItems)
    return () => window.removeEventListener("resize", updateVisibleItems)
  }, [itemsToShow])

  // Calcular el ancho de cada elemento cuando cambia el contenedor o los elementos visibles
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth
      setItemWidth(containerWidth / visibleItems)
    }
  }, [visibleItems, containerRef, children])

  // Asegurarse de que el índice actual sea válido cuando cambia el número de elementos visibles
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [currentIndex, maxIndex])

  // Autoplay functionality
  useEffect(() => {
    if (autoPlay && !isPaused) {
      const timer = setInterval(() => {
        if (currentIndex < maxIndex) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setCurrentIndex(0); // Loop back to the beginning
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [autoPlay, currentIndex, maxIndex, interval, isPaused]);

  const scrollPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const scrollNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="overflow-hidden"
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / visibleItems}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {currentIndex > 0 && (
        <button
          onClick={scrollPrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white text-orange-500 shadow-md hover:bg-orange-50 z-10"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {currentIndex < maxIndex && (
        <button
          onClick={scrollNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-white text-orange-500 shadow-md hover:bg-orange-50 z-10"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
