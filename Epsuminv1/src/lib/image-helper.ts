const strapiHost =
  process.env.NEXT_PUBLIC_STRAPI_HOST || "http://localhost:1337";

/**
 * Helper para construir URLs de imágenes de Strapi
 * @param imagen - Objeto imagen de Strapi o URL string
 * @param fallbackUrl - URL de fallback opcional
 * @returns URL completa de la imagen
 */
export const getImageUrl = (
  imagen?: { url: string } | string | null,
  fallbackUrl: string = "https://via.placeholder.com/300x200/e5e7eb/6b7280?text=Imagen"
): string => {
  // Si no hay imagen, devolver fallback
  if (!imagen) {
    return fallbackUrl;
  }

  // Si es string (URL directa)
  if (typeof imagen === "string") {
    // Si ya es absoluta, devolverla tal cual
    if (imagen.startsWith("http")) {
      return imagen;
    }
    // Si es relativa, agregar el host de Strapi
    return `${strapiHost}${imagen}`;
  }

  // Si es objeto con url
  if (imagen.url) {
    // Si ya es absoluta, devolverla tal cual
    if (imagen.url.startsWith("http")) {
      return imagen.url;
    }
    // Si es relativa, agregar el host de Strapi
    return `${strapiHost}${imagen.url}`;
  }

  // Fallback final
  return fallbackUrl;
};
