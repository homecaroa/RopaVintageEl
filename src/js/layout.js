// Cabecera y pie compartidos por todas las páginas.
import { SITE } from '../data/site.config.js';
import { CATEGORIAS, CATEGORIA_URL } from '../data/products.js';
import { h, urlPlataforma } from './ui.js';

const NAV = [
  ['Prendas', 'catalogo.html', 'catalogo'],
  ['Categorías', 'index.html#categorias', 'categorias'],
  ['Cómo comprar', 'index.html#como', 'como'],
  ['Quiénes somos', 'info.html?p=quienes-somos', 'quienes-somos'],
  ['Preguntas', 'info.html?p=faq', 'faq']
];

const COLUMNAS = [
  ['Tienda', [['Todas las prendas', 'catalogo.html'], ['Cómo comprar', 'index.html#como'], ['Quiénes somos', 'info.html?p=quienes-somos']]],
  ['Ayuda', [['Preguntas frecuentes', 'info.html?p=faq'], ['Envíos y devoluciones', 'info.html?p=envios-devoluciones'], ['Contacto', 'info.html?p=contacto']]],
  ['Legal', [['Aviso legal', 'info.html?p=aviso-legal'], ['Condiciones de uso y compra', 'info.html?p=condiciones'], ['Privacidad', 'info.html?p=privacidad'], ['Cookies', 'info.html?p=cookies']]]
];

// Enlaces externos a los perfiles configurados (solo si son válidos).
function perfilesExternos() {
  return [...Object.entries(SITE.plataformas), ...Object.entries(SITE.redes)]
    .map(([clave, pl]) => ({ clave, nombre: pl.nombre, url: urlPlataforma(clave, pl.perfil) }))
    .filter((x) => x.url);
}

const externo = (nombre, url) => h('a', { href: url, target: '_blank', rel: 'noopener noreferrer' }, nombre, h('span', { class: 'sr-only', text: ' (se abre en una pestaña nueva)' }));

export function montarCabecera(pagina) {
  const cont = document.getElementById('site-header');
  if (!cont) return;
  const menu = h('nav', { id: 'menu', class: 'nav', 'aria-label': 'Principal' },
    NAV.map(([texto, href, clave]) => h('a', { href, 'aria-current': clave === pagina ? 'page' : null }, texto)));
  const boton = h('button', {
    class: 'menu-btn', type: 'button', 'aria-expanded': 'false', 'aria-controls': 'menu',
    onclick: (e) => e.currentTarget.setAttribute('aria-expanded', String(menu.classList.toggle('abierto')))
  }, 'Menú');
  const perfiles = perfilesExternos();
  cont.replaceChildren(h('div', { class: 'wrap bar' },
    h('a', { class: 'logo', href: 'index.html', 'aria-label': `${SITE.marca.nombre}, inicio` },
      h('img', { src: SITE.marca.logoCabecera, alt: '', width: 45, height: 112 }), h('span', { text: SITE.marca.nombre })),
    menu,
    perfiles.length ? h('div', { class: 'cab-enlaces' }, perfiles.map((x) => externo(x.nombre, x.url))) : null,
    boton));
}

export function montarPie() {
  const cont = document.getElementById('site-footer');
  if (!cont) return;
  const e = SITE.empresa;
  const titular = e.titular
    ? ['Titular: ' + e.titular, e.nif, e.domicilio].filter(Boolean).join(' · ') + '.'
    : 'Datos del titular pendientes de completar.';
  const columnas = COLUMNAS.map(([titulo, enlaces]) => [titulo, enlaces.map(([t, href]) => h('li', {}, h('a', { href }, t)))]);
  columnas.splice(1, 0, ['Categorías', Object.entries(CATEGORIA_URL).map(([k, url]) => h('li', {}, h('a', { href: url }, CATEGORIAS[k])))]);
  const ext = perfilesExternos();
  if (ext.length) columnas[0][1].push(...ext.map((x) => h('li', {}, externo(SITE.plataformas[x.clave] ? `Comprar en ${x.nombre}` : `Síguenos en ${x.nombre}`, x.url))));
  cont.replaceChildren(h('div', { class: 'wrap' },
    h('div', { class: 'pie-grid' },
      h('div', {}, h('p', { class: 'pie-marca', text: SITE.marca.nombre }), h('p', { text: SITE.marca.descripcion })),
      columnas.map(([titulo, items]) => h('nav', { 'aria-label': titulo }, h('h2', { class: 'pie-titulo', text: titulo }), h('ul', {}, items)))),
    h('p', { class: 'pie-legal', text: `© ${new Date().getFullYear()} ${SITE.marca.nombre}. ${titular}${SITE.enConstruccion ? ' Sitio en construcción: contenido provisional.' : ''}` })));
}
