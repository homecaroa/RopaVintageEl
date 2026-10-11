// Ficha de prenda: prenda.html?id=<slug>. La compra se hace en Vinted.
import { PRODUCTS, CATEGORIAS, CATEGORIA_URL, CONDICIONES, MEDIDAS, ETIQUETA_DISPONIBILIDAD } from '../data/products.js';
import { SITE } from '../data/site.config.js';
import { h, imagenPrenda, tarjetaPrenda, botonPlataforma, urlPlataforma, precioTexto } from './ui.js';

const pendiente = (texto = 'Pendiente de confirmar') => h('mark', { class: 'pendiente', text: texto });

function noEncontrada(cont) {
  document.title = `Prenda no encontrada | ${SITE.marca.nombre}`;
  cont.replaceChildren(
    h('h1', { text: 'No hemos encontrado esa prenda' }),
    h('p', { text: 'Puede que haya cambiado de enlace o que ya no esté publicada.' }),
    h('a', { class: 'btn btn-primario', href: 'catalogo.html' }, 'Ver todas las prendas'));
}

function migas(p) {
  return h('nav', { 'aria-label': 'Migas de pan' }, h('ol', { class: 'migas' },
    h('li', {}, h('a', { href: 'index.html' }, 'Inicio')),
    h('li', {}, h('a', { href: 'catalogo.html' }, 'Prendas')),
    h('li', {}, h('a', { href: CATEGORIA_URL[p.categoria] || 'catalogo.html' }, CATEGORIAS[p.categoria] || p.categoria)),
    h('li', { 'aria-current': 'page', text: p.nombre })));
}

function galeria(p) {
  const principal = imagenPrenda(p);
  const imgs = p.imagenes || [];
  if (imgs.length < 2) return principal;
  const img = principal.querySelector('img');
  return h('div', {}, principal, h('div', { class: 'miniaturas' }, imgs.map((src, i) =>
    h('button', { type: 'button', class: 'mini', 'aria-label': `Ver foto ${i + 1} de ${imgs.length}`, onclick: () => { img.src = src; } },
      h('img', { src, alt: '', width: 80, height: 100, loading: 'lazy' })))));
}

function compra(p) {
  if (p.disponibilidad === 'vendido') {
    return h('div', {}, h('p', { class: 'disp disp-no', text: 'Vendida' }), h('a', { class: 'btn btn-sec', href: 'catalogo.html' }, 'Ver otras prendas'));
  }
  return h('div', {},
    h('p', { class: 'disp', text: ETIQUETA_DISPONIBILIDAD[p.disponibilidad] }),
    h('div', { class: 'acciones' }, Object.keys(SITE.plataformas).map((k) => botonPlataforma(k, p.enlaces && p.enlaces[k], null, 'btn btn-primario'))),
    h('p', { class: 'nota', text: 'La compra, el pago y el envío se hacen en la plataforma que elijas, con sus condiciones.' }));
}

function cabecera(p) {
  return h('div', { class: 'ficha' },
    galeria(p),
    h('div', {},
      h('p', { class: 'chip', text: CATEGORIAS[p.categoria] || p.categoria }),
      h('h1', { text: p.nombre }),
      h('p', { class: 'lead', text: `${p.marca} · ${p.epoca} · Talla ${p.talla}` }),
      h('p', { class: 'precio' }, precioTexto(p), h('small', { text: ' precio orientativo; vale el del anuncio' })),
      compra(p),
      p.provisional ? h('p', { class: 'badge', text: 'Ejemplo de demostración: no es una prenda real' }) : null));
}

const bloque = (titulo, ...contenido) => h('section', { class: 'bloque' }, h('h2', { text: titulo }), ...contenido);

function medidas(p) {
  const filas = Object.entries(p.medidas || {});
  return bloque('Medidas reales',
    filas.length
      ? h('dl', { class: 'medidas' }, filas.map(([k, v]) => h('div', {}, h('dt', { text: MEDIDAS[k] || k }), h('dd', { text: v }))))
      : h('p', {}, pendiente('Medidas de la prenda')),
    h('p', { class: 'nota', text: 'Compáralas con una prenda tuya que te quede bien: la talla de la etiqueta puede variar entre épocas y marcas.' }));
}

function estado(p) {
  return bloque('Estado y autenticidad',
    h('p', {}, h('strong', { text: 'Condición: ' }), CONDICIONES[p.condicion] || ''),
    h('p', {}, h('strong', { text: 'Detalles y defectos: ' }), p.defectos || pendiente('Detalles y defectos')),
    h('p', {}, h('strong', { text: 'Marca y etiqueta: ' }), p.etiqueta || pendiente('Etiqueta y autenticidad')));
}

function relacionadas(p) {
  const otras = PRODUCTS.filter((x) => x.id !== p.id && x.estado === 'publicado')
    .sort((a, b) => (b.categoria === p.categoria) - (a.categoria === p.categoria));
  if (!otras.length) return null;
  return bloque('Más prendas', h('div', { class: 'rejilla' }, otras.slice(0, 3).map((x) => tarjetaPrenda(x))));
}

// Datos estructurados solo cuando la prenda ya no es de ejemplo (deben coincidir con lo que ve el usuario).
function jsonLd(p) {
  const url = ['vinted'].map((k) => urlPlataforma(k, p.enlaces && p.enlaces[k])).find(Boolean);
  const datos = {
    '@context': 'https://schema.org', '@type': 'Product', name: p.nombre, description: p.descripcion, sku: p.id,
    brand: { '@type': 'Brand', name: p.marca }, itemCondition: 'https://schema.org/UsedCondition',
    ...(p.imagenes && p.imagenes[0] ? { image: new URL(p.imagenes[0], location.href).href } : {}),
    ...(typeof p.precio === 'number' && url ? { offers: { '@type': 'Offer', priceCurrency: SITE.moneda, price: p.precio.toFixed(2), url,
      availability: p.disponibilidad === 'vendido' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock' } } : {})
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(datos);
  document.head.append(script);
}

export function iniciar() {
  const cont = document.getElementById('prenda-contenido');
  const slug = new URLSearchParams(location.search).get('id');
  const p = PRODUCTS.find((x) => x.slug === slug && x.estado === 'publicado');
  if (!p) return noEncontrada(cont);

  document.title = `${(p.seo && p.seo.titulo) || `${p.nombre} ${p.marca} vintage, talla ${p.talla}`} | ${SITE.marca.nombre}`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', (p.seo && p.seo.descripcion) || p.descripcion);

  cont.replaceChildren(...[
    migas(p), cabecera(p),
    bloque('Descripción', h('p', { text: p.descripcion })),
    medidas(p), estado(p),
    bloque('Compra y envío',
      h('p', {}, 'Cada compra se formaliza en Vinted, que gestiona el pago, el envío y las reclamaciones. Más información en ',
        h('a', { href: 'info.html?p=envios-devoluciones' }, 'Envíos y devoluciones'), ' y en ', h('a', { href: 'index.html#como' }, 'Cómo comprar'), '.')),
    relacionadas(p)
  ].filter(Boolean));

  if (!p.provisional) jsonLd(p);
}
