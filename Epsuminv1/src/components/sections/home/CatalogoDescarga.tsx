import PdfDownloadButton from "@/components/ui/PdfButton"
import Image from "next/image"

export default function CatalogoProductos() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16" id="productos">
      {/* Fondo curvo */}
      <div className="absolute left-0 top-0 h-full w-3/5 md:w-2/5 xl:w-2/5 rounded-r-full bg-blue-950"></div>

      <div className="container relative mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
          {/* Columna de imágenes - Aumentada para imagen más grande */}
          <div className="mb-8 w-full md:mb-0 md:w-3/5 xl:w-3/3 xl:-translate-x-50 md:-translate-x-20 -translate-x-15 2xl:-translate-x-130">
            {/* Contenedor de imagen más grande */}
            <div className="relative">
              <Image
                src="/img/movil.png"
                width={600}
                height={900}
                alt="Catálogo de productos en tablet"
                className="h-auto w-full object-contain drop-shadow-2xl md:transition-all md:duration-300 md:transform md:hover:scale-135 md:hover:translate-x-29"
                priority
              />
            </div>
          </div>

          {/* Columna de texto - Ajustada para balancear con imagen */}
          <div className="w-full md:w-2/5 lg:w-1/1 md:pl-8">
            <h2 className="mb-4 text-3xl font-bold md:text-blue-950 md:text-4xl text-amber-600 ">Catalogo de Productos</h2>

            <p className="mb-8 text-xl font-medium text-amber-600 md:text-2xl">
              Te invitamos a conocer nuestra Vestimenta Industrial y Elementos de Protección Personal con las mejores Marcas y Calidad.
            </p>

            <PdfDownloadButton className="rounded-full border-2 border-white px-6 py-2 font-medium text-white bg-blue-950 transition transform duration-300 hover:scale-125 hover:bg-amber-600"/>
          </div>
        </div>
      </div>
    </section>
  )
}

