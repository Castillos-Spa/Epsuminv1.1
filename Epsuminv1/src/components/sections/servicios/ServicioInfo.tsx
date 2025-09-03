import { getContacto } from "@/lib/get-homePage";
import SeccionContactoClient from "./ContactoClient";

export default async function SeccionContactoServer() {
  const contacto = await getContacto();

  return <SeccionContactoClient contacto={contacto} />;
}
