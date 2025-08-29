import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/home/Hero";
import ProductosDestacados from "@/components/sections/home/productoDestacado/ProductosDestacados2";
import ServicioInfo from "@/components/sections/servicios/ServicioInfo";
import MarcasAsociadas from "@/components/sections/home/MarcasAsociadas";
import { AcercaDeNosotros } from "@/components/sections/about/AcercaDeNosotros";
import NuestrosObjetivos from "@/components/sections/about/NuestrosObjetivos";
import NuestrosValores from "@/components/sections/about/NuestrosValores";
import Contacto from "@/components/sections/home/Contacto";
import CatalogoDescarga from "@/components/sections/home/CatalogoDescarga";

// Import your new Client Component that handles dynamic loading
import { DynamicComponents } from "@/components/DynamicComponents";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar /> 
            <Hero />
            
            {/* Render the new component here */}
            <DynamicComponents />
            
            <ProductosDestacados />
            <CatalogoDescarga />
            
            <ServicioInfo />
            <MarcasAsociadas />
            <AcercaDeNosotros />
            <NuestrosObjetivos />
            <NuestrosValores />
            <Contacto />
            <Footer />
        </main>
    );
}