import { query } from "./strapi-api";

export async function getHomeInfo() {
  return query("home-page?populate=quienesSomos").then((res) => {
    console.log(res.data.quienesSomos);
    return res.data.quienesSomos;
  });
}
