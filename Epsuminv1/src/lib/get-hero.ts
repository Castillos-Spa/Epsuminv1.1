import { getImageUrl } from "./image-helper";
import { query } from "./strapi-api";

export async function getHero() {
  return query(
    "carrousel?populate[hero][populate][imagen][fields][0]=url&populate[hero][populate][imagen][fields][1]=alternativeText"
  ).then((res) => {
    if (res && res.data && res.data.hero) {
      console.log("Datos Hero recibidos:", res.data.hero);
      // Procesar cada slide para agregar la URL completa de la imagen
      return res.data.hero.map((slide: any) => ({
        id: slide.id,
        titulo: slide.titulo,
        descripcion: slide.descripcion,
        // Usar el helper para procesar la URL de la imagen
        imagenUrl: getImageUrl(slide.imagen),
        // Mantener datos originales para otros usos
        imagen: slide.imagen,
      }));
    }

    console.error(
      "No se encontró el registro Hero en Strapi o la estructura de datos es incorrecta."
    );
    return [];
  });
}
