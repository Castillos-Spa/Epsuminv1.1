import { getFooter } from "@/lib/get-homePage";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const contacto = await getFooter();

  return (
    <NavbarClient
      contacto={{
        whatsapp: contacto?.Whatsapp || "56912345678",
        facebook: contacto?.Facebook || "https://www.facebook.com/epsumin",
        instagram: contacto?.Instagram || "https://www.instagram.com/epsumin",
        linkedin: contacto?.Linkedin || "https://www.linkedin.com/epsumin",
        tiktok: contacto?.Tiktok || "https://www.tiktok.com/@epsumin",
      }}
    />
  );
}
