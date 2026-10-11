// Fuente única de datos de las prendas. Las entradas "Ejemplo" son de DEMOSTRACIÓN (provisional: true):
// sustitúyelas por prendas reales. Cada prenda enlaza a su anuncio en Vinted y/o Wallapop (enlaces).
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

// precio = importe orientativo en € (el definitivo es el del anuncio). imagenes: rutas en assets/img/.
// enlaces: URL del anuncio concreto en cada plataforma (null si no está publicado allí).
export const PRODUCTS = [
  {
    id: 'ej-chaqueta-01', slug: 'ejemplo-chaqueta-deportiva', nombre: 'Ejemplo: chaqueta deportiva años 90',
    marca: 'Marca de ejemplo', categoria: 'chaquetas-deportivas', epoca: '90s', talla: 'L',
    medidas: { pecho: '58 cm', manga: '64 cm', largo: '70 cm' },
    condicion: 'muy-bueno', defectos: 'Ejemplo: sin defectos visibles.', etiqueta: 'Ejemplo: etiqueta original visible.',
    descripcion: 'Descripción de ejemplo para ver cómo se presenta una prenda. Sustituir por la descripción real.',
    precio: 35, imagenes: [], enlaces: { vinted: null, wallapop: null },
    estado: 'publicado', disponibilidad: 'disponible', fecha: '2026-10-10', provisional: true,
    seo: { titulo: 'Chaqueta deportiva vintage años 90', descripcion: 'Chaqueta deportiva vintage de los años 90 con medidas reales y estado explicado.' }
  },
  {
    id: 'ej-vaqueros-01', slug: 'ejemplo-vaqueros', nombre: 'Ejemplo: vaqueros clásicos',
    marca: 'Marca de ejemplo', categoria: 'denim', epoca: '90s', talla: '32/32',
    medidas: { cintura: '40 cm', entrepierna: '80 cm', largo: '102 cm' },
    condicion: 'bueno', defectos: 'Ejemplo: ligero desgaste en los bajos.', etiqueta: 'Ejemplo: etiqueta interior legible.',
    descripcion: 'Descripción de ejemplo para ver cómo se presenta una prenda. Sustituir por la descripción real.',
    precio: 32, imagenes: [], enlaces: { vinted: null, wallapop: null },
    estado: 'publicado', disponibilidad: 'disponible', fecha: '2026-10-09', provisional: true,
    seo: { titulo: 'Vaqueros vintage clásicos', descripcion: 'Vaqueros vintage con medidas reales y estado explicado.' }
  },
  {
    id: 'ej-sudadera-01', slug: 'ejemplo-sudadera', nombre: 'Ejemplo: sudadera de marca',
    marca: 'Marca de ejemplo', categoria: 'polos-jerseis', epoca: '2000s', talla: 'M',
    medidas: { pecho: '54 cm', manga: '62 cm', largo: '66 cm' },
    condicion: 'con-detalles', defectos: 'Ejemplo: pequeño desgaste en puños.', etiqueta: 'Ejemplo: etiqueta bordada.',
    descripcion: 'Descripción de ejemplo para ver cómo se presenta una prenda. Sustituir por la descripción real.',
    precio: 24, imagenes: [], enlaces: { vinted: null, wallapop: null },
    estado: 'publicado', disponibilidad: 'reservado', fecha: '2026-10-08', provisional: true,
    seo: { titulo: 'Sudadera vintage de marca', descripcion: 'Sudadera vintage de marca con medidas reales y estado explicado.' }
  },
  {
    id: 'ej-camiseta-01', slug: 'ejemplo-camiseta-y2k', nombre: 'Ejemplo: camiseta gráfica Y2K',
    marca: 'Marca de ejemplo', categoria: 'camisetas-y2k', epoca: '2000s', talla: 'L',
    medidas: { pecho: '56 cm', largo: '72 cm' },
    condicion: 'muy-bueno', defectos: 'Ejemplo: estampado sin grietas.', etiqueta: null,
    descripcion: 'Ejemplo de prenda ya vendida, para ver cómo se muestra ese estado.',
    precio: 22, imagenes: [], enlaces: { vinted: null, wallapop: null },
    estado: 'publicado', disponibilidad: 'vendido', fecha: '2026-10-01', provisional: true,
    seo: { titulo: 'Camiseta gráfica Y2K vintage', descripcion: 'Camiseta gráfica vintage de principios de los 2000.' }
  }
];
