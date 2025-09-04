
import { getValores } from "@/lib/get-homePage";
import NuestrosValoresClient from "./NuestrosValoresClient";

export default async function NuestrosValoresServer() {
  const valores = await getValores();

  // Create a default object that matches the `Valores` interface
  // in case the data is null.
  const fallbackValores = {
    id: 0,
    Diversidad: "",
    Sostenibilidad: "",
    Seguridad: "",
    Calidad: "",
  };

  return <NuestrosValoresClient valores={valores ?? fallbackValores} />;
}