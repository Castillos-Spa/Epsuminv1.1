import React from 'react';
import Image from 'next/image';

const testimonios = [
  {
    id: 1,
    nombre: 'Cristian Contreras',
    empresa: 'Constructora San José',
    comentario: 'Estoy satisfecho con los elementos de protección personal que compré, son resistentes y de buena calidad, me brindan la seguridad que necesito para mis trabajadores.',
    estrellas: 5,
    avatar: '/img/Cristian Contreras.jpeg'
  },
  {
    id: 2,
    nombre: 'Alejandro Rojas',
    empresa: 'Industrias del Valle',
    comentario: 'Me sorprendió gratamente la atención personalizada y la flexibilidad en pagos, una verdadera alianza con mis necesidades, excelente servicio y total recomendación.',
    estrellas: 5,
    avatar: '/img/Alejandro Rojas.jpeg'
  },
  {
    id: 3,
    nombre: 'Nicole Sarmiento',
    empresa: 'Minera Los Andes',
    comentario: 'Los equipos arrendados son excelentes, su rendimiento y durabilidad nos permiten trabajar con eficiencia y seguridad en nuestra faena.',
    estrellas: 5,
    avatar: '/img/Alejandra Castillo.jpeg'
  },
];

const Testimonios = () => {
  return (
    <section className="py-16 bg-white bg-[url('/img/fondo2.png')] bg-cover bg-center">
      <div className="container mx-auto px-4">
        <div className="text-center text-right mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-950">Lo Que Dicen Nuestros Clientes</h2>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-blue-950 rounded-lg p-8" >
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4 rounded-full overflow-hidden w-14 h-14 relative">
                  <Image 
                    src={testimonio.avatar} 
                    alt={testimonio.nombre} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">{testimonio.nombre}</h3>
                  <p className="text-gray-600 text-sm">{testimonio.empresa}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonio.estrellas ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700">{testimonio.comentario}</p>
              
              <div className="mt-4 flex items-center">
                <svg className="w-5 h-5 text-blue-950 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
                <span className="text-sm text-gray-500">Verificado por Google</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://www.google.com/business" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-950 hover:text-blue-700"
          >
            <span>Ver todos los comentarios en Google</span>
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
