import React from 'react';
import Link from 'next/link';
import { getContacto ,getFooter} from '@/lib/get-homePage';
import { MonedasDeCambio } from './MonedasDeCambio';
import {
  FaInstagram,
  FaFacebook,
FaLinkedin,
  FaTiktok
} from "react-icons/fa";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


export const Footer =async () => {
  const {Direccion,Telefono,Email} = await getContacto()
  const {descripcion,Instagram,Facebook,Linkedin,Tiktok,Boletin} = await getFooter()
//TODO agregar tiktok y cambiar svg por icons de fa
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">EPSUMIN</h3>
            <p className="mb-6 mr-6">
              <BlocksRenderer content={descripcion}/>
            </p>
            <div className="flex space-x-4 mb-4">
               <a
                  href={Facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={22} />
                </a>
                <a
                  href={Instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-[#E1306C] transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href={Linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-[#0A66C2] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href={Tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-black transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok size={22} />
                </a>
            </div>
          </div>
          <div>
            <MonedasDeCambio/>

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
                <span>{Direccion}</span>

              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{Telefono}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{Email}</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter breve */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Suscríbete a Nuestro Boletín</h3>
            <a
              href={Boletin}
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
