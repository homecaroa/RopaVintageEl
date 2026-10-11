// Catálogo: filtros por categoría, marca y talla, orden y parámetros en la URL.
import { PRODUCTS, CATEGORIAS } from '../data/products.js';
import { h, tarjetaPrenda, ordenarPrendas } from './ui.js';

const ORDENES = [['recientes', 'Más recientes'], ['precio-asc', 'Precio: de menor a mayor'], ['precio-desc', 'Precio: de mayor a menor']];

function rellenar(select, textoTodos, opciones) {
  select.replaceChildren(
    ...(textoTodos ? [h('option', { value: '', text: textoTodos })] : []),
    ...opciones.map(([valor, texto]) => h('option', { value: valor, text: texto })));
}

function fijar(select, valor, porDefecto = '') {
  select.value = [...select.options].some((o) => o.value === valor) ? valor : porDefecto;
}

export function iniciar() {
  const visibles = PRODUCTS.filter((p) => p.estado === 'publicado');
  const form = document.getElementById('filtros');
  const rejilla = document.getElementById('catalogo-lista');
  const resultado = document.getElementById('resultado');
  const { categoria, marca, talla, orden } = form.elements;
  const unicos = (campo) => [...new Set(visibles.map((p) => p[campo]))].sort((a, b) => String(a).localeCompare(String(b), 'es', { numeric: true }));

  rellenar(categoria, 'Todas las categorías', Object.entries(CATEGORIAS).filter(([k]) => visibles.some((p) => p.categoria === k)));
  rellenar(marca, 'Todas las marcas', unicos('marca').map((m) => [m, m]));
  rellenar(talla, 'Todas las tallas', unicos('talla').map((t) => [t, t]));
  rellenar(orden, null, ORDENES);

  const params = new URLSearchParams(location.search);
  fijar(categoria, params.get('categoria') || '');
  fijar(marca, params.get('marca') || '');
  fijar(talla, params.get('talla') || '');
  fijar(orden, params.get('orden') || 'recientes', 'recientes');

  function quitarFiltros() {
    categoria.value = marca.value = talla.value = '';
    orden.value = 'recientes';
    pintar();
  }

  function pintar() {
    const lista = ordenarPrendas(visibles.filter((p) =>
      (!categoria.value || p.categoria === categoria.value) && (!marca.value || p.marca === marca.value) && (!talla.value || p.talla === talla.value)), orden.value);

    resultado.textContent = visibles.length ? `${lista.length} ${lista.length === 1 ? 'prenda' : 'prendas'}` : '';
    rejilla.replaceChildren(...(lista.length
      ? lista.map((p) => tarjetaPrenda(p, { nivel: 2 }))
      : [h('div', { class: 'vacio' },
          h('p', { text: visibles.length ? 'No hay prendas con esos filtros.' : 'Todavía no hay prendas publicadas. Vuelve pronto.' }),
          visibles.length ? h('button', { class: 'btn btn-sec', type: 'button', onclick: quitarFiltros }, 'Quitar filtros') : null)]));

    const q = new URLSearchParams();
    if (categoria.value) q.set('categoria', categoria.value);
    if (marca.value) q.set('marca', marca.value);
    if (talla.value) q.set('talla', talla.value);
    if (orden.value !== 'recientes') q.set('orden', orden.value);
    history.replaceState(null, '', q.toString() ? `?${q}` : location.pathname);
  }

  form.addEventListener('change', pintar);
  form.addEventListener('submit', (e) => e.preventDefault());
  pintar();
}
