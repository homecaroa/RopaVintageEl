// Configuración central. Lo marcado como PENDIENTE debe completarse antes de publicar.
export const PENDIENTE = 'PENDIENTE DE CONFIRMAR';

export const SITE = {
  version: 'vintage-01',
  idioma: 'es-ES',
  moneda: 'EUR',
  marca: {
    nombre: 'Archivo Vintage',
    esProvisional: true, // nombre de trabajo: sin comprobar dominio ni marca registrada
    eslogan: 'Ropa vintage de marca, elegida prenda a prenda.',
    descripcion: 'Prendas vintage de marca de los 80, 90 y 2000 seleccionadas una a una, con fotos propias, medidas reales y el estado explicado.'
  },
  dominio: null, // p. ej. 'https://midominio.es' cuando exista
  empresa: { titular: null, nif: null, domicilio: null, email: null, telefono: null },
  // URLs de TUS perfiles. Deben ser https y de vinted.* o wallapop.com; si no, se ignoran.
  plataformas: {
    vinted: { nombre: 'Vinted', perfil: null },
    wallapop: { nombre: 'Wallapop', perfil: null }
  }
};
