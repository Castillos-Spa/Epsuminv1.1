'use client';
import React from 'react';

const Contacto = () => {
  return (
    <section className="py-16 bg-gray-50" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-950 text-white p-8">
              <h2 className="text-3xl font-bold mb-6">Contáctenos</h2>
              <p className="mb-8">
                Estamos listos para atender sus consultas y proporcionarle una cotización 
                personalizada para sus necesidades específicas.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p>Ruta 41, km 29, La Calera, Valle de Elqui</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p>+56 9 6146 3898</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <p>contacto@epsumin.cl</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Horario de Atención</h3>
                <p>Lunes a Viernes: 8:30 a 18:00</p>
                <p>Sábado: 8:00 a 13:00</p>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">Solicite Cotización</h3>
              <form 
                action="https://formsubmit.co/contacto@epsumin.cl" 
                method="POST"
              >
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-blue-950 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    required
                    className="w-full px-4 py-2 border border-gray-300 text-blue-950 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Su nombre"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="empresa" className="block text-blue-950 mb-2">Empresa</label>
                  <input 
                    type="text" 
                    id="empresa" 
                    name="empresa"
                    className="w-full px-4 py-2 border border-gray-300 text-blue-950 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Nombre de su empresa"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-blue-950 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 text-blue-950 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Su email de contacto"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="telefono" className="block text-blue-950 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono"
                    className="w-full px-4 py-2 border border-gray-300 text-blue-950 rounded focus:outline-none focus:border-blue-500"
                    placeholder="9 XXXXXXXX"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="mensaje" className="block text-blue-950 mb-2">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 text-blue-950 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Describa su requerimiento"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-amber-600 text-white py-3 rounded font-medium hover:bg-blue-950 transition-colors"
                >
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
