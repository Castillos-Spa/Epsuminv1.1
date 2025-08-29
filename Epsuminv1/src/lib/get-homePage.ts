import { query } from "./strapi-api";

export async function getHomeInfo() {
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
