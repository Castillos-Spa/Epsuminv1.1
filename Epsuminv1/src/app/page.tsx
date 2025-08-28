'use client'

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/home/Hero";
import ProductosDestacados from "@/components/sections/home/productoDestacado/ProductosDestacados2";
// import Catalogo from "@/components/sections/productos/catalogo/catalogoepp";
import ServicioInfo from "@/components/sections/servicios/ServicioInfo";
// import Maquinaria from "@/components/sections/home/Maquinaria";
// import Testimonios from "@/components/sections/home/Testimonios";
// import Noticias from "@/components/sections/home/Noticias";                           
import MarcasAsociadas from "@/components/sections/home/MarcasAsociadas";
import AcercaDeNosotros from "@/components/sections/about/AcercaDeNosotros";
import NuestrosObjetivos from "@/components/sections/about/NuestrosObjetivos";
import NuestrosValores from "@/components/sections/about/NuestrosValores";
import Contacto from "@/components/sections/home/Contacto";
import CatalogoDescarga from "@/components/sections/home/CatalogoDescarga";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import dynamic from 'next/dynamic';
import LazyLoad from '@/components/ui/LazyLoad';

// Dynamically import components that are not needed immediately
const DynamicCatalogo = dynamic(() => import('@/components/sections/productos/catalogo/catalogoepp'), {
  loading: () => <div className="h-96 w-full bg-gray-100 animate-pulse rounded-md"></div>
});

const DynamicTestimonios = dynamic(() => import('@/components/sections/home/Testimonios'), {
  loading: () => <div className="h-80 w-full bg-gray-100 animate-pulse rounded-md"></div>
});

const DynamicNoticias = dynamic(() => import('@/components/sections/home/Noticias'), {
  loading: () => <div className="h-80 w-full bg-gray-100 animate-pulse rounded-md"></div>
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /> {/* Barra de Navegacion*/}
      <Hero/> {/* Seccion principal con fondo con imagen carrusel */}
      
      <FloatingWhatsApp
        phoneNumber="56961463898"
        accountName="EPSUMIN"
        allowClickAway={false}
        notification={true}
        chatMessage="Hola, ¿en qué puedo ayudarte?"
        placeholder="Escribe un mensaje..."
        className="fixed bottom-4 right-4 z-50 text-black"
        avatar="/img/avatar.png"
      />
      
      <ProductosDestacados/> {/* seccion de productos destacados  */}
      
      <CatalogoDescarga/> {/* seccion de catalogo de productos y servicios */}
      
      
      <LazyLoad>
        <DynamicCatalogo/> {/* seccion de catalogo de productos y servicios */}
      </LazyLoad>
      
      
      <ServicioInfo/> {/* Seccion de necesita nuestros servicios */}
    
      
      <LazyLoad>
        <DynamicTestimonios/> {/* seccion de google comentarios */}
      </LazyLoad>
      
      <LazyLoad>
        <DynamicNoticias/> {/* seccion de noticias del valle */}
      </LazyLoad>
      
      <LazyLoad>
        <MarcasAsociadas/> {/* Licitaciones proximamente */}
      </LazyLoad>
      
      
      <AcercaDeNosotros/> {/* Seccion de acerca de nosotros */}
      
      
      <LazyLoad>
        <NuestrosObjetivos/> {/* Seccion de nuestros objetivos */}
      </LazyLoad>
      
      <LazyLoad>
        <NuestrosValores/> {/* Seccion de nuestros valores */}
      </LazyLoad>
      
      
      <Contacto/> {/* form para cotizaciones */}
      
      
      <Footer/>
    </main>
  );
}
