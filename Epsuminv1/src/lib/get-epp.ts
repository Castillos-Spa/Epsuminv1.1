import { query } from "./strapi-api";

export async function getEpp() {
  return query("carrousel?populate=epp.imagen").then((res) => {
    if (res && res.data && res.data.epp) {
      console.log("Datos EPP recibidos:", res.data.epp);
      return res.data.epp;
    }

    console.error(
      "No se encontró el registro EPP en Strapi o la estructura de datos es incorrecta."
    );
    return [];
  });
}
