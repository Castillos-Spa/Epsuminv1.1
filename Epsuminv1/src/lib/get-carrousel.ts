import { getImageUrl } from "./image-helper";
import { query } from "./strapi-api";
import {
  ProductoDestacado,
  ElementoProteccion,
  HeroSlide,
  Noticia,
} from "@/types/strapi";

// ---------- DESTACADOS ----------
export async function getDestacados(): Promise<ProductoDestacado[]> {
  return query(
    "carrousel?populate[destacados][populate][imagen][fields][0]=url"
  ).then((res) => {
    if (res?.data?.destacados) {
      return res.data.destacados.map(
        (item: any): ProductoDestacado => ({
          id: item.id,
          titulo: item.titulo,
          descripcion: item.descripcion,
          imagen: item.imagen,
          imagenUrl: getImageUrl(item.imagen),
        })
      );
    }
    return [];
  });
}

// ---------- EPP ----------
export async function getEpp(): Promise<ElementoProteccion[]> {
  return query("carrousel?populate[epp][populate][imagen][fields][0]=url").then(
    (res) => {
      if (res?.data?.epp) {
        return res.data.epp.map(
          (item: any): ElementoProteccion => ({
            id: item.id,
            titulo: item.titulo,
            imagen: item.imagen,
            imagenUrl: getImageUrl(item.imagen),
          })
        );
      }
      return [];
    }
  );
}

// ---------- HERO ----------
export async function getHero(): Promise<HeroSlide[]> {
  return query(
    "carrousel?populate[hero][populate][imagen][fields][0]=url&populate[hero][populate][imagen][fields][1]=alternativeText"
  ).then((res) => {
    if (res?.data?.hero) {
      return res.data.hero.map(
        (slide: any): HeroSlide => ({
          id: slide.id,
          titulo: slide.titulo,
          descripcion: slide.descripcion,
          imagen: slide.imagen,
          imagenUrl: getImageUrl(slide.imagen),
        })
      );
    }
    return [];
  });
}

// ---------- NOTICIAS ----------
export async function getNoticias(): Promise<Noticia[]> {
  return query(
    "carrousel?populate[noticias][populate][imagen][fields][0]=url"
  ).then((res) => {
    if (res?.data?.noticias) {
      return res.data.noticias.map(
        (item: any): Noticia => ({
          id: item.id,
          titulo: item.titulo,
          extracto: item.extracto,
          contenido_completo: item.contenido_completo,
          Categoria: item.Categoria,
          fecha: item.fecha,
          imagen: item.imagen,
          imagenUrl: getImageUrl(item.imagen),
        })
      );
    }
    return [];
  });
}
