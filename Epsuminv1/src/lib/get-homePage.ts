import { query } from "./strapi-api";

export async function getQuienesSomos() {
  return query("home-page?populate=quienesSomos").then((res) => {
    if (res.data === null) {
      console.error(
        "No se encontró el registro para la página de inicio en Strapi."
      );
      return null;
    }
    console.log(res.data.quienesSomos);
    return res.data.quienesSomos;
  });
}

export async function getMisionVision() {
  return query("home-page?populate=mision_vision").then((res) => {
    if (res.data === null) {
      console.error(
        "No se encontró el registro para la página de inicio en Strapi."
      );
      return null;
    }
    console.log(res.data.mision_vision);
    return res.data.mision_vision;
  });
}
