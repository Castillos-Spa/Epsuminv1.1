import { query } from "./strapi-api";

export async function getDestacados() {
  return query("carrousel?populate=destacados.imagen").then((res) => {
    if (res && res.data && res.data.destacados) {
      console.log("Datos recibidos:", res.data.destacados);
      return res.data.destacados;
    }

    console.error(
      "No se encontró el registro para carrousel en Strapi o la estructura de datos es incorrecta."
    );
    return [];
  });
}
