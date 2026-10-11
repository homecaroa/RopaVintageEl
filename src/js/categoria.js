// Página de categoría (HTML estático con texto propio): pinta las prendas de body[data-categoria] y enlaza a las demás.
import { PRODUCTS, CATEGORIAS, CATEGORIA_URL } from '../data/products.js';
import { h, tarjetaPrenda, ordenarPrendas } from './ui.js';

export function iniciar() {
  const clave = document.body.dataset.categoria;
  const lista = document.getElementById('categoria-lista');
  const prendas = ordenarPrendas(PRODUCTS.filter((p) => p.estado === 'publicado' && p.categoria === clave), 'recientes');
  lista.replaceChildren(...(prendas.length
    ? prendas.map((p) => tarjetaPrenda(p))
    : [h('div', { class: 'vacio' }, h('p', { text: 'Todavía no hay prendas en esta categoría. Pronto habrá novedades.' }),
        h('a', { class: 'btn btn-sec', href: 'catalogo.html' }, 'Ver todas las prendas'))]));

  document.getElementById('otras-categorias')?.replaceChildren(
    ...Object.entries(CATEGORIA_URL).filter(([k]) => k !== clave).map(([k, url]) => h('li', {}, h('a', { href: url }, CATEGORIAS[k]))));
}
