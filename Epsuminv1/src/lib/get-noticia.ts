import { getImageUrl } from "./image-helper";
import { query } from "./strapi-api";

export async function getNoticias() {
  return query(
    "carrousel?populate[noticias][populate][imagen][fields][0]=url"
  ).then((res) => {
    if (res && res?.data && res.data.noticias) {
      console.log("Datos Noticias recibidos:", res.data.noticias);
      // Procesar cada item para agregar la URL completa de la imagen
      return res.data.noticias.map((item: any) => ({
        ...item,
        // Reemplazar la imagen con la URL procesada
        imagenUrl: getImageUrl(item.imagen),
        // Mantener los datos originales de la imagen para otros usos
        imagen: item.imagen,
      }));
    }

    console.error(
      "No se encontró el registro Noticias en Strapi o la estructura de datos es incorrecta."
    );
    return [];
  });
}
