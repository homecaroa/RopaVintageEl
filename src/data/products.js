// Fuente única de datos de las prendas. Las entradas "Ejemplo" son de DEMOSTRACIÓN (provisional: true):
// sustitúyelas por prendas reales. Cada prenda enlaza a su anuncio en Vinted (enlaces).
export const ESTADOS = ['borrador', 'publicado'];
export const DISPONIBILIDADES = ['disponible', 'reservado', 'vendido'];
export const ETIQUETA_DISPONIBILIDAD = { disponible: 'Disponible', reservado: 'Reservada', vendido: 'Vendida' };

export const CATEGORIAS = {
  'chaquetas-deportivas': 'Chaquetas deportivas',
  denim: 'Denim y vaqueros',
  'polos-jerseis': 'Polos, jerséis y sudaderas',
  workwear: 'Workwear y outdoor',
  'camisetas-y2k': 'Camisetas gráficas y Y2K'
};

// Página estática de cada categoría (URL estable y texto propio para SEO).
export const CATEGORIA_URL = {
  'chaquetas-deportivas': 'chaquetas-deportivas-vintage.html',
  denim: 'vaqueros-vintage.html',
  'polos-jerseis': 'sudaderas-y-polos-vintage.html',
  workwear: 'workwear-y-outdoor-vintage.html',
  'camisetas-y2k': 'camisetas-y2k-vintage.html'
};

export const CONDICIONES = {
  excelente: 'Excelente',
  'muy-bueno': 'Muy bueno',
  bueno: 'Bueno',
  'con-detalles': 'Con detalles (indicados)'
};

export const MEDIDAS = {
  pecho: 'Pecho (axila a axila)',
  hombros: 'Hombros',
  manga: 'Manga',
  largo: 'Largo',
  cintura: 'Cintura',
  entrepierna: 'Entrepierna'
};

// SEO de cada prenda real (rellena también seo.titulo y seo.descripcion):
//   nombre:      "Chaqueta deportiva [marca] años 90" (tipo de prenda + marca + época)
//   slug:        tipo-marca-epoca-talla, en minúsculas y con guiones (ej. chaqueta-deportiva-marca-90s-l)
//   seo.titulo:  "[Tipo de prenda] vintage [marca] talla X" (máx. ~55 caracteres; la marca Caroa Vintage se añade sola)
//   seo.descripcion: 120–155 caracteres con tipo de prenda, marca, época, talla y estado.
// precio = importe orientativo en € (el definitivo es el del anuncio). imagenes: rutas en assets/img/.
// enlaces: URL del anuncio concreto en cada plataforma (null si no está publicado allí).
export const PRODUCTS = [
  {
    id: 'ej-chaqueta-01', slug: 'ejemplo-chaqueta-deportiva', nombre: 'Ejemplo: chaqueta deportiva años 90',
    marca: 'Marca de ejemplo', categoria: 'chaquetas-deportivas', epoca: '90s', talla: 'L',
    medidas: { pecho: '58 cm', manga: '64 cm', largo: '70 cm' },
    condicion: 'muy-bueno', defectos: 'Ejemplo: sin defectos visibles.', etiqueta: 'Ejemplo: etiqueta original visible.',
    descripcion: 'Descripción de ejemplo para ver cómo se presenta una prenda. Sustituir por la descripción real.',
    precio: 35, imagenes: [], enlaces: { vinted: null },
    estado: 'publicado', disponibilidad: 'disponible', fecha: '2026-10-10', provisional: true,
    seo: { titulo: 'Chaqueta deportiva vintage años 90 talla L', descripcion: 'Chaqueta deportiva vintage de los años 90, talla L, con medidas reales, estado explicado y enlace de compra en Vinted.' }
  },
  {
    id: 'ej-vaqueros-01', slug: 'ejemplo-vaqueros', nombre: 'Ejemplo: vaqueros clásicos',
    marca: 'Marca de ejemplo', categoria: 'denim', epoca: '90s', talla: '32/32',
    medidas: { cintura: '40 cm', entrepierna: '80 cm', largo: '102 cm' },
    condicion: 'bueno', defectos: 'Ejemplo: ligero desgaste en los bajos.', etiqueta: 'Ejemplo: etiqueta interior legible.',
    descripcion: 'Descripción de ejemplo para ver cómo se presenta una prenda. Sustituir por la descripción real.',
    precio: 32, imagenes: [], enlaces: { vinted: null },
    estado: 'publicado', disponibilidad: 'disponible', fecha: '2026-10-09', provisional: true,
    seo: { titulo: 'Vaqueros vintage clásicos talla 32/32', descripcion: 'Vaqueros vintage de hombre, talla 32/32, con medidas reales de cintura y entrepierna, estado explicado y enlace de compra en Vinted.' }
  },
  {
    id: 'ej-sudadera-01', slug: 'ejemplo-sudadera', nombre: 'Ejemplo: sudadera de marca',
    marca: 'Marca de ejemplo', categoria: 'polos-jerseis', epoca: '2000s', talla: 'M',
    medidas: { pecho: '54 cm', manga: '62 cm', largo: '66 cm' },
    condicion: 'con-detalles', defectos: 'Ejemplo: pequeño desgaste en puños.', etiqueta: 'Ejemplo: etiqueta bordada.',
    descripcion: 'Descripción de ejemplo para ver cómo se presenta una prenda. Sustituir por la descripción real.',
    precio: 24, imagenes: [], enlaces: { vinted: null },
    estado: 'publicado', disponibilidad: 'reservado', fecha: '2026-10-08', provisional: true,
    seo: { titulo: 'Sudadera vintage de marca talla M', descripcion: 'Sudadera vintage de marca de los años 2000, talla M, con medidas reales, detalles de estado y enlace de compra en Vinted.' }
  },
  {
    id: 'ej-camiseta-01', slug: 'ejemplo-camiseta-y2k', nombre: 'Ejemplo: camiseta gráfica Y2K',
    marca: 'Marca de ejemplo', categoria: 'camisetas-y2k', epoca: '2000s', talla: 'L',
    medidas: { pecho: '56 cm', largo: '72 cm' },
    condicion: 'muy-bueno', defectos: 'Ejemplo: estampado sin grietas.', etiqueta: null,
    descripcion: 'Ejemplo de prenda ya vendida, para ver cómo se muestra ese estado.',
    precio: 22, imagenes: [], enlaces: { vinted: null },
    estado: 'publicado', disponibilidad: 'vendido', fecha: '2026-10-01', provisional: true,
    seo: { titulo: 'Camiseta gráfica Y2K vintage talla L', descripcion: 'Camiseta gráfica vintage Y2K de principios de los 2000, talla L, con medidas reales y estado explicado.' }
  }
];
