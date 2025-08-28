"use client";
import { ArrowRight, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

export default function SeccionContacto() {
  return (
    <section className="relative bg-white w-full animate-fade-in" id="servicios">
      <div className="w-full">
        {/* Contenido principal con posición ajustada */}
        <div className="pt-4 w-full px-19">
          <div className="grid md:grid-cols-2 py-10">
            {/* Columna izquierda - Texto */}
            <div className="pr-4 md:pr-8 flex flex-col justify-center items-start">
              <h2 className="mb-4 text-3xl md:text-5xl font-bold uppercase text-blue-950">
                Contáctese con Nosotros
              </h2>
              <p className=" text-3xl text-amber-600">
                ¡¡ Estamos aquí para responder a tus preguntas y atender tus necesidades !!
              </p>
              <div className="mt-6">
                <Link
                  href="#contacto"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#e67e22] to-[#f39c12] rounded-full shadow-lg hover:shadow-xl transform hover:scale-125 transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center">
                    SOLICITAR COTIZACIÓN
                    <ArrowRight className="ml-2 h-5 w-5 animate-bounce"/>
                  </span>
                  <span className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-[#e67e22] to-[#f39c12] opacity-75 blur-sm"></span>
                </Link>
              </div>
            </div>
            <div className="relative z-20 translate-y-24 xl:translate-y-54 md:translate-y-61 md:translate-x-25 xl:-translate-x-35 flex justify-center items-center animate-slide-in-right" >
              <Image
                src="/img/asistente.png"
                alt="Persona con laptop"
                width={400}
                height={400}
                className="ml-auto h-auto max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-amber-600 px-4 md:px-19 py-10">
          {/* Cambio de flex-row a flex-col en móvil, y flex-row en md (pantallas medianas y más grandes) */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex items-center">
              <Mail className="mr-2 h-6 w-6 text-white" />
              <a href="mailto:contacto@epsumin.cl" className="text-white hover:underline text-lg">
                contacto@epsumin.cl
              </a>
            </div>

            <div className="flex items-center">
              <Phone className="mr-2 h-6 w-6 text-white" />
              <a href="tel:+56961463898" className="text-white hover:underline text-lg">
              +56 9 6146 3898
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-blue-950 px-19 py-4 h-16">
          <p className="text-white text-sm md:text-lg">
            Lunes a Viernes 08:00 a 18:00 - Sábados 08:00 a 13:00​
          </p>
        </div>
      </div>
    </section>
  )
}

