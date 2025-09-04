// src/components/layout/Navbar.tsx

import { getFooter } from "@/lib/get-homePage";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const contacto = await getFooter();

  // Create an object that matches the Redes interface
  const redes = {
    // You must provide a value for each property in the Redes interface
    id: contacto?.id ?? 0,
    Email: contacto?.Email ?? '',
    Telefono: contacto?.Telefono ?? '',
    Whatsapp: contacto?.Whatsapp ?? "56912345678",
    Facebook: contacto?.Facebook ?? "https://www.facebook.com/epsumin",
    Instagram: contacto?.Instagram ?? "https://www.instagram.com/epsumin",
    Linkedin: contacto?.Linkedin ?? "https://www.linkedin.com/epsumin",
    Tiktok: contacto?.Tiktok ?? "https://www.tiktok.com/@epsumin",
  };

  return (
    <NavbarClient contacto={redes} />
  );
}