import { getValores } from "@/lib/get-homePage";
import NuestrosValoresClient from "./NuestrosValoresClient";

export default async function NuestrosValoresServer() {
  const valores = await getValores();

  return <NuestrosValoresClient valores={valores} />;
}
