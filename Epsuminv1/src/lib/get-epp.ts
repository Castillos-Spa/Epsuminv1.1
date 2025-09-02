import { getImageUrl } from "./image-helper";
import { query } from "./strapi-api";

export async function getEpp() {
  return query("carrousel?populate[epp][populate][imagen][fields][0]=url").then(
    (res) => {
      if (res && res.data && res.data.epp) {
        console.log("Datos EPP recibidos:", res.data.epp);
        // Procesar cada item para agregar la URL completa de la imagen
        return res.data.epp.map((item: any) => ({
          ...item,
          // Reemplazar la imagen con la URL procesada
          imagenUrl: getImageUrl(item.imagen),
          // Mantener los datos originales de la imagen para otros usos
          imagen: item.imagen,
        }));
      }

      console.error(
        "No se encontró el registro EPP en Strapi o la estructura de datos es incorrecta."
      );
      return [];
    }
  );
}
