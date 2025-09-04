import { getImageUrl } from "./image-helper";
import { query } from "./strapi-api";
import { BlocksContent } from "@strapi/blocks-react-renderer";

import {
  ProductoDestacado,
  ElementoProteccion,
  HeroSlide,
  Noticia,
  StrapiImage,
} from "@/types/strapi";

// Interfaces para las respuestas de Strapi (basadas en tus tipos existentes)
interface StrapiDestacado {
  id: number;
  titulo: string;
  descripcion: BlocksContent | null;
  imagen: StrapiImage;
}

interface StrapiEpp {
  id: number;
  titulo: string;
  imagen: StrapiImage;
}

interface StrapiHero {
  id: number;
  titulo: string;
  descripcion: BlocksContent | null;
  imagen: StrapiImage;
}

interface StrapiNoticia {
  id: number;
  titulo: string;
  extracto: string;
  contenido_completo: BlocksContent;
  Categoria: string;
  fecha: string;
  imagen: StrapiImage;
}

// ---------- DESTACADOS ----------
export async function getDestacados(): Promise<ProductoDestacado[]> {
  console.log("🔄 [DEBUG] Solicitando DESTACADOS...");
  return query(
    "carrousel?populate[destacados][populate][imagen][fields][0]=url"
  )
    .then((res) => {
      console.log("📦 [DEBUG] Respuesta de DESTACADOS:", {
        tieneData: !!res?.data,
        tieneDestacados: !!res?.data?.destacados,
        cantidadDestacados: res?.data?.destacados?.length || 0,
        estructuraCompleta: res?.data ? Object.keys(res.data) : "No hay data",
      });

      if (res?.data?.destacados) {
        console.log(
          "📸 [DEBUG] Primer item de destacados:",
          JSON.stringify(res.data.destacados[0], null, 2)
        );

        return res.data.destacados.map(
          (item: StrapiDestacado): ProductoDestacado => ({
            id: item.id,
            titulo: item.titulo,
            descripcion: item.descripcion,
            imagen: item.imagen,
            imagenUrl: getImageUrl(item.imagen),
          })
        );
      } else {
        console.warn("⚠️ [DEBUG] No se encontraron destacados en la respuesta");
      }
      return [];
    })
    .catch((error) => {
      console.error("❌ [DEBUG] Error en getDestacados:", error);
      return [];
    });
}

// ---------- EPP ----------
export async function getEpp(): Promise<ElementoProteccion[]> {
  console.log("🔄 [DEBUG] Solicitando EPP...");
  return query("carrousel?populate[epp][populate][imagen][fields][0]=url")
    .then((res) => {
      console.log("📦 [DEBUG] Respuesta de EPP:", {
        tieneData: !!res?.data,
        tieneEpp: !!res?.data?.epp,
        cantidadEpp: res?.data?.epp?.length || 0,
      });

      if (res?.data?.epp) {
        console.log(
          "📸 [DEBUG] Primer item de EPP:",
          JSON.stringify(res.data.epp[0], null, 2)
        );

        return res.data.epp.map(
          (item: StrapiEpp): ElementoProteccion => ({
            id: item.id,
            titulo: item.titulo,
            imagen: item.imagen,
            imagenUrl: getImageUrl(item.imagen),
          })
        );
      } else {
        console.warn("⚠️ [DEBUG] No se encontró EPP en la respuesta");
      }
      return [];
    })
    .catch((error) => {
      console.error("❌ [DEBUG] Error en getEpp:", error);
      return [];
    });
}

// ---------- HERO ----------
export async function getHero(): Promise<HeroSlide[]> {
  console.log("🔄 [DEBUG] Solicitando HERO...");
  return query(
    "carrousel?populate[hero][populate][imagen][fields][0]=url&populate[hero][populate][imagen][fields][1]=alternativeText"
  )
    .then((res) => {
      console.log("📦 [DEBUG] Respuesta de HERO:", {
        tieneData: !!res?.data,
        tieneHero: !!res?.data?.hero,
        cantidadHero: res?.data?.hero?.length || 0,
      });

      if (res?.data?.hero) {
        console.log(
          "📸 [DEBUG] Primer slide de HERO:",
          JSON.stringify(res.data.hero[0], null, 2)
        );

        return res.data.hero.map(
          (slide: StrapiHero): HeroSlide => ({
            id: slide.id,
            titulo: slide.titulo,
            descripcion: slide.descripcion,
            imagen: slide.imagen,
            imagenUrl: getImageUrl(slide.imagen),
          })
        );
      } else {
        console.warn("⚠️ [DEBUG] No se encontró HERO en la respuesta");
      }
      return [];
    })
    .catch((error) => {
      console.error("❌ [DEBUG] Error en getHero:", error);
      return [];
    });
}

// ---------- NOTICIAS ----------
export async function getNoticias(): Promise<Noticia[]> {
  console.log("🔄 [DEBUG] Solicitando NOTICIAS...");
  return query("carrousel?populate[noticias][populate][imagen][fields][0]=url")
    .then((res) => {
      console.log("📦 [DEBUG] Respuesta de NOTICIAS:", {
        tieneData: !!res?.data,
        tieneNoticias: !!res?.data?.noticias,
        cantidadNoticias: res?.data?.noticias?.length || 0,
      });

      if (res?.data?.noticias) {
        console.log(
          "📸 [DEBUG] Primer item de NOTICIAS:",
          JSON.stringify(res.data.noticias[0], null, 2)
        );

        return res.data.noticias.map(
          (item: StrapiNoticia): Noticia => ({
            id: item.id,
            titulo: item.titulo,
            extracto: item.extracto,
            contenido_completo: item.contenido_completo ?? [],
            Categoria: item.Categoria,
            fecha: item.fecha,
            imagen: item.imagen,
            imagenUrl: getImageUrl(item.imagen),
          })
        );
      } else {
        console.warn("⚠️ [DEBUG] No se encontraron noticias en la respuesta");
      }
      return [];
    })
    .catch((error) => {
      console.error("❌ [DEBUG] Error en getNoticias:", error);
      return [];
    });
}
