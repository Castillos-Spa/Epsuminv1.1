import { BlocksContent } from "@strapi/blocks-react-renderer";

// Tipos auxiliares para evitar 'any'
export interface StrapiFormatVariant {
  ext?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: string | null;
  size?: number;
  url: string;
  width?: number;
  height?: number;
  // Permitir campos extra sin usar 'any'
  [key: string]: string | number | boolean | null | undefined;
}

export interface StrapiImageFormats {
  thumbnail?: StrapiFormatVariant;
  small?: StrapiFormatVariant;
  medium?: StrapiFormatVariant;
  large?: StrapiFormatVariant;
  // Posibles variantes adicionales generadas por plugins
  [key: string]: StrapiFormatVariant | undefined;
}

// Interfaz para documentos (PDF, Word, Excel, etc.)
export interface StrapiDocument {
  id: number;
  documentId: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  hash: string;
  ext: string; // .pdf, .docx, .xlsx, etc.
  mime: string; // application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, etc.
  size: number; // tamaño en bytes
  url: string;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  width?: number | null;
  height?: number | null;
  formats?: StrapiImageFormats | null;
}

// Interfaz para imágenes (manteniendo compatibilidad)
export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string | null;
  name?: string;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: StrapiImageFormats | null;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
}

// Tipo para campos que pueden ser medios (imágenes o documentos)
export type StrapiMedia = StrapiImage | StrapiDocument;

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
  Email?: string;
  Telefono?: string;
  Horarios?: BlocksContent;
}

export interface Valores {
  id: number;
  Diversidad: string;
  Sostenibilidad: string;
  Seguridad: string;
  Calidad: string;
}

// NUEVA INTERFAZ PARA CATÁLOGO
export interface CatalogoValor {
  id: number;
  nombre?: string; // Hacerlo opcional ya que en tus datos no aparece
  Catalogo: StrapiDocument; // Cambiado a StrapiDocument para documentos
}

export interface Redes {
  id?: number;
  Email?: string;
  Telefono?: string;
  Facebook?: string;
  Instagram?: string;
  Linkedin?: string;
  Tiktok?: string;
  Whatsapp?: string;
  Horarios?: BlocksContent;
}

// ---------- Carrousel ----------
export interface HeroSlide {
  id: number;
  titulo: string;
  descripcion: BlocksContent | null;
  imagen: StrapiImage; // Mantener como StrapiImage para imágenes
  imagenUrl: string;
}

export interface ProductoDestacado {
  id: number;
  titulo: string;
  descripcion: BlocksContent | null;
  imagen: StrapiImage; // Mantener como StrapiImage para imágenes
  imagenUrl: string;
}

export interface ElementoProteccion {
  id: number;
  titulo: string;
  imagen: StrapiImage; // Mantener como StrapiImage para imágenes
  imagenUrl: string;
}

// ---------- Noticias ----------
export interface Noticia {
  id: number;
  titulo: string;
  extracto: string;
  contenido_completo: BlocksContent;
  Categoria: string;
  fecha: string;
  imagen: StrapiImage; // Mantener como StrapiImage para imágenes
  imagenUrl: string;
}

// Función helper para verificar si es documento
export const isStrapiDocument = (
  media: StrapiMedia
): media is StrapiDocument => {
  return (media as StrapiDocument).mime !== undefined;
};

// Función helper para verificar si es imagen
export const isStrapiImage = (media: StrapiMedia): media is StrapiImage => {
  return !isStrapiDocument(media);
};

// Función para obtener el icono según la extensión
export const getFileIcon = (ext: string) => {
  switch (ext.toLowerCase()) {
    case ".pdf":
      return "📄";
    case ".doc":
    case ".docx":
      return "📝";
    case ".xls":
    case ".xlsx":
      return "📊";
    case ".jpg":
    case ".jpeg":
    case ".png":
    case ".gif":
    case ".webp":
      return "🖼️";
    default:
      return "📂";
  }
};
