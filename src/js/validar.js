// Validación de datos de prendas. main.js avisa por consola si algo no cuadra.
import { PRODUCTS, ESTADOS, DISPONIBILIDADES, CATEGORIAS, CONDICIONES } from '../data/products.js';
import { SITE } from '../data/site.config.js';
import { urlPlataforma } from './ui.js';

export function validarProductos(productos = PRODUCTS) {
  const vistos = new Set();
  return productos.map((p) => {
    const errores = [];
    if (!p.id || !p.slug || !p.nombre) errores.push('faltan id, slug o nombre');
    if (vistos.has(p.id) || vistos.has(p.slug)) errores.push('id o slug duplicado');
    vistos.add(p.id);
    vistos.add(p.slug);
    if (!ESTADOS.includes(p.estado)) errores.push('estado no válido');
    if (!DISPONIBILIDADES.includes(p.disponibilidad)) errores.push('disponibilidad no válida');
    if (!CATEGORIAS[p.categoria]) errores.push('categoría no válida');
    if (!CONDICIONES[p.condicion]) errores.push('condición no válida');
    if (!p.marca || !p.talla) errores.push('faltan marca o talla');
    if (p.precio != null && !(typeof p.precio === 'number' && p.precio > 0)) errores.push('precio no válido');
    for (const clave of Object.keys(SITE.plataformas)) {
      const url = p.enlaces && p.enlaces[clave];
      if (url && !urlPlataforma(clave, url)) errores.push(`enlace de ${clave} no válido (debe ser https y de la plataforma)`);
    }
    return { producto: p, errores };
  });
}
