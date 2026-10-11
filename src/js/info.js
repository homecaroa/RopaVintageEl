// Páginas informativas y legales: info.html?p=<clave>. Contenido en src/data/info-pages.js.
import { INFO } from '../data/info-pages.js';
import { SITE } from '../data/site.config.js';
import { h, urlPlataforma } from './ui.js';

const ENLACE_PERMITIDO = /^(info|catalogo|index|prenda)\.html(\?|#|$)/;

function valores() {
  const e = SITE.empresa;
  return {
    titular: e.titular, nif: e.nif, domicilio: e.domicilio, email: e.email, telefono: e.telefono,
    marca: SITE.marca.nombre,
    vinted: urlPlataforma('vinted', SITE.plataformas.vinted.perfil),
    instagram: urlPlataforma('instagram', SITE.redes.instagram.perfil)
  };
}

// Convierte una cadena con marcadores en nodos de texto, enlaces y avisos de dato pendiente.
function texto(cadena) {
  const val = valores();
  const partes = [];
  let i = 0;
  for (const m of cadena.matchAll(/\[([^\]]+)\]\(([^)]+)\)|\{(\??)([^}]+)\}/g)) {
    partes.push(cadena.slice(i, m.index));
    i = m.index + m[0].length;
    if (m[1]) {
      partes.push(ENLACE_PERMITIDO.test(m[2]) ? h('a', { href: m[2] }, m[1]) : m[1]);
    } else if (m[3]) {
      partes.push(h('mark', { class: 'pendiente', text: `Pendiente: ${m[4]}` }));
    } else {
      const dato = val[m[4]];
      if (!dato) partes.push(h('mark', { class: 'pendiente', text: 'Pendiente de confirmar' }));
      else if (m[4] === 'email') partes.push(h('a', { href: `mailto:${dato}` }, dato));
      else if (m[4] === 'vinted' || m[4] === 'instagram') partes.push(h('a', { href: dato, target: '_blank', rel: 'noopener noreferrer' }, dato.replace(/^https:\/\//, '').replace(/\/$/, '')));
      else partes.push(dato);
    }
  }
  partes.push(cadena.slice(i));
  return partes.filter((p) => p !== '');
}

function menuInfo(actual) {
  return h('nav', { class: 'info-nav', 'aria-label': 'Más información' },
    h('h2', { text: 'Más información' }),
    h('ul', {}, Object.entries(INFO).map(([clave, pag]) =>
      h('li', {}, h('a', { href: `info.html?p=${clave}`, 'aria-current': clave === actual ? 'page' : null, text: pag.titulo })))));
}

export function iniciar() {
  const cont = document.getElementById('info-contenido');
  const clave = new URLSearchParams(location.search).get('p') || 'faq';
  const pag = Object.hasOwn(INFO, clave) ? INFO[clave] : null;

  if (!pag) {
    document.title = `Página no encontrada | ${SITE.marca.nombre}`;
    cont.replaceChildren(h('h1', { text: 'No hemos encontrado esa página' }), menuInfo(null));
    return;
  }

  document.title = `${pag.titulo} | ${SITE.marca.nombre}`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', pag.descripcion);

  cont.replaceChildren(
    h('nav', { 'aria-label': 'Migas de pan' }, h('ol', { class: 'migas' },
      h('li', {}, h('a', { href: 'index.html' }, 'Inicio')),
      h('li', { 'aria-current': 'page', text: pag.titulo }))),
    h('div', { class: 'info-grid' },
      h('article', { class: 'texto' },
        h('h1', { text: pag.titulo }),
        pag.revisionLegal ? h('p', { class: 'aviso', role: 'note', text: 'Texto orientativo y provisional: debe revisarlo un profesional antes de empezar a vender.' }) : null,
        pag.secciones.map((s) => h('section', {}, h('h2', { text: s.h }), s.p.map((t) => h('p', {}, texto(t)))))),
      menuInfo(clave)));
}
