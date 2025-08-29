import type { Schema, Struct } from '@strapi/strapi';

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
      'landing-page.seccion-quienes-somos': LandingPageSeccionQuienesSomos;
    }
  }
}
