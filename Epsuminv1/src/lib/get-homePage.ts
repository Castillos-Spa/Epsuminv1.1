import { query } from "./strapi-api";

export async function getHomeInfo() {
  return query("home-page").then((res) => {
    return res.data;
  });
}
