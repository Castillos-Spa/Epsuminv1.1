import React from "react";
import Image from "next/image";
import { getMisionVision } from "@/lib/get-homePage";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const NuestrosObjetivos = async () => {
  const {mision_descripcion, vision_descripcion} = await getMisionVision()
  return (
    <section className="w-full bg-white">
      <div className="bg-blue-950 text-white text-center py-3 font-bold tracking-wide text-2xl">
        NUESTROS OBJETIVOS
      </div>

      <div
        className="bg-cover bg-center p-6 md:p-12"
        style={{ backgroundImage: "url('/img/fondo3.png')" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-10 text-blue-950">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/material.svg"
              alt="icono"
              width={100}
              height={100}
              className="bg-white border-2 border-amber-600 rounded-md shadow-md"
            />
            <p className="font-bold md:text-lg text-center md:text-left">
              Desarrollar un trabajo seguro para las personas, con alto sentido para nuestros clientes y respetuoso con el medioambiente.
            </p>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            <Image
              src="/escudo.svg"
              alt="icono"
              width={100}
              height={100}
              className="bg-white border-2 border-amber-600 rounded-md shadow-md"
            />
            <p className="font-bold md:text-lg px-4 text-center md:text-left">
              Convertirnos en un proveedor estratégico en el sector minero, suministrando insumos para instalaciones de faena, equipos y maquinarias de manera eficiente.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/lets.svg"
              alt="icono"
              width={100}
              height={100}
              className="bg-white border-2 border-amber-600 rounded-md shadow-md"
            />
            <p className="font-bold md:text-lg text-center md:text-left">
              Maximizar los recursos en nuestros servicios junto a nuestros colaboradores, representando ser una empresa de aporte a la sociedad del Valle de Elqui.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-white px-4 py-8 md:px-20 md:py-10 grid md:grid-cols-2 gap-8 mb-20">
        <div className="flex items-center justify-center">
          <Image src="/mingcute.svg" alt="Misión" width={200} height={200} className="brightness-0 invert"/>
        </div>
        <div>
          <h3 className="font-bold text-base md:text-3xl mb-2">MISIÓN</h3>
          <p className="text-sm md:text-base md:text-xl">
            <BlocksRenderer content={mision_descripcion}/>
          </p>
        </div>
      </div>

      <div className="bg-blue-950 text-white px-4 py-8 md:px-20 md:py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-base md:text-3xl mb-2">VISIÓN</h3>
          <p className="text-lg md:text-base md:text-xl">
            <BlocksRenderer content={vision_descripcion}/>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/mdi_idea.svg" alt="Visión" width={200} height={200} className="brightness-0 invert" />
        </div>
      </div>
    </section>
  );
};

export default NuestrosObjetivos;