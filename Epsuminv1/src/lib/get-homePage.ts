import { query } from "./strapi-api";
import {
  QuienesSomos,
  MisionVision,
  Contacto,
  Footer,
  Valores,
} from "@/types/strapi";

export async function getQuienesSomos(): Promise<QuienesSomos | null> {
  return query("home-page?populate=quienesSomos").then((res) => {
    if (!res.data) {
      console.error(
        "No se encontró el registro para la página de inicio en Strapi."
      );
      return null;
    }
    console.log(
      "quienesSomos:",
      JSON.stringify(res.data.quienesSomos, null, 2)
    );
    return res.data.quienesSomos as QuienesSomos;
  });
}

export async function getMisionVision(): Promise<MisionVision | null> {
  return query("home-page?populate=mision_vision").then((res) => {
    if (!res.data) {
      console.error(
        "No se encontró el registro para la página de inicio en Strapi."
      );
      return null;
    }
    console.log(
      "mision_vision:",
      JSON.stringify(res.data.mision_vision, null, 2)
    );
    return res.data.mision_vision as MisionVision;
  });
}

export async function getContacto(): Promise<Contacto | null> {
  return query("home-page?populate=Contacto").then((res) => {
    if (!res.data) {
      console.error(
        "No se encontró el registro para la página de inicio en Strapi."
      );
      return null;
    }
    console.log("contacto:", JSON.stringify(res.data.Contacto, null, 2));
    return res.data.Contacto as Contacto;
  });
}

export async function getFooter(): Promise<Footer | null> {
  return query("home-page?populate=footer").then((res) => {
    if (!res.data) {
      console.error(
        "No se encontró el registro para la página de inicio en Strapi."
      );
      return null;
    }
    console.log("footer:", JSON.stringify(res.data.footer, null, 2));
    return res.data.footer as Footer;
  });
}

export async function getValores(): Promise<Valores | null> {
  return query("home-page?populate=valores").then((res) => {
    if (!res.data) {
      console.error(
        "No se encontró el registro para la página de inicio en Strapi."
      );
      return null;
    }
    console.log("valores:", JSON.stringify(res.data.valores, null, 2));
    return res.data.valores as Valores;
  });
}
