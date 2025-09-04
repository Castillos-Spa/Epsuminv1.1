import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string | null;
}

// ---------- HOME PAGE SECTIONS ----------
export interface QuienesSomos {
  id: number;
  titulo: string;
  descripcion: BlocksContent | null;
}

export interface MisionVision {
  id: number;
  mision_descripcion: BlocksContent;
  vision_descripcion: BlocksContent;
}

export interface Contacto {
  id: number;
  descripcion: BlocksContent;
  Direccion: string;
  Telefono: string;
  Email: string;
  Horarios: BlocksContent;
}

export interface Footer {
  id: number;
  descripcion: BlocksContent;
  Instagram: string;
  Facebook: string;
  Linkedin: string;
  Whatsapp: string;
  Boletin: string;
  Tiktok: string;
}

export interface Valores {
  id: number;
  Diversidad: string;
  Sostenibilidad: string;
  Seguridad: string;
  Calidad: string;
}
export interface Redes {
  id: number;
  Email: string;
  Telefono: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  Horarios?: BlocksContent;
}

// ---------- Carrousel ----------
export interface HeroSlide {
  id: number;
  titulo: string;
  descripcion: BlocksContent | null;
  imagen: StrapiImage;
  imagenUrl: string;
}

export interface ProductoDestacado {
  id: number;
  titulo: string;
  descripcion: BlocksContent | null;
  imagen: StrapiImage;
  imagenUrl: string;
}

export interface ElementoProteccion {
  id: number;
  titulo: string;
  imagen: StrapiImage;
  imagenUrl: string;
}

// ---------- Noticias ----------
export interface Noticia {
  id: number;
  titulo: string;
  extracto: string;
  contenido_completo: BlocksContent | null;
  Categoria: string;
  fecha: string;
  imagen: StrapiImage;
  imagenUrl: string;
}
