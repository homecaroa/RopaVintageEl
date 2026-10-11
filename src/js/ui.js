// Utilidades compartidas: DOM seguro, formato de precios, enlaces a plataformas, ordenación y tarjeta de prenda.
import { CATEGORIAS, CATEGORIA_URL, CONDICIONES, ETIQUETA_DISPONIBILIDAD } from '../data/products.js';
import { SITE } from '../data/site.config.js';

export const euros = new Intl.NumberFormat(SITE.idioma, { style: 'currency', currency: SITE.moneda });
export const precioTexto = (p) => (typeof p.precio === 'number' ? euros.format(p.precio) : 'Consultar');

export function h(tag, props = {}, ...hijos) {
  const nodo = document.createElement(tag);
  for (const [clave, valor] of Object.entries(props || {})) {
    if (valor == null || valor === false) continue;
    if (clave === 'class') nodo.className = valor;
    else if (clave === 'text') nodo.textContent = valor;
    else if (clave.startsWith('on') && typeof valor === 'function') nodo.addEventListener(clave.slice(2), valor);
    else nodo.setAttribute(clave, valor === true ? '' : valor);
  }
  for (const hijo of hijos.flat()) if (hijo != null && hijo !== false) nodo.append(hijo);
  return nodo;
}

// Solo se aceptan enlaces https a Vinted o Instagram.
const HOSTS = {
  vinted: /^https:\/\/([a-z0-9-]+\.)*vinted\.[a-z]{2,}(\/|$)/i,
  instagram: /^https:\/\/([a-z0-9-]+\.)*instagram\.com(\/|$)/i
};
export function urlPlataforma(clave, url) {
  return typeof url === 'string' && HOSTS[clave] && HOSTS[clave].test(url) ? url : null;
}

export function botonPlataforma(clave, url, texto, clase = 'btn btn-sec') {
  const ok = urlPlataforma(clave, url);
  const nombre = (SITE.plataformas[clave] || SITE.redes[clave]).nombre;
  if (!ok) return h('span', { class: 'btn btn-pendiente', 'aria-disabled': 'true', text: `${nombre}: enlace pendiente` });
  return h('a', { class: clase, href: ok, target: '_blank', rel: 'noopener noreferrer' },
    texto || `Ver en ${nombre}`, h('span', { class: 'sr-only', text: ' (se abre en una pestaña nueva)' }));
}

// Vendidas al final; después, según el modo.
export function ordenarPrendas(lista, modo = 'recientes') {
  const vendida = (p) => (p.disponibilidad === 'vendido' ? 1 : 0);
  const precio = (p, vacio) => (typeof p.precio === 'number' ? p.precio : vacio);
  const comparar = {
    recientes: (a, b) => String(b.fecha || '').localeCompare(String(a.fecha || '')),
    'precio-asc': (a, b) => precio(a, Infinity) - precio(b, Infinity),
    'precio-desc': (a, b) => precio(b, -Infinity) - precio(a, -Infinity)
  }[modo] || (() => 0);
  return [...lista].sort((a, b) => vendida(a) - vendida(b) || comparar(a, b));
}

const PRENDA_SVG =
  '<svg viewBox="0 0 120 90" aria-hidden="true" focusable="false">' +
  '<path d="M42 12 L54 8 Q60 18 66 8 L78 12 L100 30 L90 42 L80 34 L80 80 L40 80 L40 34 L30 42 L20 30 Z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg>';

export function imagenPrenda(p) {
  const marco = h('div', { class: 'media' });
  if (p.imagenes && p.imagenes.length) {
    marco.append(h('img', { src: p.imagenes[0], alt: `${p.nombre} vintage ${p.marca}, talla ${p.talla}`, loading: 'lazy', width: 600, height: 750 }));
  } else {
    const ph = h('div', { class: 'media-ph', role: 'img', 'aria-label': `Imagen provisional de ${p.nombre}` });
    ph.innerHTML = PRENDA_SVG; // constante estática
    ph.append(h('span', { text: 'Imagen provisional' }));
    marco.append(ph);
  }
  return marco;
}

export function tarjetaPrenda(p, { nivel = 3 } = {}) {
  const vendida = p.disponibilidad === 'vendido';
  const etiqueta = p.disponibilidad !== 'disponible' ? ETIQUETA_DISPONIBILIDAD[p.disponibilidad] : null;
  return h('article', { class: 'card' + (vendida ? ' card-agotado' : '') },
    imagenPrenda(p),
    h('div', { class: 'card-body' },
      h('a', { class: 'chip', href: CATEGORIA_URL[p.categoria] || 'catalogo.html', text: CATEGORIAS[p.categoria] || p.categoria }),
      h(`h${nivel}`, {}, h('a', { href: `prenda.html?id=${encodeURIComponent(p.slug)}` }, p.nombre)),
      h('p', { class: 'card-resumen', text: `${p.marca} · Talla ${p.talla}` }),
      h('p', { class: 'card-meta', text: `${CONDICIONES[p.condicion] || ''} · ${p.epoca}` }),
      h('p', { class: 'precio', text: precioTexto(p) }),
      etiqueta ? h('p', { class: 'badge badge-estado', text: etiqueta }) : null,
      p.provisional ? h('p', { class: 'badge', text: 'Ejemplo de demostración' }) : null));
}
