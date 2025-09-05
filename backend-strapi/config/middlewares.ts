export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formidable: {
        maxFileSize: 1024 * 1024 * 1024, // 1GB (para permitir videos grandes)
        maxFiles: 1, // Solo 1 archivo por petición
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
