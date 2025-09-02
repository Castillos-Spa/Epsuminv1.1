"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaBars,
  FaTimes,
  FaLinkedin,
} from "react-icons/fa";

export default function NavbarClient({ contacto }: { contacto: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 bg-gradient-to-b from-white/80 to-white/90 backdrop-filter backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo (izquierda) */}
          <div className="flex-1 md:w-1/4">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-950 hover:text-amber-600"
            >
              EPSUMIN
            </Link>
          </div>

          {/* Burger menu para móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-blue-950 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navegación (centro) */}
          <div className="hidden md:flex md:flex-1 md:w-2/4 justify-center">
            <div className="flex space-x-6 text-center">
              <Link
                href="#productos"
                className="text-black hover:text-amber-600 transition-colors"
              >
                Productos
              </Link>
              <Link
                href="#servicios"
                className="text-black hover:text-amber-600 transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#nosotros"
                className="text-black hover:text-amber-600 transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="#contacto"
                className="text-black hover:text-amber-600 transition-colors"
              >
                Cotizar
              </Link>
            </div>
          </div>

          {/* Redes sociales (derecha) */}
          <div className="hidden md:flex md:flex-1 md:w-1/4 justify-end space-x-4">
            <a
              href={contacto.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href={contacto.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-[#E1306C] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href={contacto.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-blue-950 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="#productos"
                className="text-black hover:text-primary transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="#servicios"
                className="text-black hover:text-primary transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#nosotros"
                className="text-black hover:text-primary transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#contacto"
                className="text-black hover:text-primary transition-colors py-2 border-b"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>

              {/* Redes sociales en menú móvil */}
              <div className="flex space-x-6 pt-2 justify-center">
                <a
                  href={contacto.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-[#E1306C] transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href={`https://wa.me/${contacto.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={22} />
                </a>
                <a
                  href={contacto.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={22} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
