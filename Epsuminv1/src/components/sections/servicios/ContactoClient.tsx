"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function SeccionContactoClient({ contacto }: { contacto: any }) {
      // 🔹 Función para "aplanar" el contenido de Strapi en una sola línea
  const getPlainText = (blocks: any) => {
    if (!blocks) return "";
    return blocks
      .map((block: any) =>
        block.children?.map((child: any) => child.text).join(" ")
      )
      .join(" ");
  };

  return (
    <section className="relative bg-white w-full animate-fade-in" id="servicios">
      <div className="w-full">
        {/* Contenido principal */}
        <div className="pt-4 w-full px-19">
          <div className="grid md:grid-cols-2 py-10">
            {/* Columna izquierda */}
            <div className="pr-4 md:pr-8 flex flex-col justify-center items-start">
              <h2 className="mb-4 text-3xl md:text-5xl font-bold uppercase text-blue-950">
                { "Contáctese con Nosotros"}
              </h2>
              <p className=" text-3xl text-amber-600">
                { "¡¡ Estamos aquí para responder a tus preguntas y atender tus necesidades !!"}
              </p>
              <div className="mt-6">
                <Link
                  href="#contacto"
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#e67e22] to-[#f39c12] rounded-full shadow-lg hover:shadow-xl transform hover:scale-125 transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center">
                    { "SOLICITAR COTIZACIÓN"}
                    <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
                  </span>
                  <span className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-[#e67e22] to-[#f39c12] opacity-75 blur-sm"></span>
                </Link>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative z-20 translate-y-24 xl:translate-y-54 md:translate-y-61 md:translate-x-25 xl:-translate-x-35 flex justify-center items-center animate-slide-in-right">
              <Image
                src={ "/img/asistente.png"}
                alt="Persona con laptop"
                width={400}
                height={400}
                className="ml-auto h-auto max-w-full"
              />
            </div>
          </div>
        </div>

        {/* Info de contacto */}
        <div className="relative z-10 bg-amber-600 px-4 md:px-19 py-10">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex items-center">
              <Mail className="mr-2 h-6 w-6 text-white" />
              <a
                href={`mailto:${contacto?.Email}`}
                className="text-white hover:underline text-lg"
              >
                {contacto?.Email }
              </a>
            </div>

            <div className="flex items-center">
              <Phone className="mr-2 h-6 w-6 text-white" />
              <a
                href={`tel:${contacto?.Telefono}`}
                className="text-white hover:underline text-lg"
              >
                {contacto?.Telefono }
              </a>
            </div>
          </div>
        </div>

        {/* Horario */}
        <div className="flex items-center bg-blue-950 px-19 py-4 h-16">
          <p className="text-white text-sm md:text-lg">
            {getPlainText(contacto?.Horarios)}
          </p>
        </div>
      </div>
    </section>
  );
}
