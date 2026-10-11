// Configuración central. Lo marcado como PENDIENTE debe completarse antes de publicar.
export const PENDIENTE = 'PENDIENTE DE CONFIRMAR';

export const SITE = {
  version: 'vintage-01',
  idioma: 'es-ES',
  moneda: 'EUR',
  enConstruccion: true, // muestra el aviso de contenido provisional en el pie; poner false al publicar prendas reales
  marca: {
    nombre: 'Caroa Vintage',
    esProvisional: false, // nombre decidido; falta comprobar dominio y registro de marca
    logo: 'assets/logo-512.png', // para datos estructurados (cuadrado, fondo sólido)
    logoCabecera: 'assets/logo-cabecera.png',
    ogImagen: 'assets/og-caroa.png',
    eslogan: 'Ropa vintage de marca para hombre, elegida prenda a prenda.',
    descripcion: 'Ropa vintage de marca para hombre de los 80, 90 y 2000, elegida prenda a prenda, con fotos propias, medidas reales y el estado explicado.'
  },
  dominio: null, // p. ej. 'https://midominio.es' cuando exista
  empresa: { titular: 'Caroa', nif: null, domicilio: null, email: null, telefono: null },
  // URL de TU perfil de Vinted (donde se compra). Debe ser https y de vinted.*; si no, se ignora.
  plataformas: {
    vinted: { nombre: 'Vinted', perfil: null }
  },
  // URL de TU perfil de Instagram (solo para seguirte y contactar). Debe ser https y de instagram.com.
  redes: {
    instagram: { nombre: 'Instagram', perfil: null }
  }
};
