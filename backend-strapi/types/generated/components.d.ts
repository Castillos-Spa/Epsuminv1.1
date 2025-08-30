import type { Schema, Struct } from '@strapi/strapi';

export interface LandingPageContacto extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_contactos';
  info: {
    displayName: 'Contacto';
    icon: 'book';
  };
  attributes: {
    descripcion: Schema.Attribute.Blocks;
    Direccion: Schema.Attribute.String;
    Email: Schema.Attribute.Email;
    Horarios: Schema.Attribute.Blocks;
    Telefono: Schema.Attribute.String;
  };
}

export interface LandingPageFooter extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_footers';
  info: {
    displayName: 'Footer';
    icon: 'arrowDown';
  };
  attributes: {
    Boletin: Schema.Attribute.String;
    descripcion: Schema.Attribute.Blocks;
    Facebook: Schema.Attribute.String;
    Instagram: Schema.Attribute.String;
    Linkedin: Schema.Attribute.String;
    Whatsapp: Schema.Attribute.String;
  };
}

export interface LandingPageMisionYVision extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_mision_y_visions';
  info: {
    displayName: 'Mision y vision';
    icon: 'star';
  };
  attributes: {
    mision_descripcion: Schema.Attribute.Blocks;
    vision_descripcion: Schema.Attribute.Blocks;
  };
}

export interface LandingPageRedesSociales extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_redes_sociales';
  info: {
    displayName: 'Redes_sociales';
    icon: 'twitter';
  };
  attributes: {};
}

export interface LandingPageSeccionQuienesSomos extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_seccion_quienes_somos';
  info: {
    displayName: 'Secci\u00F3n_Quienes_Somos';
    icon: 'user';
  };
  attributes: {
    descripcion: Schema.Attribute.Blocks;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing-page.contacto': LandingPageContacto;
      'landing-page.footer': LandingPageFooter;
      'landing-page.mision-y-vision': LandingPageMisionYVision;
      'landing-page.redes-sociales': LandingPageRedesSociales;
      'landing-page.seccion-quienes-somos': LandingPageSeccionQuienesSomos;
    }
  }
}
