const ALLOWED_LIMITS = {
  video: 1,      // Solo 1 video
  image: 100,    // Máximo 100 imágenes
  application: 6, // Máximo 6 files (PDFs, docs, etc.)
  text: 6,       // Archivos de texto también cuentan como files
};

const SIZE_LIMITS = {
  video: 1024 * 1024 * 1024,     // 1GB para videos
  image: 3 * 1024 * 1024,        // 3MB para imágenes
  application: 50 * 1024 * 1024,  // 50MB para PDFs/docs
  text: 5 * 1024 * 1024,         // 5MB para archivos de texto
  audio: 50 * 1024 * 1024,       // 50MB para audio
};

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    
    if (data.mime && data.size) {
      const [type] = data.mime.split('/');
      
      console.log('🔍 Verificando archivo:', data.name);
      console.log('📝 Tipo:', data.mime, '| Tamaño:', (data.size / 1024 / 1024).toFixed(2), 'MB');
      
      // Verificar límite de tamaño por tipo
      const sizeLimit = SIZE_LIMITS[type];
      if (sizeLimit && data.size > sizeLimit) {
        const sizeLimitMB = (sizeLimit / 1024 / 1024).toFixed(0);
        throw new Error(`El archivo ${type} excede el límite de ${sizeLimitMB}MB`);
      }
      
      // Verificar límite de cantidad por tipo
      const countLimit = ALLOWED_LIMITS[type];
      if (countLimit !== undefined) {
        const count = await strapi.db.query('plugin::upload.file').count({
          where: {
            mime: {
              $startsWith: `${type}/`
            }
          }
        });
        
        console.log(`📊 Archivos ${type} actuales: ${count}/${countLimit}`);
        
        if (count >= countLimit) {
          throw new Error(`Límite alcanzado para ${type}: ${countLimit} archivo(s) máximo`);
        }
      }
      
      console.log('✅ Archivo aprobado');
    }
  }
};