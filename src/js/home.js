// Portada: últimas prendas, categorías con prendas y botones a los perfiles de Vinted/Wallapop.
import { PRODUCTS, CATEGORIAS } from '../data/products.js';
import { SITE } from '../data/site.config.js';
import { h, tarjetaPrenda, ordenarPrendas, botonPlataforma } from './ui.js';

export function iniciar() {
  const visibles = PRODUCTS.filter((p) => p.estado === 'publicado');

  const rejilla = document.getElementById('prendas-destacadas');
  const ultimas = ordenarPrendas(visibles, 'recientes').slice(0, 4);
  rejilla.replaceChildren(...(ultimas.length
    ? ultimas.map((p) => tarjetaPrenda(p))
    : [h('p', { class: 'vacio', text: 'Todavía no hay prendas publicadas. Vuelve pronto.' })]));

  const lista = document.getElementById('categorias-lista');
  const cats = Object.entries(CATEGORIAS).map(([k, texto]) => [k, texto, visibles.filter((p) => p.categoria === k).length]).filter((x) => x[2] > 0);
  lista.replaceChildren(...(cats.length
    ? cats.map(([k, texto, n]) => h('a', { class: 'perfil', href: `catalogo.html?categoria=${encodeURIComponent(k)}` },
        h('strong', { text: texto }), h('span', { text: `${n} ${n === 1 ? 'prenda' : 'prendas'}` })))
    : [h('p', { class: 'vacio', text: 'Las categorías aparecerán cuando haya prendas publicadas.' })]));

  document.getElementById('plataformas-botones')?.replaceChildren(
    ...Object.entries(SITE.plataformas).map(([clave, pl]) => botonPlataforma(clave, pl.perfil, `Mi perfil en ${pl.nombre}`, 'btn btn-primario')));
}
