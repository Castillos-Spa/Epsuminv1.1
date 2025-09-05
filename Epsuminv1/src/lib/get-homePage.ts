import { query } from "./strapi-api";
import {
  QuienesSomos,
  MisionVision,
  Contacto,
  Footer,
  Valores,
  CatalogoValor,
} from "@/types/strapi";

export async function getQuienesSomos(): Promise<QuienesSomos | null> {
  return query("home-page?populate=quienesSomos").then((res) => {
    // Si res.data no existe, o si la propiedad quienesSomos no existe,
    // retornamos null.
    if (!res.data || !res.data.quienesSomos) {
      console.error(
        "No se encontró el registro para 'quienesSomos' en Strapi."
      );
      return null;
    }

    console.log(
      "quienesSomos:",
      JSON.stringify(res.data.quienesSomos, null, 2)
    );

    // Retornamos los datos correctamente tipados
    return res.data.quienesSomos;
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

// Tipamos la función para que siempre devuelva un objeto Contacto
export async function getContacto(): Promise<Contacto> {
  try {
    const res = await query("home-page?populate=Contacto");
    if (res?.data?.Contacto) {
      console.log("Datos Contacto recibidos:", res.data.Contacto);
      return res.data.Contacto;
    }
  } catch (error) {
    console.error("Error fetching Contacto data:", error);
  }

  // En caso de error o datos faltantes, devuelve un objeto vacío con valores predeterminados
  return {
    id: 0,
    descripcion: [], // Asumiendo que `BlocksContent` puede ser un array vacío
    Direccion: "",
    Telefono: "",
    Email: "",
    Horarios: [],
  };
}

// Hacemos lo mismo para el footer para ser consistentes
export async function getFooter(): Promise<Footer> {
  try {
    const res = await query("home-page?populate=footer");
    if (res?.data?.footer) {
      console.log("Datos Footer recibidos:", res.data.footer);
      return res.data.footer;
    }
  } catch (error) {
    console.error("Error fetching Footer data:", error);
  }

  // Devuelve un objeto vacío en caso de error o datos faltantes
  return {
    id: 0,
    descripcion: [],
    Instagram: "",
    Facebook: "",
    Linkedin: "",
    Whatsapp: "",
    Boletin: "",
    Tiktok: "",
  };
}

export async function getValores(): Promise<Valores | null> {
  // Use a try-catch block for better error handling
  try {
    const res = await query("home-page?populate=valores");

    if (!res.data?.valores) {
      console.error("No se encontró el registro para 'valores' en Strapi.");
      return null;
    }

    console.log("valores:", JSON.stringify(res.data.valores, null, 2));

    // Explicitly return the data, ensuring it matches the type
    return res.data.valores;
  } catch (error) {
    console.error("Error fetching valores data:", error);
    return null;
  }
}
export async function getCatalogo(): Promise<CatalogoValor[] | null> {
  try {
    const res = await query("home-page?populate=Catalogo.Catalogo");

    if (!res.data?.Catalogo) {
      console.error("No se encontró el registro para 'Catalogo' en Strapi.");
      return null;
    }

    console.log("Catalogos:", JSON.stringify(res.data.Catalogo, null, 2));

    // Si es un array, mapear cada item
    if (Array.isArray(res.data.Catalogo)) {
      return (res.data.Catalogo as CatalogoValor[]).map((catalogo: CatalogoValor) => ({
        id: catalogo.id,
        nombre: catalogo.nombre || `Catálogo ${catalogo.id}`, // Usar nombre o fallback
        Catalogo: catalogo.Catalogo,
      }));
    } else {
      // Si es un solo objeto, convertirlo a array
      return [
        {
          id: res.data.Catalogo.id,
          nombre:
            res.data.Catalogo.nombre || `Catálogo ${res.data.Catalogo.id}`,
          Catalogo: res.data.Catalogo.Catalogo,
        },
      ];
    }
  } catch (error) {
    console.error("Error fetching Catalogos data:", error);
    return null;
  }
}
