"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  const [uf, setUf] = useState<number | null>(null);
  const [dolar, setDolar] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://mindicador.cl/api')
      .then(res => res.json())
      .then(data => {
        setUf(data.uf.valor);
        setDolar(data.dolar.valor);
      })
      .catch(err => console.error('Error al obtener valores:', err));
  }, []);
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">EPSUMIN</h3>
            <p className="mb-6 mr-6">
              Suministro de productos y servicios industriales para cumplir tus necesidades. 
              Comprometidos con la calidad, disponibilidad y la mejora continua para llegar 
              a ser un socio estratégico de nuestros Clientes.  
            </p>
            <div className="flex space-x-4 mb-4">
              {/* <a href="#" className="text-white hover:text-amber-600"> */}
              <a
                href="https://www.facebook.com/epsumin" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={22} />
              </a>
              <a 
                href="https://www.instagram.com/epsumin"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              {/* <a href="#" className="text-white hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a> */}
              <a 
                href="https://www.linkedin.com/epsumin"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-amber-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Monedas de Cambio</h3>
            <ul className="space-y-3">
              <li className="mb-5">
                <span>Valor UF: {uf ? `$${uf.toLocaleString('es-CL', { minimumFractionDigits: 2 })}` : 'Cargando...'}</span>
              </li>
              <li className="mb-5">
                <span>Dólar: {dolar ? `$${dolar.toLocaleString('es-CL', { minimumFractionDigits: 2 })}` : 'Cargando...'}</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="space-y-1">
                  <div>Ruta 41, km 29</div>
                  <div>La Calera, Valle de Elqui</div>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+56 9 6146 3898</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contacto@epsumin.cl</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter breve */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Suscríbete a Nuestro Boletín</h3>
            <a
              href="https://forms.gle/47UAZou7oQHSiBmZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 px-4 py-2 mt-2 rounded text-white hover:bg-blue-900 transition-colors"
            >
              Ir al formulario
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EPSUMIN. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <Link href="/terminos" className="hover:text-white transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white transition-colors">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
